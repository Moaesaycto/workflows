const n=`# Making a Listener Class For Bukkit/Spigot Plugins\r
\r
\`\`\`java\r
public class JoinListener implements Listener {\r
    private final Plugin plugin;\r
\r
    public JoinListener(Plugin plugin) {\r
        // good to have the plugin\r
        this.plugin = plugin;\r
    }\r
\r
    @EventHandler\r
    public void onPlayerJoin(PlayerJoinEvent e) {\r
        // Do stuff... Look through more events\r
    }\r
}\r
\`\`\``;export{n as default};
