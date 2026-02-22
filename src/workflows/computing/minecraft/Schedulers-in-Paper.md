# Using Schedulers in Paper

Schedulers are very simple in Paper:

```java
Bukkit.getScheduler().runTaskLater(plugin, () -> {
    // runs after 20 ticks (1 second)
}, 20L);

Bukkit.getScheduler().runTaskTimer(plugin, () -> {
    // runs every 20 ticks forever
}, 0L, 20L);
```