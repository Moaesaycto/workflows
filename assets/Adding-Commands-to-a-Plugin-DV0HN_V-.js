const n=`# Adding Commands to a Plugin\r
\r
For this task, we are assuming that you have set up the plugin exactly as specified [here](/#/computing/minecraft/Setting-Up-a-Minecraft-Plugin).\r
\r
## Add the Command To \`plugin.yml\`\r
Inside \`src/main/resources/plugin.yml\`, you will need to specify your command. You should add:\r
\r
\`\`\`yml\r
# Normal stuff above here\r
commands:\r
  ping:\r
    description: Replies with Pong and your latency\r
    usage: /ping\r
\`\`\`\r
\r
## Create Your Command Class\r
In an appropriate package, create your command class. For this tutorial, we are going to make a simple ping command to get latency. By example looks like this:\r
\r
\`\`\`java\r
package com.example.myplugin.commands;\r
\r
import org.bukkit.command.Command;\r
import org.bukkit.command.CommandExecutor;\r
import org.bukkit.command.CommandSender;\r
import org.bukkit.entity.Player;\r
\r
public class PingCommand implements CommandExecutor {\r
    @Override\r
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {\r
        if (sender instanceof Player) {\r
            Player player = (Player) sender;\r
            int ping = player.getPing();\r
            player.sendMessage("Pong! Your latency is " + ping + " ms.");\r
        } else {\r
            sender.sendMessage("This command can only be used by players.");\r
        }\r
        return true;\r
    }\r
}\r
\`\`\`\r
\r
## Registering the Command\r
\r
Finally, in your main class, register the command when enabled:\r
\r
\`\`\`java\r
@Override\r
public void onEnable() {\r
    this.getCommand("ping").setExecutor(new PingCommand());\r
}\r
\`\`\`\r
\r
## Making it Better\r
\r
Our command works very simply right now, but for more advanced usage, you may want to use a schema like this:\r
\r
\`\`\`java\r
package com.example.myplugin.commands;\r
\r
// Import your Plugin\r
import com.example.myplugin.MyPlugin;\r
import org.bukkit.command.Command;\r
import org.bukkit.command.CommandExecutor;\r
import org.bukkit.command.CommandSender;\r
import org.bukkit.entity.Player;\r
\r
public class PingCommand implements CommandExecutor {\r
    private final MyPlugin plugin;\r
\r
    public PingCommand(MyPlugin plugin) {\r
        this.plugin = plugin;\r
    }\r
\r
    @Override\r
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {\r
        // Main logic goes here...\r
    }\r
}\r
\`\`\``;export{n as default};
