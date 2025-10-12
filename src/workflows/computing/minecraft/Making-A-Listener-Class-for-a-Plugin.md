# Making a Listener Class For Bukkit/Spigot Plugins

```java
public class JoinListener implements Listener {
    private final Plugin plugin;

    public JoinListener(Plugin plugin) {
        // good to have the plugin
        this.plugin = plugin;
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        // Do stuff... Look through more events
    }
}
```