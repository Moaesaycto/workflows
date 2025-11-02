# JWTs in Spring Boot

**This tutorial assumes you have set up a Spring Boot server successfully.** You can find the tutorial to do this [here](/workflows/#/computing/java/Making-a-Spring-Boot-Server).

- Install the relevant dependencies into `bulid.gradle`:

```gradle
dependencies {
  // ...
  implementation "org.springframework.boot:spring-boot-starter-security"
  implementation "org.springframework.boot:spring-boot-starter-oauth2-resource-server"
  implementation "org.springframework.security:spring-security-crypto"
  implementation "com.nimbusds:nimbus-jose-jwt:9.40" // issue tokens
}
```

- In your `application.yaml` file, include the important information for the JWTs to be generated. **THIS IS NOT SECURE!** You will need to use an appropriate environment variable in actual code:

```yaml
app:
  jwt:
    secret: "change-me-at-least-32-bytes-long" # use env var in real life
    expiry-minutes: 15
  security:
    public-paths:
      - /error # This one is important
      - /game/
      - /game/status
      - /game/settings
      # add your ones
# You only need this if you are using a different encoder. Our tutorial builds one
# spring:
#  security:
#    oauth2:
#      resourceserver:
#        jwt:
#         # use your issuer or jwk-set-uri from your auth provider (Auth0, Keycloak, etc.)
#         # issuer-uri: "https://your-issuer.example/.well-known/openid-configuration"
#         # or instead:
#         # jwk-set-uri: "https://your-issuer.example/.well-known/jwks.json"
```

- Create a security configuration class:

```java
import org.springframework.context.annotation.*;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

  private final AppSecurityProperties props;

  // We are storing these in the application.yml file. You can just hard-code a list if you aren't bothered
  public SecurityConfig(AppSecurityProperties props) {
    this.props = props;
  }

  @Bean
  SecurityFilterChain api(HttpSecurity http) throws Exception {
    String[] publicPaths =
        props.getPublicPaths() == null
            ? new String[0]
            : props.getPublicPaths().toArray(new String[0]);

    http.csrf(AbstractHttpConfigurer::disable)
        .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(
            auth -> auth.requestMatchers(publicPaths).permitAll().anyRequest().authenticated())
        .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));

    return http.build();
  }

  @Bean
  PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}

```

If you care about only using specific methods, then you can do so like this:

```java
.requestMatchers(HttpMethod.PATCH, "/game/settings").permitAll()
.requestMatchers("/game", "/game/", "/game/status").permitAll()
```

In order to actually access the routes from the configuration, you need a separate class:

```java
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@ConfigurationProperties(prefix = "app.security")
public class AppSecurityProperties {
  private List<String> publicPaths;

  public List<String> getPublicPaths() {
    return publicPaths;
  }

  public void setPublicPaths(List<String> publicPaths) {
    this.publicPaths = publicPaths;
  }
}
```

- We must now set up a `JwtBeans` configuration to handle encoding (creating) and decoding (verifying) JWTs using a shared secret (HS256).

```java
import com.nimbusds.jose.jwk.source.ImmutableSecret;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.security.oauth2.jwt.*;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;

@Configuration
public class JwtBeans {
  @Bean
  JwtEncoder jwtEncoder(@Value("${app.jwt.secret}") String secret) {
    var key = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
    return new NimbusJwtEncoder(new ImmutableSecret<SecurityContext>(key));
  }

  @Bean
  JwtDecoder jwtDecoder(@Value("${app.jwt.secret}") String secret) {
    var key = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
    return NimbusJwtDecoder.withSecretKey(key).build();
  }
}
```

- To assign a user a valid token on login, we can create an `/auth` mapping:

```java
package dev.moae; // FIXME

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
  private final JwtEncoder encoder;
  private final PasswordEncoder pe;
  private final long expiryMinutes;
  private final String demoUser = "moae";
  private final String demoHash; // bcrypt of "pass"

  public AuthController(JwtEncoder enc, PasswordEncoder pe,
                        @Value("${app.jwt.expiry-minutes}") long exp) {
    this.encoder = enc; this.pe = pe; this.expiryMinutes = exp;
    this.demoHash = pe.encode("pass");
  }

  record LoginRequest(String username, String password) {}

  @PostMapping("/login")
  public Map<String,String> login(@RequestBody LoginRequest req) {
    if (!demoUser.equals(req.username()) || !pe.matches(req.password(), demoHash))
      throw new org.springframework.web.server.ResponseStatusException(
          org.springframework.http.HttpStatus.UNAUTHORIZED, "Bad credentials");

    var now = Instant.now();
    var claims = JwtClaimsSet.builder()
        .issuer("hello-web")
        .issuedAt(now)
        .expiresAt(now.plusSeconds(expiryMinutes * 60))
        .subject(req.username())
        .claim("scope", "api.read api.write")
        .build();
    String token = encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    return Map.of("access_token", token, "token_type", "Bearer");
  }
}
```

- Finally, to protect any endpoint and verify the JWT, we can use the following:

```java
package dev.moae.hello;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class DemoController {
  @GetMapping("/me")
  public Map<String,Object> me(@AuthenticationPrincipal Jwt jwt) {
    return Map.of("sub", jwt.getSubject(), "scope", jwt.getClaim("scope"));
  }
}
```

## Notes that may be useful
- `@Bean` tells Spring, "create this object once at startup and manage it for me."