const n=`# Locking a Player's Inventory in Paper\r
\r
You can do this by listening to \`InventoryClickEvent\` and \`InventoryDragEvent\` and cancelling them for the specific player:\r
\r
\`\`\`java\r
import org.bukkit.event.EventHandler;\r
import org.bukkit.event.Listener;\r
import org.bukkit.event.inventory.InventoryClickEvent;\r
import org.bukkit.event.inventory.InventoryDragEvent;\r
import org.bukkit.entity.Player;\r
\r
import java.util.HashSet;\r
import java.util.UUID;\r
\r
public class InventoryLockListener implements Listener {\r
\r
    private final HashSet<UUID> lockedPlayers = new HashSet<>();\r
\r
    public void lockPlayer(Player player) {\r
        lockedPlayers.add(player.getUniqueId());\r
    }\r
\r
    public void unlockPlayer(Player player) {\r
        lockedPlayers.remove(player.getUniqueId());\r
    }\r
\r
    @EventHandler\r
    public void onInventoryClick(InventoryClickEvent event) {\r
        if (!(event.getWhoClicked() instanceof Player player)) return;\r
        if (lockedPlayers.contains(player.getUniqueId())) {\r
            event.setCancelled(true);\r
        }\r
    }\r
\r
    @EventHandler\r
    public void onInventoryDrag(InventoryDragEvent event) {\r
        if (!(event.getWhoClicked() instanceof Player player)) return;\r
        if (lockedPlayers.contains(player.getUniqueId())) {\r
            event.setCancelled(true);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
Then in your main class, hold a reference to it so you can lock/unlock players anywhere:\r
\r
\`\`\`java\r
private InventoryLockListener inventoryLockListener;\r
\r
@Override\r
public void onEnable() {\r
    inventoryLockListener = new InventoryLockListener();\r
    getServer().getPluginManager().registerEvents(inventoryLockListener, this);\r
}\r
\r
public InventoryLockListener getInventoryLockListener() {\r
    return inventoryLockListener;\r
}\r
\`\`\`\r
\r
Then lock/unlock a player like this from anywhere:\r
\`\`\`java\r
plugin.getInventoryLockListener().lockPlayer(player);\r
plugin.getInventoryLockListener().unlockPlayer(player);\r
\`\`\`\r
\r
You should also handle \`PlayerDropItemEvent\` and \`PlayerPickupItemEvent\` if you want to fully prevent item movement outside the inventory too.`;export{n as default};
