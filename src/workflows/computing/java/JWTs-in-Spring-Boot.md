# JWTs in Spring Boot

**This tutorial assumes you have set up a Spring Boot server successfully.** You can find the tutorial to do this [here](/workflows/#/computing/java/Making-a-Spring-Boot-Server).

- Install the relevant dependencies into `bulid.gradle`:

```
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

spring:
  security:
    oauth2:
      resourceserver:
        jwt: {} # decoder provided in @Configuration below
```

- Create a security configuration class:

```java
import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {
  @Bean
  SecurityFilterChain api(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable()) // Disable CSRF since we're using tokens, not cookies
        // Tell Spring Security this is a stateless API (no HTTP session stored)
        .sessionManagement(sm -> sm.sessionCreationPolicy(
            org.springframework.security.config.http.SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth -> auth
            // Allow anyone to access /auth/login (no authentication needed)
            .requestMatchers("/auth/login").permitAll()
            // All other endpoints must have a valid JWT token
            .anyRequest().authenticated())
        .oauth2ResourceServer(o2 -> o2.jwt());
    return http.build();
  }

  // Provides a password encoder bean for hashing and verifying passwords
  @Bean PasswordEncoder passwordEncoder(){ return new BCryptPasswordEncoder(); }
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