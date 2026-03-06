# Self-Hosted Minecraft Server Guide

If you are reading this guide, it is assumed that you know the basics of setting up a server.

## Getting Started

### Preparing the Enviornment

It is recommended to make a non-root user when setting up the server. So:

```bash
sudo useradd -m -r -s /bin/bash minecraft
sudo -u minecraft bash
```

In order to keep the server running even after you close the terminal session:

```bash
screen -S minecraft
```

When you do close your terminal, you should be able to go back to it and reattach it to your screen:

```bash
su - minecraft
screen -r minecraft
```

To detach again without stopping the server, press `Ctrl+A` then `D`.

### Setting up the Server

Make a Minecraft server. Use the follow command to get the actual `jar` file:

```bash
wget -O server.jar https://actual-path-here.com/server.jar
```

Then make `start.sh`:

```sh
#!/bin/bash
java -Xmx2G -Xms1G -jar server.jar nogui
```

To have others connect the server, you will need to expose the port. Use:

```bash
ufw allow 25565/tcp
ufw enable
```

You can verify it with:

```bash
ufw status
```

Also note that Minecraft will default to port `25565`, so you do NOT need to set up an SVR record if you are using a custom domain. Just a simple A type record will do just fine.

## Creating a Pipeline for Development

Follow the [original plugin guide](/#/computing/minecraft/Setting-Up-a-Minecraft-Plugin) to get the plugin set up in the IDE. We'll continue from here by setting up the `deploy` command. In your `pom.xml` file, include the following plugins in the `<plugins>` tag:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-deploy-plugin</artifactId>
    <version>3.1.2</version>
    <configuration>
        <skip>true</skip>
    </configuration>
</plugin>
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>exec-maven-plugin</artifactId>
    <version>3.3.0</version>
    <executions>
        <execution>
            <id>deploy-to-server</id>
            <phase>deploy</phase>
            <goals>
                <goal>exec</goal>
            </goals>
            <configuration>
                <executable>scp</executable>
                <arguments>
                    <argument>${project.build.directory}/${project.artifactId}-${project.version}.jar</argument>
                    <argument>minecraft@minecraft.moae.dev:/home/minecraft/Bukkit-Server/plugins/</argument>
                </arguments>
            </configuration>
        </execution>
    </executions>
</plugin>
```

Make sure to replace the actual path in the `<arguments>` tag with the actual path to your directory. If you are not using a DNS, make sure to change `minecraft.moae.dev` into the correct IP as well. **NOTE**: you may get some warnings about Maven not knowing what things are, but if you run it, it will install the required dependencies and remove that warning entirely.

## Setting up SSH

In order to actually deploy it, you will need to allow an SSH connection from your local computer.

### Windows
If you haven't generated a key before, run `ssh-keygen -t rsa -b 4096`. To actually get your key, run `type %USERPROFILE%\.ssh\id_rsa.pub`.

### MacOS/Linux
If you haven't generated a key before, run `ssh-keygen -t rsa -b 4096`. To actually get your key, run `cat ~/.ssh/id_rsa.pub`.

### Adding Your SSH Key to the Server

Navigate into your minecraft account on your server, and then run:

```bash
mkdir -p ~/.ssh
vim ~/.ssh/authorized_keys # or nano, whichever you're comfortable with
```

Paste in the key there and save it. Make sure to provide the correct permissions.

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

## Handling Connections

You will need to expose some roots in order to handle connections to the server and deployment. To get back to your `root` user, simply type the `exit` command. Then, run:

```bash
sudo ufw allow ssh
```