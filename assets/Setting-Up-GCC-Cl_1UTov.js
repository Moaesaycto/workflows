const n=`# Installing GCC and G++ on Windows\r
\r
This guide will walk you through installing the GCC and G++ compilers on Windows using the MinGW (Minimalist GNU for Windows) distribution.\r
\r
---\r
\r
## 1. Download and Install MinGW\r
\r
1. **Download MinGW**  \r
   - Navigate to [MinGW’s SourceForge page](https://sourceforge.net/projects/mingw/).  \r
   - Download the latest installer (\`mingw-get-setup.exe\`).\r
\r
2. **Run the Installer**  \r
   - Double-click the downloaded installer to run it.\r
   - When prompted to choose components, **select only the GCC and G++ compilers**.\r
   - Follow the on-screen instructions to complete the installation.\r
\r
3. **Apply Changes**  \r
   - After the installation completes, you may see a “Manage tools” window or an installer prompt that allows you to apply changes.\r
   - Select the required packages (GCC and G++), then click **Apply** to finalize the installation.\r
   - Wait until all components are installed.\r
\r
---\r
\r
## 2. Configure Environment Variables\r
\r
You need to tell Windows where to find your newly installed \`gcc\` and \`g++\` executables by adding MinGW to your \`PATH\`.\r
\r
1. **Open the Environment Variables**  \r
   - Press <kbd>Windows Key</kbd> + <kbd>R</kbd> to open the **Run** dialog.  \r
   - Type \`sysdm.cpl\` and press <kbd>Enter</kbd>.  \r
   - In the **System Properties** window, go to the **Advanced** tab and click **Environment Variables...**.\r
\r
2. **Edit the \`PATH\` Variable**  \r
   - Under **System variables**, scroll down to **Path** and select it.  \r
   - Click **Edit...**.  \r
   - Add the following paths (assuming MinGW is installed to \`C:\\MinGW\`):\r
     \`\`\`\r
     C:\\MinGW\\bin\r
     C:\\MinGW\\\r
     \`\`\`\r
   - Click **OK** to save the changes.\r
   - Close all remaining dialogs.\r
\r
3. **Restart Your Terminal**  \r
   - Any open command prompts or terminals will not see the new \`PATH\` immediately.\r
   - Close and reopen your terminal or open a new one (Command Prompt or PowerShell).\r
\r
---\r
\r
## 3. Verify the Installation\r
\r
1. **Create a Test File**  \r
   - Open any text editor and save a file named \`test.c\` with the following content:\r
     \`\`\`c\r
     #include <stdio.h>\r
     \r
     int main() {\r
         printf("Hello from GCC!\\n");\r
         return 0;\r
     }\r
     \`\`\`\r
\r
2. **Compile and Run**  \r
   - In your terminal, navigate to the folder containing \`test.c\`.\r
   - Compile the file using \`gcc\`:\r
     \`\`\`bash\r
     gcc test.c -o test\r
     \`\`\`\r
   - Run the resulting program:\r
     \`\`\`bash\r
     test\r
     \`\`\`\r
   - If everything is set up correctly, you’ll see:\r
     \`\`\`\r
     Hello from GCC!\r
     \`\`\`\r
\r
---\r
\r
## 4. Troubleshooting\r
\r
- **Command Not Found**:  \r
  If you get an error saying \`gcc\` or \`g++\` is not recognized, ensure you correctly added \`C:\\MinGW\\bin\` and \`C:\\MinGW\\\` to your \`PATH\` and restarted your terminal.\r
\r
- **Multiple Compiler Versions**:  \r
  If you have other compilers installed, make sure \`MinGW\`’s paths are at the beginning of your \`PATH\` so that it’s found first.\r
\r
---\r
\r
## 5. Additional Resources\r
\r
- [MinGW Documentation](http://www.mingw.org/wiki/HOWTO_Install_the_MinGW_GCC_Compiler_Suite)\r
- [GCC Online Documentation](https://gcc.gnu.org/onlinedocs/)\r
`;export{n as default};
