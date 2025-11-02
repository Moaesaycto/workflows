const r=`# JWTs in Spring Boot\r
\r
**This tutorial assumes you have set up a Spring Boot server successfully.** You can find the tutorial to do this [here](/workflows/#/computing/java/Making-a-Spring-Boot-Server).\r
\r
- Install the relevant dependencies into \`bulid.gradle\`:\r
\r
\`\`\`gradle\r
dependencies {\r
  // ...\r
  implementation "org.springframework.boot:spring-boot-starter-security"\r
  implementation "org.springframework.boot:spring-boot-starter-oauth2-resource-server"\r
  implementation "org.springframework.security:spring-security-crypto"\r
  implementation "com.nimbusds:nimbus-jose-jwt:9.40" // issue tokens\r
}\r
\`\`\`\r
\r
- In your \`application.yaml\` file, include the important information for the JWTs to be generated. **THIS IS NOT SECURE!** You will need to use an appropriate environment variable in actual code:\r
\r
\`\`\`yaml\r
app:\r
  jwt:\r
    secret: "change-me-at-least-32-bytes-long" # use env var in real life\r
    expiry-minutes: 15\r
  security:\r
    public-paths:\r
      - /error # This one is important\r
      - /game/\r
      - /game/status\r
      - /game/settings\r
      # add your ones\r
# You only need this if you are using a different encoder. Our tutorial builds one\r
# spring:\r
#  security:\r
#    oauth2:\r
#      resourceserver:\r
#        jwt:\r
#         # use your issuer or jwk-set-uri from your auth provider (Auth0, Keycloak, etc.)\r
#         # issuer-uri: "https://your-issuer.example/.well-known/openid-configuration"\r
#         # or instead:\r
#         # jwk-set-uri: "https://your-issuer.example/.well-known/jwks.json"\r
\`\`\`\r
\r
- Create a security configuration class:\r
\r
\`\`\`java\r
import org.springframework.context.annotation.*;\r
import org.springframework.security.config.Customizer;\r
import org.springframework.security.config.annotation.web.builders.HttpSecurity;\r
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;\r
import org.springframework.security.config.http.SessionCreationPolicy;\r
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\r
import org.springframework.security.crypto.password.PasswordEncoder;\r
import org.springframework.security.web.SecurityFilterChain;\r
\r
@Configuration\r
public class SecurityConfig {\r
\r
  private final AppSecurityProperties props;\r
\r
  // We are storing these in the application.yml file. You can just hard-code a list if you aren't bothered\r
  public SecurityConfig(AppSecurityProperties props) {\r
    this.props = props;\r
  }\r
\r
  @Bean\r
  SecurityFilterChain api(HttpSecurity http) throws Exception {\r
    String[] publicPaths =\r
        props.getPublicPaths() == null\r
            ? new String[0]\r
            : props.getPublicPaths().toArray(new String[0]);\r
\r
    http.csrf(AbstractHttpConfigurer::disable)\r
        .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\r
        .authorizeHttpRequests(\r
            auth -> auth.requestMatchers(publicPaths).permitAll().anyRequest().authenticated())\r
        .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));\r
\r
    return http.build();\r
  }\r
\r
  @Bean\r
  PasswordEncoder passwordEncoder() {\r
    return new BCryptPasswordEncoder();\r
  }\r
}\r
\r
\`\`\`\r
\r
If you care about only using specific methods, then you can do so like this:\r
\r
\`\`\`java\r
.requestMatchers(HttpMethod.PATCH, "/game/settings").permitAll()\r
.requestMatchers("/game", "/game/", "/game/status").permitAll()\r
\`\`\`\r
\r
In order to actually access the routes from the configuration, you need a separate class:\r
\r
\`\`\`java\r
import org.springframework.boot.context.properties.ConfigurationProperties;\r
import org.springframework.stereotype.Component;\r
\r
import java.util.List;\r
\r
@Component\r
@ConfigurationProperties(prefix = "app.security")\r
public class AppSecurityProperties {\r
  private List<String> publicPaths;\r
\r
  public List<String> getPublicPaths() {\r
    return publicPaths;\r
  }\r
\r
  public void setPublicPaths(List<String> publicPaths) {\r
    this.publicPaths = publicPaths;\r
  }\r
}\r
\`\`\`\r
\r
- We must now set up a \`JwtBeans\` configuration to handle encoding (creating) and decoding (verifying) JWTs using a shared secret (HS256).\r
\r
\`\`\`java\r
import com.nimbusds.jose.jwk.source.ImmutableSecret;\r
import com.nimbusds.jose.proc.SecurityContext;\r
import org.springframework.beans.factory.annotation.Value;\r
import org.springframework.context.annotation.*;\r
import org.springframework.security.oauth2.jwt.*;\r
\r
import javax.crypto.spec.SecretKeySpec;\r
import java.nio.charset.StandardCharsets;\r
\r
@Configuration\r
public class JwtBeans {\r
  @Bean\r
  JwtEncoder jwtEncoder(@Value("\${app.jwt.secret}") String secret) {\r
    var key = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");\r
    return new NimbusJwtEncoder(new ImmutableSecret<SecurityContext>(key));\r
  }\r
\r
  @Bean\r
  JwtDecoder jwtDecoder(@Value("\${app.jwt.secret}") String secret) {\r
    var key = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");\r
    return NimbusJwtDecoder.withSecretKey(key).build();\r
  }\r
}\r
\`\`\`\r
\r
- To assign a user a valid token on login, we can create an \`/auth\` mapping:\r
\r
\`\`\`java\r
package dev.moae; // FIXME\r
\r
import org.springframework.beans.factory.annotation.Value;\r
import org.springframework.security.crypto.password.PasswordEncoder;\r
import org.springframework.security.oauth2.jwt.*;\r
import org.springframework.web.bind.annotation.*;\r
\r
import java.time.Instant;\r
import java.util.Map;\r
\r
@RestController\r
@RequestMapping("/auth")\r
public class AuthController {\r
  private final JwtEncoder encoder;\r
  private final PasswordEncoder pe;\r
  private final long expiryMinutes;\r
  private final String demoUser = "moae";\r
  private final String demoHash; // bcrypt of "pass"\r
\r
  public AuthController(JwtEncoder enc, PasswordEncoder pe,\r
                        @Value("\${app.jwt.expiry-minutes}") long exp) {\r
    this.encoder = enc; this.pe = pe; this.expiryMinutes = exp;\r
    this.demoHash = pe.encode("pass");\r
  }\r
\r
  record LoginRequest(String username, String password) {}\r
\r
  @PostMapping("/login")\r
  public Map<String,String> login(@RequestBody LoginRequest req) {\r
    if (!demoUser.equals(req.username()) || !pe.matches(req.password(), demoHash))\r
      throw new org.springframework.web.server.ResponseStatusException(\r
          org.springframework.http.HttpStatus.UNAUTHORIZED, "Bad credentials");\r
\r
    var now = Instant.now();\r
    var claims = JwtClaimsSet.builder()\r
        .issuer("hello-web")\r
        .issuedAt(now)\r
        .expiresAt(now.plusSeconds(expiryMinutes * 60))\r
        .subject(req.username())\r
        .claim("scope", "api.read api.write")\r
        .build();\r
    String token = encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();\r
    return Map.of("access_token", token, "token_type", "Bearer");\r
  }\r
}\r
\`\`\`\r
\r
- Finally, to protect any endpoint and verify the JWT, we can use the following:\r
\r
\`\`\`java\r
package dev.moae.hello;\r
\r
import org.springframework.security.core.annotation.AuthenticationPrincipal;\r
import org.springframework.security.oauth2.jwt.Jwt;\r
import org.springframework.web.bind.annotation.*;\r
\r
import java.util.Map;\r
\r
@RestController\r
public class DemoController {\r
  @GetMapping("/me")\r
  public Map<String,Object> me(@AuthenticationPrincipal Jwt jwt) {\r
    return Map.of("sub", jwt.getSubject(), "scope", jwt.getClaim("scope"));\r
  }\r
}\r
\`\`\`\r
\r
## Notes that may be useful\r
- \`@Bean\` tells Spring, "create this object once at startup and manage it for me."`;export{r as default};
