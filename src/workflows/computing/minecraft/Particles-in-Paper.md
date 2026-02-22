# Using Particles in Paper Plugins

This can be done quite simply:

```java
import org.bukkit.Particle;

// Spawn particles at a location
player.getWorld().spawnParticle(
    Particle.FLAME,       // particle type
    player.getLocation(), // where
    30,                   // count
    0.5, 0.5, 0.5,        // spread X, Y, Z
    0.0                   // extra (speed/size depending on particle)
);
```

Some particles are special and you will need to pass in more data:

```java
// Colored dust particle
Particle.DustOptions dust = new Particle.DustOptions(
    org.bukkit.Color.fromRGB(255, 0, 0), // RGB color (red here)
    1.5f                                 // size
);

player.getWorld().spawnParticle(
    Particle.DUST,
    player.getLocation(),
    50,
    0.5, 0.5, 0.5,
    0.0,
    dust // pass the data as the last argument
);
```

Just like how sounds have signatures that allow only the specific player to hear the sound, you can do the same thing with particles:

```java
player.spawnParticle(Particle.FLAME, player.getLocation(), 30, 0.5, 0.5, 0.5, 0.0);
```