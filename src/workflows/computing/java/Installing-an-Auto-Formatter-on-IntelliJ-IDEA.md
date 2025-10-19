# Installing an Auto-Formatter on IntelliJ IDEA

- Go to `File → Settings → Plugins` and look for google-java-format. Install it and restart IntelliJ.

- After restarting, enable the google-java-format in the system settings by looking through the menu in settings. If it isn't there, look for something called `Other Settings`.

- To bind the shortcut to a more familiar key, go to `File → Settings → Keymap`. Search for `Reformat Code` and add the key bind.

- This does **NOT** enable it for other projects, so if you would like to do this, go to `File → New Project Setup → Other Settings` and enable google-java-format there as well.

- From here, go to `Help → Edit Custom VM Options...` and paste in the following lines:

```
--add-exports=jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED
--add-exports=jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED
--add-exports=jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED
--add-exports=jdk.compiler/com.sun.tools.javac.parser=ALL-UNNAMED
--add-exports=jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED
--add-exports=jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED
```

- Then, restart the IDE. It should work now!