# Creating and Showing Titles in a Minecraft Plugin

There is a legacy version which works just fine:

```java
player.sendTitle(
    ChatColor.GOLD + "Welcome!",
    ChatColor.GRAY + "Glad you're here",
    10, 70, 20
);
```

Or you could use the Adventure API (which is recommended for Paper):

```java
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.NamedTextColor;
import net.kyori.adventure.title.Title;
import java.time.Duration;

Title title = Title.title(
    Component.text("Welcome!").color(NamedTextColor.GOLD),
    Component.text("Glad you're here").color(NamedTextColor.GRAY),
    Title.Times.times(
        Duration.ofMillis(500), // fade in
        Duration.ofSeconds(3), // stay
        Duration.ofMillis(500) // fade out
    )
);

player.showTitle(title);
```

You could also send action bar titles like this:

```java
player.sendActionBar(Component.text("Hello!"));
```