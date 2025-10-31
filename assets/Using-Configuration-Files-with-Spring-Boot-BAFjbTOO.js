const n=`# Using Configuration Files with Spring Boot\r
\r
Set up a standard YAML file, such as this one:\r
\r
\`\`\`yml\r
game:\r
  maxPlayers: -1\r
  minPlayers: 2\r
  minPlayersPerTeam: 1\r
  maxTeams: 2\r
teams:\r
  - name: Yellow\r
    color: "#e1ff00"\r
  - name: Orange\r
    color: "#ff8300"\r
  - name: Pink\r
    color: "#ff00ee"\r
\`\`\`\r
\r
Save this file as \`config.yml\` in \`resources\` (or whatever you want to clal it). Inside your \`application.yml\` file, make sure to tell it about your new file by appending this:\r
\r
\`\`\`yml\r
# ... Normal stuff\r
spring:\r
  config:\r
    import: classpath:config.yml\r
\`\`\`\r
\r
Then, set up an option that directly works with these values. \r
\r
\`\`\`java\r
import org.springframework.boot.context.properties.ConfigurationProperties;\r
import org.springframework.context.annotation.Configuration;\r
\r
@Configuration\r
@ConfigurationProperties\r
public class AppConfig {\r
  private GameConfig game;\r
  private List<TeamConfig> teams;\r
\r
  // Getters and setters for these fields\r
\r
  public static class GameConfig {\r
    private int minPlayers;\r
    private int maxPlayers;\r
    // Keep going...\r
\r
    public int getMinPlayers() { return minPlayers; }\r
    public void setMinPlayers(int minPlayers) { this.minPlayers = minPlayers; }\r
    // Add the rest of the getters and setters\r
  }\r
\r
  public static class TeamConfig {\r
    private String name;\r
    // Keep going...\r
\r
    public String getName() { return name; }\r
    public void setName(String name) { this.name = name; }\r
    // Add the rest of the getters and setters\r
  }\r
}\r
\`\`\`\r
\r
Spring Boot will automatically set up the appropriately based on the structure. So like:\r
\r
\`\`\`plaintext\r
game.maxPlayers = -1\r
game.minPlayers = 2\r
game.minPlayersPerTeam = 1\r
game.maxTeams = 2\r
teams[0].name = Yellow\r
teams[0].color = #e1ff00\r
teams[1].name = Orange\r
teams[1].color = #ff8300\r
teams[2].name = Pink\r
teams[2].color = #ff00ee\r
\`\`\`\r
\r
Then, using it is as simple as importing the actual class and using it:\r
\r
\`\`\`java\r
@SpringBootApplication\r
@RestController\r
public class Controller {\r
  private final AppConfig config;\r
\r
  public Controller(AppConfig config) {\r
    this.config = config;\r
  }\r
}\r
\`\`\`\r
\r
Then you should be able to handle the configurations as objects accessible from any part of the application.`;export{n as default};
