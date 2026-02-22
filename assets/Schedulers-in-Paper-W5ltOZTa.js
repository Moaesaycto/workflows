const r=`# Using Schedulers in Paper\r
\r
Schedulers are very simple in Paper:\r
\r
\`\`\`java\r
Bukkit.getScheduler().runTaskLater(plugin, () -> {\r
    // runs after 20 ticks (1 second)\r
}, 20L);\r
\r
Bukkit.getScheduler().runTaskTimer(plugin, () -> {\r
    // runs every 20 ticks forever\r
}, 0L, 20L);\r
\`\`\``;export{r as default};
