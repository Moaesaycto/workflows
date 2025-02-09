# Installing GCC and G++ on Windows

This guide will walk you through installing the GCC and G++ compilers on Windows using the MinGW (Minimalist GNU for Windows) distribution.

---

## 1. Download and Install MinGW

1. **Download MinGW**  
   - Navigate to [MinGW’s SourceForge page](https://sourceforge.net/projects/mingw/).  
   - Download the latest installer (`mingw-get-setup.exe`).

2. **Run the Installer**  
   - Double-click the downloaded installer to run it.
   - When prompted to choose components, **select only the GCC and G++ compilers**.
   - Follow the on-screen instructions to complete the installation.

3. **Apply Changes**  
   - After the installation completes, you may see a “Manage tools” window or an installer prompt that allows you to apply changes.
   - Select the required packages (GCC and G++), then click **Apply** to finalize the installation.
   - Wait until all components are installed.

---

## 2. Configure Environment Variables

You need to tell Windows where to find your newly installed `gcc` and `g++` executables by adding MinGW to your `PATH`.

1. **Open the Environment Variables**  
   - Press <kbd>Windows Key</kbd> + <kbd>R</kbd> to open the **Run** dialog.  
   - Type `sysdm.cpl` and press <kbd>Enter</kbd>.  
   - In the **System Properties** window, go to the **Advanced** tab and click **Environment Variables...**.

2. **Edit the `PATH` Variable**  
   - Under **System variables**, scroll down to **Path** and select it.  
   - Click **Edit...**.  
   - Add the following paths (assuming MinGW is installed to `C:\MinGW`):
     ```
     C:\MinGW\bin
     C:\MinGW\
     ```
   - Click **OK** to save the changes.
   - Close all remaining dialogs.

3. **Restart Your Terminal**  
   - Any open command prompts or terminals will not see the new `PATH` immediately.
   - Close and reopen your terminal or open a new one (Command Prompt or PowerShell).

---

## 3. Verify the Installation

1. **Create a Test File**  
   - Open any text editor and save a file named `test.c` with the following content:
     ```c
     #include <stdio.h>
     
     int main() {
         printf("Hello from GCC!\n");
         return 0;
     }
     ```

2. **Compile and Run**  
   - In your terminal, navigate to the folder containing `test.c`.
   - Compile the file using `gcc`:
     ```bash
     gcc test.c -o test
     ```
   - Run the resulting program:
     ```bash
     test
     ```
   - If everything is set up correctly, you’ll see:
     ```
     Hello from GCC!
     ```

---

## 4. Troubleshooting

- **Command Not Found**:  
  If you get an error saying `gcc` or `g++` is not recognized, ensure you correctly added `C:\MinGW\bin` and `C:\MinGW\` to your `PATH` and restarted your terminal.

- **Multiple Compiler Versions**:  
  If you have other compilers installed, make sure `MinGW`’s paths are at the beginning of your `PATH` so that it’s found first.

---

## 5. Additional Resources

- [MinGW Documentation](http://www.mingw.org/wiki/HOWTO_Install_the_MinGW_GCC_Compiler_Suite)
- [GCC Online Documentation](https://gcc.gnu.org/onlinedocs/)
