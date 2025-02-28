# Creating a Minecraft Plugin

This guide was created using Windows 11 (although it worked with Windows 10 previously). It is following the direct instructions from [this video](https://www.youtube.com/watch?v=YOBt2SABHlM), with a useful deployment update from [this updated video](https://www.youtube.com/watch?v=XslTgP6Fgz4&t=0s). Sorry if this isn't useful to your setup. I am willing to add more to make it more accessible.

## 1. Installation and Setup of Project

- Begin by [downloading IntelliJ IDEA Community Edition](https://www.jetbrains.com/help/idea/installation-guide.html). It needs to be community edition otherwise it will cost money.
- Once you have the welcome page open, go to the Plugins section, go to Marketplace and search `minecraft`. The plugin is called Minecraft Development. Restart the IDE. If you've already done this step, the plugin should be in the Installed area.
- Go to projects and create a New Project.
- In the generators, create a Minecraft project and set it up as follows:
  - `name`: The name of the project
  - `location`: Where you want the project to be located
  - `groups`: Select plugin
  - `templates`: Select what you normally host your server with. We will use Spigot
  - `build system`: We will use Maven for this.
  - `language`: Keep Java selected.
  - `minecraft version`: select your desired version.
  - `plugin name`: should automatically be filled.
  - `main class`: should automatically be filled.

Your group ID and Artiface ID should be set to something. For simplity, use the same name as you used above.

## 2. Set up a Server

Using your desired host template (Spigot, Paper, etc.), set up a server for you to test things on. You can do so by following [this tutorial](/workflows/#/computing/minecraft/Setting-Up-a-Minecraft-Server).

## 3. Preparing the Building Process

Modify your `start.bat` or `start.sh` command in your server's root directory.

Now:
- In IntelliJ, look for the Gear near the top-right of the window. Click it, then go to `Project Structure`.
- Go to `Artifacts` and click the `+` sign.
- Hover over `JAR` and select `From modules with dependencies...`.
- Click `OK`.
- Click `Apply` on the `Project Structure` window, and then `OK`.

Open up to the Project Structure page again, like we did above, and go the `Artifacts` section once again.
- Press the `+` icon in the `Output Layout` and select `File`.
- Inside of our project file (which should automatically be selected), go into `src/main/resources`, and click the `plugin.yml` file.
- Press `OK`.
- Click `Apply` on the `Project Structure` window, and then `OK`.

From here, we should be able to, in the main IntelliJ window, go to `Build` (in the main toolbar) and select `Build Artifacts...` and simply press the `Build` option (or just hit the enter key). You should see a new `out` folder.

## 4. Verifying the Plugin

Inside of the main `java` file, with the `onEnable` method, enter the following into that function:

```java
Bukkit.getLogger().info("Hello, World!");
```

You can also add one that prints `Shutting down` in the `onDisable` method to verify it is shutting down correctly.

Note that you may need to import `org.bukkit.Bukkit`.

## 5. Deploying your Spigot Plugin with Maven

Inside your project's root folder, you should see a file called `pom.xml`. Open that, and scroll down until you see the `build` tag. It should look like this:

```xml
<build>
    <!-- Stuff here -->
    <plugin>
        <!-- More stuff here -->
        <executions>
            <execution>
                <phase>package</phase>
                <goals>
                    <goal>shade</goal>
                </goals>
            </execution>
        </executions>
        <!-- More stuff here -->
    </plugin>
    <!-- More stuff here -->
</build>
```

Underneath the `</goals>` closing tag (still inside the `<execution>` tag), you want to append the following:

```xml
<configuration>
    <createDependencyReducedPom>false</createDependencyReducedPom>
    <outputFile>
        <!-- path/goes/here -->
    </outputFile>
</configuration>
```

This output file is where the built plugin will end up. Go to your server, find the `plugins` folder, and copy the (absolute) path to it. Append the name of the plugin to the end of the pathname. Make sure you use the correct `\` or `/` choice.
- **Windows**: that may look like this: `C:\Users\path\to\server\plugins\MyPlugin.jar`.

Once this has been set up, go to the Maven tab on the right of the main IntelliJ window. Under your plugin's `Lifecycle`, and look for `install`. Right click on it and select `Asign Shortcut...`.

This prompt will show many options, but the one we are interested should be already selected under `Maven` and `install <project name>` and assign any key you want. Personally, I do not assign it a key. I opt for going to the Maven tab and just double-clicking on `install`.

Installing it will automatically put it into the `plugins` folder if it is successful.

## 6. Further Deployment Optimization

Inside of your `start.bat` or `start.sh` file, you can add the following `GOTO` to automatically restart your server whenever it's stopped.

### Windows
```batch
@echo off
:start
:: Your start server command (usually something like `java -jar spigot.jar nogui`)
GOTO start
```

## 7. Final Thoughts

We added a simple logger output before, and when running the server, towards the very end of the output as the server starts up, you should see that message. It will look like this:
```exe
[00:00:00] [Server thread/INFO]: [MyPlugin] Enabling MyPlugin v1.0-SNAPSHOT
[00:00:00] [Server thread/INFO]: Hello, World!
```

When typing in `stop` to stop the server, it should print out the following:

```exe
[00:00:00] [Server thread/INFO]: [MyPlugin] Disabling MyPlugin v1.0-SNAPSHOT
[00:00:00] [Server thread/INFO]: Shutting down
```

To shut down the server, because exiting out of it will restart it, simply close the command prompt.

It is also very important that you do not use the `reload` command. The `reload` command in Spigot forcefully restarts the plugin system without properly shutting down and reinitialising plugins, causing memory leaks, duplicate instances, and broken dependencies.