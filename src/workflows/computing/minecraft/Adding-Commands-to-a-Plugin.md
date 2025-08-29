# Adding Commands to a Plugin

For this task, we are assuming that you have set up the plugin exactly as specified [here](/#/computing/minecraft/Setting-Up-a-Minecraft-Plugin).

## Add the Command To `plugin.yml`
Inside `src/main/resources/plugin.yml`, you will need to specify your command. You should add:

```yml
# Normal stuff above here
commands:
  ping:
    description: Replies with Pong and your latency
    usage: /ping
```

## Create Your Command Class
In an appropriate package, create your command class. For this tutorial, we are going to make a simple ping command to get latency. By example looks like this:

```java
package com.example.myplugin.commands;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class PingCommand implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (sender instanceof Player) {
            Player player = (Player) sender;
            int ping = player.getPing();
            player.sendMessage("Pong! Your latency is " + ping + " ms.");
        } else {
            sender.sendMessage("This command can only be used by players.");
        }
        return true;
    }
}
```

## Registering the Command

Finally, in your main class, register the command when enabled:

```java
@Override
public void onEnable() {
    this.getCommand("ping").setExecutor(new PingCommand());
}
```

## Making it Better

Our command works very simply right now, but for more advanced usage, you may want to use a schema like this:

```java
package com.example.myplugin.commands;

// Import your Plugin
import com.example.myplugin.MyPlugin;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class PingCommand implements CommandExecutor {
    private final MyPlugin plugin;

    public PingCommand(MyPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        // Main logic goes here...
    }
}
```