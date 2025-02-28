# Setting up a Minecraft (Spigot) Server Locally

## Setting Up

Begin by [downloading Spigot BuildTools](https://www.spigotmc.org/wiki/buildtools/). It may be worth checking [here](https://getbukkit.org/download/spigot), but this site isn't always updated.

Open BuildTools and follow the prompts to download the correct version of Spigot. It should default to the most recent version and it should save to your Downloads folder. It may take a while if you haven't run it before. Once it compiles, move it to the folder you wish to run the server in.

Rename the file to just involve the template. For example, `spigot-1.21.4.jar` should just be `spigot.jar`.

## Running the Server
### Windows

Paste the following into a text document, saved as `start.bat`. The `#` is to be replaced with your allocated server memory in GB.
```batch
@echo off
java -Xms#G -Xmx#G -XX:+UseG1GC -jar spigot.jar nogui
pause
```
Then, run the file.

## Post-Installation
Once you attempt to run the server, it will not work. You need to close the command prompt that opened up, open `eula.txt` and change the last line to say
```plaintext
eula=true
```
Save the file, and restart the server.

## Joining the Server
Inside of your `server.properties` file, you should see a line that looks like this
```properties
server-port=25565
```
This is the port you and others are supposed to join with. In Minecraft, you should be able to join your server by using the IP `localhost` or `localhost:port` which in our case would be `localhost:25565`.

## Allowing Others to Join
To do this, you will need to port forward your IP through your router.
- **Windows:** Open command prompt and type `ipconfig`. Look for your Default Gateway (mine was under the Wireless LAN adapter WiFi category).

From there, login. Often, it will be `admin` for the username and `password` for the password. It may also be your ISP for the username, or even your WiFi password for the password.

Look for the device that aligns with the IPv4 address you found when you found your Default Gateway address (under the same category).

Go to the Port Forwarding section and create a new service.
- `custom service name`: Minecraft (or whatever you want to call it)
- `service`: other
- `protocol`: TCP-UDP
- `external host`: empty is fine
- `internal host`: your IPv4 address
- `external port`: 25565 (or whatever you set your port to)
- `internal port`: 25565 (or whatever you set your port to)
  
Add it and make sure it is enabled.

To check if your server is up, use [canyouseeme.org](https://canyouseeme.org/). It should automatically have your public IP visible, all you need to do is enter your port (25565 or whatever you set your port too). Additionally, to get your port, you can just search up `what is my ip` into Google and it will show you. Your friends will be able to join by typing it in as `ip:port`. For example, it should follow the same structure as this: `192.168.0.1:25565`.

## Stopping the Server

To stop the server, simply type `stop` into the terminal.

## Recommended Server Settings (For Me)
- Set `command blocks enabled` to true
- OP yourself in the main console using `op <your username>`
