# Playing Sounds to Players in a Minecraft Plugin

This can be done relatively basically at a location:

```java
import org.bukkit.Sound;

// Play at the player's location
player.playSound(
    player.getLocation(),  // where the sound plays from
    Sound.ENTITY_PLAYER_LEVELUP,  // the sound
    1.0f,  // volume (1.0 = normal, higher = louder)
    1.0f   // pitch  (1.0 = normal, <1 = lower, >1 = higher)
);
```

Volume goes above 1.0 but the sound won't get louder past a certain point; it just increases the distance other players can hear it from.

If you want it so that only the player hears it:

```java
player.playSound(player, Sound.ENTITY_PLAYER_LEVELUP, 1.0f, 1.0f);
```