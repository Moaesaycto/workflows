const e=`# Setting Up and Creating a Fabric Server Mod\r
\r
## 1. Install Gradle\r
- Download the binary-only part of the version you want from [here](https://gradle.org/releases/)\r
- Extract it. \r
- Make a folder called \`C:\\Tools\\Gradle\` and drag the output folder (should look like \`gradle-8.12\` with the correct version number on the back. We will use \`8.12\`).\r
- Copy the path to the bin directory. Should look like \`C:\\Tools\\Gradle\\gradle-8.12\\bin\`.\r
- In the start menu, look up "Edit the system environment variables".\r
- Go to Environment Variables.\r
- Look for \`Path\` (in the variables for you as a private user. It should be the top ones) click it to select it, and click \`Edit...\`\r
- Click new and paste the path to the \`bin\` file from before.\r
- Test Gradle by typing \`gradle -v\` in a command prompt.\r
\r
\r
## 2. Create a New Fabric Project\r
- Begin by [downloading IntelliJ IDEA Community Edition](https://www.jetbrains.com/help/idea/installation-guide.html). It needs to be community edition otherwise it will cost money.\r
- Once you have the welcome page open, go to the Plugins section, go to Marketplace and search \`minecraft\`. The plugin is called Minecraft Development. Restart the IDE. If you've already done this step, the plugin should be in the Installed area.\r
- Go to projects and create a New Project.\r
- Create a new project in IntelliJ, selecting:\r
  - \`groups\`: Mod\r
  - \`tempaltes\`: Fabric\r
  - Set the rest to whatever you need.\r
 \r
Note that running Gradle may not work off the bat because you don't have a wrapper. Be sure to open a terminal (bottom left of the IntelliJ window) and type\r
\`\`\`shell\r
gradle wrapper --gradle-version 8.12\r
\`\`\`\r
\r
## 3. Preparing the Workspace\r
Once the project has been set up and the wrapper has been set up, click the Gradle icon (far right tab of the window, looks like an elephant). Inside \`Tasks->build\`, double-click \`build\` and see if it builds successfully.\r
\r
## 4. Setting Up a Fabric Server\r
Set up a server, the same way you would as a [Spigot](/workflows/#/computing/minecraft/Setting-Up-a-Minecraft-Server). For a Fabric server, [download the Fabric Installer](https://fabricmc.net/use/installer/) and open it. Go to the server section and install the server as prompted. Be sure to download the server jar as well. Once it is finished, the process to set up and run the server is [the same as it is for Spigot](/workflows/#/computing/minecraft/Setting-Up-a-Minecraft-Server).\r
\r
When running the server (Windows), it's best to set the \`start.bat\` file to repeat when the server is stopped. This will streamline the development process. It will look something like this:\r
\r
\`\`\`batch\r
@echo off\r
:start\r
java -Xmx4G -jar fabric-server-launch.jar nogui\r
GOTO start\r
pause\r
\`\`\`\r
\r
**IMPORTANT**: add the [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api) to the mods folder. If you do not do this, the server will not recognise the mods and it will say that there are incompatible mods.\r
\r
## 4. Automatically Deploying the Mod\r
To automatically deploy your mod to the mods folder when it is built, look for \`build.gradle\` in your project's root directory, open it, and add the following task to the bottom:\r
\r
\`\`\`java\r
// Custom task to copy the built mod JAR to the server's mods folder\r
tasks.register('copyJarToServer', Copy) {\r
    from layout.buildDirectory.dir("libs")\r
    include "*.jar"\r
    into "C:\\\\Users\\\\Stephen\\\\Desktop\\\\Fabric Server\\\\mods"\r
}\r
\`\`\`\r
\r
Note that for windows, you may need something like this for the path: \`C:\\\\path\\\\to\\\\your\\\\server\\\\mods\`\r
\r
Furthermore, inside of \`processResources\` in \`build.gradle\`, you will see \`project.version\`. Change them to \`project.mod_version\`.\r
\r
Running build now will automatically deploy the mod to the mod folder, so when the server restarts, it will be available.\r
\r
## 5. Running the Mod and Final Thoughts\r
\r
Note that you may find some problems with the version number being \`"\${version}"\`. If you want to disable that manually, go into src/main/resources/fabric.mod.json and change the \`"version"\` to \`"1.0.0"\` or your desired version number. I have no been bothered to find a more robust fix for this, but it doesn't matter too much.\r
\r
It's often good to test that the mod is loading with loggers. Inside of the main file in \`src/main/java/MyProject.myproject/Myproject.java\`, import the following:\r
\r
\`\`\`java\r
import org.slf4j.Logger;\r
import org.slf4j.LoggerFactory;\r
\`\`\`\r
\r
This will allow us to print to the console. Then, we create a logger instance inside of our mod class and print from there. This can be done with the following code:\r
\r
\`\`\`java\r
public class Myproject implements ModInitializer {\r
    public static final Logger LOGGER = LoggerFactory.getLogger("myfabricmod");\r
\r
    @Override\r
    public void onInitialize() {\r
        LOGGER.info("Hello, world!");\r
    }\r
}\r
\`\`\`\r
\r
When you build the mod and run your server, you should see this output somewhere in the initialization:\r
\r
\`\`\`plaintext\r
[00:00:00] [main/INFO]: Hello, world!\r
\`\`\`\r
\r
It may be a little buried.\r
`;export{e as default};
