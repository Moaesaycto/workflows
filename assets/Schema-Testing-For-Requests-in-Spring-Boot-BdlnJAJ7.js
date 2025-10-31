const r=`# Schema Testing for Requests in Spring Boot\r
\r
Starting by importing the required dependency:\r
\r
\`\`\`gradle\r
dependencies {\r
    // Normal stuff ...\r
    implementation 'org.springframework.boot:spring-boot-starter-validation'\r
}\r
\`\`\`\r
\r
Now, you set up a DTO (data transfer object).\r
\r
\`\`\`java\r
import jakarta.validation.constraints.NotBlank;\r
import jakarta.validation.constraints.NotNull;\r
import java.util.UUID;\r
\r
public class JoinRequest {\r
  @NotBlank(message = "name is required")\r
  private String name;\r
\r
  @NotNull(message = "team is required")\r
  private UUID team;\r
\r
  public JoinRequest() {}\r
\r
  public JoinRequest(String name, UUID team) {\r
    this.name = name;\r
    this.team = team;\r
  }\r
\r
  public String getName() { return name; }\r
  public void setName(String name) { this.name = name; }\r
\r
  public UUID getTeam() { return team; }\r
  public void setTeam(UUID team) { this.team = team; }\r
}\r
\`\`\`\r
\r
Alternatively, you can use Java records:\r
\r
\`\`\`java\r
public record JoinRequest(\r
  @NotBlank(message = "name is required") String name,\r
  @NotNull(message = "team is required") UUID team\r
) {}\r
\`\`\`\r
\r
Then, inside your controller, you need to add a \`@Validated\` wrapper to your \`@RestController\` class, and pass the schema class down:\r
\r
\`\`\`java\r
import org.springframework.validation.annotation.Validated;\r
import jakarta.validation.Valid;\r
\r
@RestController\r
@Validated\r
public class Controller {\r
\r
  @PostMapping("/")\r
  public Map<String, Object> Example(@Valid @RequestBody JoinRequest req) {\r
    console.log(req.getName(), team.getID());\r
    // Or whatever you need\r
  }\r
}\r
\`\`\`\r
`;export{r as default};
