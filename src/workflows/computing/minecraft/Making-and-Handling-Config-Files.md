# Making and Handling Config Files in Plugins

For this task, we are assuming that you have set up the plugin exactly as specified [here](/#/computing/minecraft/Setting-Up-a-Minecraft-Plugin).

## Setting Up

In your project, inside `src/main/resources/`, make a file called `config.yml`. This file is our default configuration. For our example, we will make a simple `/ping` command message.

```yml
ping-message: "Pong! Your latency is %ping% ms."
```

## Saving and Updating

Fortunately, Bukkit/Spigot already have built-in methods to support this. All you really need to do is call a command when starting and disabling.

```java
@Override
public void onEnable() {
    // Creates config.yml if it doesn't exist yet
    saveDefaultConfig();

    // If you want to ensure new defaults are merged into old configs:
    getConfig().options().copyDefaults(true);
    saveConfig();
}

@Override
public void onDisable() {
    // Save changes made during runtime
    saveConfig();
}
```

## Setting and Getting

It's rather easy to get, so long as you have the plugin imported (your main class). Assuming that `plugin` is your main class, you can get a property from a config as follows:

```java
String msg = plugin.getConfig().getString("key");
```

Setting is also quite simple, where you run:

```java
getConfig().set("key", "new value");
saveConfig(); // optional, saves immediately
```

## Different Data Types

Use YAML lists/maps in `config.yml`, then read with Bukkit's typed getters (`getStringList`, `getConfigurationSection`, etc.) or ConfigurationSerializable for custom types. For example:

### Simple List

For a simple list:

```yaml
blocked-worlds:
  - world
  - world_nether
```

You can get these values by running:

```java
List<String> worlds = getConfig().getStringList("blocked-worlds");
```

You can set these values by running:

```java
getConfig().set("blocked-worlds", java.util.Arrays.asList("world", "world_the_end"));
```

### Maps

You can map to certain types. Consider the following:

```yaml
rewards:
  kill: 5
  win: 20
```

You can get these values by running:

```java
ConfigurationSection rew = getConfig().getConfigurationSection("rewards");
int kill = rew.getInt("kill", 0);
int win  = rew.getInt("win", 0);
```

You will have to hard-code in the attributes you are retrieving.

You can also set these values by running:

```java
getConfig().set("rewards.kill", 10);
```

### List of Objects

You can make a list of objects as follows:

```yaml
kits:
  - name: Archer
    items:
      - "BOW:1"
      - "ARROW:32"
  - name: Tank
    items:
      - "SHIELD:1"
```

Retrieving them will need to be done manually, like this:

```java
List<Map<?, ?>> kits = getConfig().getMapList("kits");
for (Map<?, ?> m : kits) {
    String name = (String) m.getOrDefault("name", "Unnamed");
    @SuppressWarnings("unchecked")
    List<String> items = (List<String>) m.getOrDefault("items", java.util.Collections.emptyList());
    // use name/items...
}
```

Setting is easier, as all you need to do is give it the list:

```java
getConfig().set("kits", kits); // where kits is a List<Map<String,Object>>
```

### Nested Objects

Finally, we can handle nested objects like this:

```yaml
arena:
  name: Alpha
  spawn:
    world: world
    x: 10.5
    y: 64
    z: -3.2
    yaw: 90
    pitch: 0
```

Retrieving them will again be manual:

```java
ConfigurationSection sp = getConfig().getConfigurationSection("arena.spawn");
org.bukkit.World w = getServer().getWorld(sp.getString("world"));
org.bukkit.Location loc = new org.bukkit.Location(
    w,
    sp.getDouble("x"), sp.getDouble("y"), sp.getDouble("z"),
    (float) sp.getDouble("yaw"), (float) sp.getDouble("pitch")
);
```

To set these, you will need a class to handle these in a more robust way (see below).	

## Custom Objects

If you're dealing with complicated objects, you will need to make these into its own class (cleanest way). For example:

```java
public class Kit implements org.bukkit.configuration.serialization.ConfigurationSerializable {
    public final String name;
    public final List<String> items;

    public Kit(String n, List<String> it){
        this.name=n; this.items=it;
    }

    public Map<String,Object> serialize(){
        return Map.of("name", name, "items", items);
    }

    public static Kit deserialize(Map<String,Object> m){
        return new Kit((String)m.get("name"), (List<String>)m.get("items"));
    }
}
```

When you are ready to register your new object, in the `onEnable` method of you plugin, add this:

```java
org.bukkit.configuration.serialization.ConfigurationSerialization.registerClass(Kit.class);
```

