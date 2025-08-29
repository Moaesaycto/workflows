const n=`# Making and Handling Config Files in Plugins\r
\r
For this task, we are assuming that you have set up the plugin exactly as specified [here](/#/computing/minecraft/Setting-Up-a-Minecraft-Plugin).\r
\r
## Setting Up\r
\r
In your project, inside \`src/main/resources/\`, make a file called \`config.yml\`. This file is our default configuration. For our example, we will make a simple \`/ping\` command message.\r
\r
\`\`\`yml\r
ping-message: "Pong! Your latency is %ping% ms."\r
\`\`\`\r
\r
## Saving and Updating\r
\r
Fortunately, Bukkit/Spigot already have built-in methods to support this. All you really need to do is call a command when starting and disabling.\r
\r
\`\`\`java\r
@Override\r
public void onEnable() {\r
    // Creates config.yml if it doesn't exist yet\r
    saveDefaultConfig();\r
\r
    // If you want to ensure new defaults are merged into old configs:\r
    getConfig().options().copyDefaults(true);\r
    saveConfig();\r
}\r
\r
@Override\r
public void onDisable() {\r
    // Save changes made during runtime\r
    saveConfig();\r
}\r
\`\`\`\r
\r
## Setting and Getting\r
\r
It's rather easy to get, so long as you have the plugin imported (your main class). Assuming that \`plugin\` is your main class, you can get a property from a config as follows:\r
\r
\`\`\`java\r
String msg = plugin.getConfig().getString("key");\r
\`\`\`\r
\r
Setting is also quite simple, where you run:\r
\r
\`\`\`java\r
getConfig().set("key", "new value");\r
saveConfig(); // optional, saves immediately\r
\`\`\`\r
\r
## Different Data Types\r
\r
Use YAML lists/maps in \`config.yml\`, then read with Bukkit's typed getters (\`getStringList\`, \`getConfigurationSection\`, etc.) or ConfigurationSerializable for custom types. For example:\r
\r
### Simple List\r
\r
For a simple list:\r
\r
\`\`\`yaml\r
blocked-worlds:\r
  - world\r
  - world_nether\r
\`\`\`\r
\r
You can get these values by running:\r
\r
\`\`\`java\r
List<String> worlds = getConfig().getStringList("blocked-worlds");\r
\`\`\`\r
\r
You can set these values by running:\r
\r
\`\`\`java\r
getConfig().set("blocked-worlds", java.util.Arrays.asList("world", "world_the_end"));\r
\`\`\`\r
\r
### Maps\r
\r
You can map to certain types. Consider the following:\r
\r
\`\`\`yaml\r
rewards:\r
  kill: 5\r
  win: 20\r
\`\`\`\r
\r
You can get these values by running:\r
\r
\`\`\`java\r
ConfigurationSection rew = getConfig().getConfigurationSection("rewards");\r
int kill = rew.getInt("kill", 0);\r
int win  = rew.getInt("win", 0);\r
\`\`\`\r
\r
You will have to hard-code in the attributes you are retrieving.\r
\r
You can also set these values by running:\r
\r
\`\`\`java\r
getConfig().set("rewards.kill", 10);\r
\`\`\`\r
\r
### List of Objects\r
\r
You can make a list of objects as follows:\r
\r
\`\`\`yaml\r
kits:\r
  - name: Archer\r
    items:\r
      - "BOW:1"\r
      - "ARROW:32"\r
  - name: Tank\r
    items:\r
      - "SHIELD:1"\r
\`\`\`\r
\r
Retrieving them will need to be done manually, like this:\r
\r
\`\`\`java\r
List<Map<?, ?>> kits = getConfig().getMapList("kits");\r
for (Map<?, ?> m : kits) {\r
    String name = (String) m.getOrDefault("name", "Unnamed");\r
    @SuppressWarnings("unchecked")\r
    List<String> items = (List<String>) m.getOrDefault("items", java.util.Collections.emptyList());\r
    // use name/items...\r
}\r
\`\`\`\r
\r
Setting is easier, as all you need to do is give it the list:\r
\r
\`\`\`java\r
getConfig().set("kits", kits); // where kits is a List<Map<String,Object>>\r
\`\`\`\r
\r
### Nested Objects\r
\r
Finally, we can handle nested objects like this:\r
\r
\`\`\`yaml\r
arena:\r
  name: Alpha\r
  spawn:\r
    world: world\r
    x: 10.5\r
    y: 64\r
    z: -3.2\r
    yaw: 90\r
    pitch: 0\r
\`\`\`\r
\r
Retrieving them will again be manual:\r
\r
\`\`\`java\r
ConfigurationSection sp = getConfig().getConfigurationSection("arena.spawn");\r
org.bukkit.World w = getServer().getWorld(sp.getString("world"));\r
org.bukkit.Location loc = new org.bukkit.Location(\r
    w,\r
    sp.getDouble("x"), sp.getDouble("y"), sp.getDouble("z"),\r
    (float) sp.getDouble("yaw"), (float) sp.getDouble("pitch")\r
);\r
\`\`\`\r
\r
To set these, you will need a class to handle these in a more robust way (see below).	\r
\r
## Custom Objects\r
\r
If you're dealing with complicated objects, you will need to make these into its own class (cleanest way). For example:\r
\r
\`\`\`java\r
public class Kit implements org.bukkit.configuration.serialization.ConfigurationSerializable {\r
    public final String name;\r
    public final List<String> items;\r
\r
    public Kit(String n, List<String> it){\r
        this.name=n; this.items=it;\r
    }\r
\r
    public Map<String,Object> serialize(){\r
        return Map.of("name", name, "items", items);\r
    }\r
\r
    public static Kit deserialize(Map<String,Object> m){\r
        return new Kit((String)m.get("name"), (List<String>)m.get("items"));\r
    }\r
}\r
\`\`\`\r
\r
When you are ready to register your new object, in the \`onEnable\` method of you plugin, add this:\r
\r
\`\`\`java\r
org.bukkit.configuration.serialization.ConfigurationSerialization.registerClass(Kit.class);\r
\`\`\`\r
\r
`;export{n as default};
