const n=`# Converting Your Python Project to an Executable File\r
\r
PyInstaller bundles a Python application and all its dependencies into a single package, such as a standalone executable file, for Windows, macOS, or Linux. Begin by installing \`pyinstaller\` with:\r
\r
\`\`\`\r
pip install pyinstaller\r
\`\`\`\r
\r
In the root of your directory, you can run this to turn it into an executable. The basic usage as follows:\r
\`\`\`bash\r
pyinstaller [OPTIONS] script.py\r
\`\`\`\r
\r
## Common Options\r
\r
### Output Format\r
- \`--onefile\` : Package into a single executable.\r
- \`--onedir\` : Package into a directory (default).\r
\r
### Build Cleanliness\r
- \`--clean\` : Remove temporary files from previous builds.\r
- \`--noconfirm\` : Overwrite output directory without asking.\r
\r
### Console/UI\r
- \`--console\` : Show a console window (default).\r
- \`--windowed\` : Hide console window (for GUI apps).\r
\r
### Icons & Version Info\r
- \`--icon=ICON_FILE\` : Set the app icon (\`.ico\` on Windows, \`.icns\` on macOS).\r
- \`--version-file=FILE\` : Attach version metadata from a file (Windows only).\r
\r
### Data & Resources\r
- \`--add-data "SRC;DEST"\` : Include extra files (use \`:\` on Unix, \`;\` on Windows).\r
- \`--add-binary "SRC;DEST"\` : Include binary files like DLLs.\r
- \`--collect-data=MODULE\` : Automatically include data for a module.\r
- \`--collect-all=MODULE\` : Include all data and submodules of a module.\r
\r
### Hidden Imports\r
- \`--hidden-import=MODULE\` : Include a module not found automatically.\r
\r
### Debugging & Logging\r
- \`--debug=all\` : Enable verbose debug output.\r
- \`--log-level=LEVEL\` : Set logging level (e.g., \`INFO\`, \`DEBUG\`).\r
\r
### Output Control\r
- \`--name NAME\` : Name the output file.\r
- \`--distpath DIR\` : Set output directory for final build.\r
- \`--workpath DIR\` : Set path for temporary build files.\r
- \`--specpath DIR\` : Set path to store the generated \`.spec\` file.\r
\r
### Runtime\r
- \`--runtime-tmpdir DIR\` : Set where the executable unpacks at runtime.\r
- \`--noupx\` : Disable UPX compression.\r
\r
## Tips\r
- Use \`--windowed\` for GUI apps to avoid opening a terminal window.\r
- Use \`--noconfirm\` and \`--clean\` for CI/CD automation.\r
- Use platform-specific separators for \`--add-data\` (colon \`:\` for Unix, semicolon \`;\` for Windows).\r
\r
\r
## Example Command\r
\`\`\`bash\r
pyinstaller --onefile --clean --windowed --icon=app.icns \\\r
--add-data "assets:assets" --name MyApp main.py\r
\`\`\`\r
\r
Remember, the \`\\\` symbol means you can continue the command on the next line. If you are using a batch file for Windows, use \`^\` instead.\r
\r
\r
## Using Paths and Data\r
\r
As mentioned before, using imported data requires you to include the flag \`--add-data\` as outlined above. However, in your code, you should find the relative path using this wrapper:\r
\r
\`\`\`python\r
import os\r
\r
def get_resource_path(relative_path):\r
    if hasattr(sys, '_MEIPASS'):\r
        return os.path.join(sys._MEIPASS, relative_path)\r
    return os.path.join(os.path.abspath("."), relative_path)\r
\`\`\`\r
\r
This allows you to replace the path when opening a file from this:\r
\r
\`\`\`python\r
open('path/to/file.txt', 'r') as file: pass # Incorrect\r
open(get_resource_path('path/to/file.txt'), 'r') as file: pass # Correct\r
\`\`\`\r
\r
## Further Help\r
Run:\r
\`\`\`bash\r
pyinstaller --help\r
\`\`\`\r
For full documentation, visit: https://pyinstaller.org/\r
\r
## Compilation Batch file example\r
\r
If you wanted to automate the creation of the file, you can make a batch file on windows that creates the virtual environment, handles everything, and then finishes. This is currently only for windows only:\r
\r
\`\`\`batch\r
@echo off\r
setlocal enabledelayedexpansion\r
\r
set VENV_DIR=venv_temp_build\r
set ICON=icon.ico\r
set SCRIPT=App.py\r
set APP_NAME=AegisConnect\r
\r
echo *** Starting build process ***\r
\r
REM 1. Remove existing temporary venv if it exists\r
if exist "%VENV_DIR%" (\r
    echo Removing existing virtual environment...\r
    REM Make sure no Python processes are running that lock files\r
    tasklist /FI "IMAGENAME eq python.exe" /FO LIST | findstr /I "%CD%\\%VENV_DIR%" >nul\r
    if not errorlevel 1 (\r
        echo ERROR: Python processes are running from %VENV_DIR%. Please close them before continuing.\r
        pause\r
        exit /b 1\r
    )\r
    rmdir /s /q "%VENV_DIR%"\r
    if exist "%VENV_DIR%" (\r
        echo ERROR: Could not remove %VENV_DIR%. Please close any programs using it.\r
        pause\r
        exit /b 1\r
    )\r
)\r
\r
REM 2. Create a new virtual environment\r
echo Creating new virtual environment...\r
python -m venv "%VENV_DIR%"\r
if errorlevel 1 (\r
    echo ERROR: Failed to create virtual environment.\r
    pause\r
    exit /b 1\r
)\r
\r
REM 3. Activate the virtual environment\r
echo Activating virtual environment...\r
call "%VENV_DIR%\\Scripts\\activate.bat"\r
if errorlevel 1 (\r
    echo ERROR: Failed to activate virtual environment.\r
    pause\r
    exit /b 1\r
)\r
\r
REM 4. Upgrade pip and install requirements\r
echo Upgrading pip and installing requirements...\r
python -m pip install --upgrade pip\r
if errorlevel 1 (\r
    echo ERROR: Failed to upgrade pip.\r
    call deactivate\r
    rmdir /s /q "%VENV_DIR%"\r
    pause\r
    exit /b 1\r
)\r
\r
pip install -r requirements.txt\r
if errorlevel 1 (\r
    echo ERROR: Failed to install required packages.\r
    call deactivate\r
    rmdir /s /q "%VENV_DIR%"\r
    pause\r
    exit /b 1\r
)\r
\r
REM 5. Run PyInstaller to build the app\r
echo Building application with PyInstaller...\r
pyinstaller --onefile --clean --icon="%ICON%" --add-data "data;data" --add-data "templates;templates" --name "%APP_NAME%" "%SCRIPT%"\r
if errorlevel 1 (\r
    echo ERROR: PyInstaller build failed.\r
    call deactivate\r
    rmdir /s /q "%VENV_DIR%"\r
    pause\r
    exit /b 1\r
)\r
\r
REM 6. Deactivate virtual environment\r
echo Deactivating virtual environment...\r
call deactivate\r
\r
REM 7. Clean up by removing the temporary venv\r
echo Cleaning up virtual environment...\r
rmdir /s /q "%VENV_DIR%"\r
if exist "%VENV_DIR%" (\r
    echo WARNING: Could not remove virtual environment folder completely. Please remove manually.\r
) else (\r
    echo Cleanup successful.\r
)\r
\r
echo *** Build process complete! ***\r
pause\r
endlocal\r
\`\`\``;export{n as default};
