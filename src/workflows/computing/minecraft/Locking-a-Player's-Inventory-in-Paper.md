# Locking a Player's Inventory in Paper

You can do this by listening to `InventoryClickEvent` and `InventoryDragEvent` and cancelling them for the specific player:

```java
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryDragEvent;
import org.bukkit.entity.Player;

import java.util.HashSet;
import java.util.UUID;

public class InventoryLockListener implements Listener {

    private final HashSet<UUID> lockedPlayers = new HashSet<>();

    public void lockPlayer(Player player) {
        lockedPlayers.add(player.getUniqueId());
    }

    public void unlockPlayer(Player player) {
        lockedPlayers.remove(player.getUniqueId());
    }

    @EventHandler
    public void onInventoryClick(InventoryClickEvent event) {
        if (!(event.getWhoClicked() instanceof Player player)) return;
        if (lockedPlayers.contains(player.getUniqueId())) {
            event.setCancelled(true);
        }
    }

    @EventHandler
    public void onInventoryDrag(InventoryDragEvent event) {
        if (!(event.getWhoClicked() instanceof Player player)) return;
        if (lockedPlayers.contains(player.getUniqueId())) {
            event.setCancelled(true);
        }
    }
}
```

Then in your main class, hold a reference to it so you can lock/unlock players anywhere:

```java
private InventoryLockListener inventoryLockListener;

@Override
public void onEnable() {
    inventoryLockListener = new InventoryLockListener();
    getServer().getPluginManager().registerEvents(inventoryLockListener, this);
}

public InventoryLockListener getInventoryLockListener() {
    return inventoryLockListener;
}
```

Then lock/unlock a player like this from anywhere:
```java
plugin.getInventoryLockListener().lockPlayer(player);
plugin.getInventoryLockListener().unlockPlayer(player);
```

You should also handle `PlayerDropItemEvent` and `PlayerPickupItemEvent` if you want to fully prevent item movement outside the inventory too.