const r=`# Creating and Showing Titles in a Minecraft Plugin\r
\r
There is a legacy version which works just fine:\r
\r
\`\`\`java\r
player.sendTitle(\r
    ChatColor.GOLD + "Welcome!",\r
    ChatColor.GRAY + "Glad you're here",\r
    10, 70, 20\r
);\r
\`\`\`\r
\r
Or you could use the Adventure API (which is recommended for Paper):\r
\r
\`\`\`java\r
import net.kyori.adventure.text.Component;\r
import net.kyori.adventure.text.format.NamedTextColor;\r
import net.kyori.adventure.title.Title;\r
import java.time.Duration;\r
\r
Title title = Title.title(\r
    Component.text("Welcome!").color(NamedTextColor.GOLD),\r
    Component.text("Glad you're here").color(NamedTextColor.GRAY),\r
    Title.Times.times(\r
        Duration.ofMillis(500), // fade in\r
        Duration.ofSeconds(3), // stay\r
        Duration.ofMillis(500) // fade out\r
    )\r
);\r
\r
player.showTitle(title);\r
\`\`\`\r
\r
You could also send action bar titles like this:\r
\r
\`\`\`java\r
player.sendActionBar(Component.text("Hello!"));\r
\`\`\``;export{r as default};
