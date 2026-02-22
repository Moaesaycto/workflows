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
\`\`\`\r
\r
Make sure that you look it up in the \`onEnable\` method for the plugin class:\r
\r
\`\`\`java\r
@Override\r
public void onEnable() {\r
    getServer().getPluginManager().registerEvents(new JoinListener(this), this);\r
}\r
\`\`\``;export{n as default};
