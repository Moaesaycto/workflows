const n=`# Playing Sounds to Players in a Minecraft Plugin\r
\r
This can be done relatively basically at a location:\r
\r
\`\`\`java\r
import org.bukkit.Sound;\r
\r
// Play at the player's location\r
player.playSound(\r
    player.getLocation(),  // where the sound plays from\r
    Sound.ENTITY_PLAYER_LEVELUP,  // the sound\r
    1.0f,  // volume (1.0 = normal, higher = louder)\r
    1.0f   // pitch  (1.0 = normal, <1 = lower, >1 = higher)\r
);\r
\`\`\`\r
\r
Volume goes above 1.0 but the sound won't get louder past a certain point; it just increases the distance other players can hear it from.\r
\r
If you want it so that only the player hears it:\r
\r
\`\`\`java\r
player.playSound(player, Sound.ENTITY_PLAYER_LEVELUP, 1.0f, 1.0f);\r
\`\`\``;export{n as default};
