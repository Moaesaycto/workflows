const r=`# Using Particles in Paper Plugins\r
\r
This can be done quite simply:\r
\r
\`\`\`java\r
import org.bukkit.Particle;\r
\r
// Spawn particles at a location\r
player.getWorld().spawnParticle(\r
    Particle.FLAME,       // particle type\r
    player.getLocation(), // where\r
    30,                   // count\r
    0.5, 0.5, 0.5,        // spread X, Y, Z\r
    0.0                   // extra (speed/size depending on particle)\r
);\r
\`\`\`\r
\r
Some particles are special and you will need to pass in more data:\r
\r
\`\`\`java\r
// Colored dust particle\r
Particle.DustOptions dust = new Particle.DustOptions(\r
    org.bukkit.Color.fromRGB(255, 0, 0), // RGB color (red here)\r
    1.5f                                 // size\r
);\r
\r
player.getWorld().spawnParticle(\r
    Particle.DUST,\r
    player.getLocation(),\r
    50,\r
    0.5, 0.5, 0.5,\r
    0.0,\r
    dust // pass the data as the last argument\r
);\r
\`\`\`\r
\r
Just like how sounds have signatures that allow only the specific player to hear the sound, you can do the same thing with particles:\r
\r
\`\`\`java\r
player.spawnParticle(Particle.FLAME, player.getLocation(), 30, 0.5, 0.5, 0.5, 0.0);\r
\`\`\``;export{r as default};
