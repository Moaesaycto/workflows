const r=`# Self-Hosted Minecraft Server Guide\r
\r
If you are reading this guide, it is assumed that you know the basics of setting up a server.\r
\r
## Getting Started\r
\r
### Preparing the Enviornment\r
\r
It is recommended to make a non-root user when setting up the server. So:\r
\r
\`\`\`bash\r
sudo useradd -m -r -s /bin/bash minecraft\r
sudo -u minecraft bash\r
\`\`\`\r
\r
In order to keep the server running even after you close the terminal session:\r
\r
\`\`\`bash\r
screen -S minecraft\r
\`\`\`\r
\r
When you do close your terminal, you should be able to go back to it and reattach it to your screen:\r
\r
\`\`\`bash\r
su - minecraft\r
screen -r minecraft\r
\`\`\`\r
\r
To detach again without stopping the server, press \`Ctrl+A\` then \`D\`.\r
\r
### Setting up the Server\r
\r
Make a Minecraft server. Use the follow command to get the actual \`jar\` file:\r
\r
\`\`\`bash\r
wget -O server.jar https://actual-path-here.com/server.jar\r
\`\`\`\r
\r
Then make \`start.sh\`:\r
\r
\`\`\`sh\r
#!/bin/bash\r
java -Xmx2G -Xms1G -jar server.jar nogui\r
\`\`\`\r
\r
To have others connect the server, you will need to expose the port. Use:\r
\r
\`\`\`bash\r
ufw allow 25565/tcp\r
ufw enable\r
\`\`\`\r
\r
You can verify it with:\r
\r
\`\`\`bash\r
ufw status\r
\`\`\`\r
\r
Also note that Minecraft will default to port \`25565\`, so you do NOT need to set up an SVR record if you are using a custom domain. Just a simple A type record will do just fine.\r
\r
## Creating a Pipeline for Development\r
\r
Follow the [original plugin guide](/#/computing/minecraft/Setting-Up-a-Minecraft-Plugin) to get the plugin set up in the IDE. We'll continue from here by setting up the \`deploy\` command. In your \`pom.xml\` file, include the following plugins in the \`<plugins>\` tag:\r
\r
\`\`\`xml\r
<plugin>\r
    <groupId>org.apache.maven.plugins</groupId>\r
    <artifactId>maven-deploy-plugin</artifactId>\r
    <version>3.1.2</version>\r
    <configuration>\r
        <skip>true</skip>\r
    </configuration>\r
</plugin>\r
<plugin>\r
    <groupId>org.codehaus.mojo</groupId>\r
    <artifactId>exec-maven-plugin</artifactId>\r
    <version>3.3.0</version>\r
    <executions>\r
        <execution>\r
            <id>deploy-to-server</id>\r
            <phase>deploy</phase>\r
            <goals>\r
                <goal>exec</goal>\r
            </goals>\r
            <configuration>\r
                <executable>scp</executable>\r
                <arguments>\r
                    <argument>\${project.build.directory}/\${project.artifactId}-\${project.version}.jar</argument>\r
                    <argument>minecraft@minecraft.moae.dev:/home/minecraft/Bukkit-Server/plugins/</argument>\r
                </arguments>\r
            </configuration>\r
        </execution>\r
    </executions>\r
</plugin>\r
\`\`\`\r
\r
Make sure to replace the actual path in the \`<arguments>\` tag with the actual path to your directory. If you are not using a DNS, make sure to change \`minecraft.moae.dev\` into the correct IP as well. **NOTE**: you may get some warnings about Maven not knowing what things are, but if you run it, it will install the required dependencies and remove that warning entirely.\r
\r
## Setting up SSH\r
\r
In order to actually deploy it, you will need to allow an SSH connection from your local computer.\r
\r
### Windows\r
If you haven't generated a key before, run \`ssh-keygen -t rsa -b 4096\`. To actually get your key, run \`type %USERPROFILE%\\.ssh\\id_rsa.pub\`.\r
\r
### MacOS/Linux\r
If you haven't generated a key before, run \`ssh-keygen -t rsa -b 4096\`. To actually get your key, run \`cat ~/.ssh/id_rsa.pub\`.\r
\r
### Adding Your SSH Key to the Server\r
\r
Navigate into your minecraft account on your server, and then run:\r
\r
\`\`\`bash\r
mkdir -p ~/.ssh\r
vim ~/.ssh/authorized_keys # or nano, whichever you're comfortable with\r
\`\`\`\r
\r
Paste in the key there and save it. Make sure to provide the correct permissions.\r
\r
\`\`\`bash\r
chmod 700 ~/.ssh\r
chmod 600 ~/.ssh/authorized_keys\r
\`\`\`\r
\r
## Handling Connections\r
\r
You will need to expose some roots in order to handle connections to the server and deployment. To get back to your \`root\` user, simply type the \`exit\` command. Then, run:\r
\r
\`\`\`bash\r
sudo ufw allow ssh\r
\`\`\``;export{r as default};
