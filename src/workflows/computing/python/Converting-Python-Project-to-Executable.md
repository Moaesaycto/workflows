# Converting Your Python Project to an Executable File

PyInstaller bundles a Python application and all its dependencies into a single package, such as a standalone executable file, for Windows, macOS, or Linux. Begin by installing `pyinstaller` with:

```
pip install pyinstaller
```

In the root of your directory, you can run this to turn it into an executable. The basic usage as follows:
```bash
pyinstaller [OPTIONS] script.py
```

## Common Options

### Output Format
- `--onefile` : Package into a single executable.
- `--onedir` : Package into a directory (default).

### Build Cleanliness
- `--clean` : Remove temporary files from previous builds.
- `--noconfirm` : Overwrite output directory without asking.

### Console/UI
- `--console` : Show a console window (default).
- `--windowed` : Hide console window (for GUI apps).

### Icons & Version Info
- `--icon=ICON_FILE` : Set the app icon (`.ico` on Windows, `.icns` on macOS).
- `--version-file=FILE` : Attach version metadata from a file (Windows only).

### Data & Resources
- `--add-data "SRC;DEST"` : Include extra files (use `:` on Unix, `;` on Windows).
- `--add-binary "SRC;DEST"` : Include binary files like DLLs.
- `--collect-data=MODULE` : Automatically include data for a module.
- `--collect-all=MODULE` : Include all data and submodules of a module.

### Hidden Imports
- `--hidden-import=MODULE` : Include a module not found automatically.

### Debugging & Logging
- `--debug=all` : Enable verbose debug output.
- `--log-level=LEVEL` : Set logging level (e.g., `INFO`, `DEBUG`).

### Output Control
- `--name NAME` : Name the output file.
- `--distpath DIR` : Set output directory for final build.
- `--workpath DIR` : Set path for temporary build files.
- `--specpath DIR` : Set path to store the generated `.spec` file.

### Runtime
- `--runtime-tmpdir DIR` : Set where the executable unpacks at runtime.
- `--noupx` : Disable UPX compression.

## Tips
- Use `--windowed` for GUI apps to avoid opening a terminal window.
- Use `--noconfirm` and `--clean` for CI/CD automation.
- Use platform-specific separators for `--add-data` (colon `:` for Unix, semicolon `;` for Windows).


## Example Command
```bash
pyinstaller --onefile --clean --windowed --icon=app.icns \
--add-data "assets:assets" --name MyApp main.py
```

Remember, the `\` symbol means you can continue the command on the next line. If you are using a batch file for Windows, use `^` instead.


## Using Paths and Data

As mentioned before, using imported data requires you to include the flag `--add-data` as outlined above. However, in your code, you should find the relative path using this wrapper:

```python
import os

def get_resource_path(relative_path):
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.abspath("."), relative_path)
```

This allows you to replace the path when opening a file from this:

```python
open('path/to/file.txt', 'r') as file: pass # Incorrect
open(get_resource_path('path/to/file.txt'), 'r') as file: pass # Correct
```

## Further Help
Run:
```bash
pyinstaller --help
```
For full documentation, visit: https://pyinstaller.org/

## Compilation Batch file example

If you wanted to automate the creation of the file, you can make a batch file on windows that creates the virtual environment, handles everything, and then finishes. This is currently only for windows only:

```batch
@echo off
setlocal enabledelayedexpansion

set VENV_DIR=venv_temp_build
set ICON=icon.ico
set SCRIPT=App.py
set APP_NAME=AegisConnect

echo *** Starting build process ***

REM 1. Remove existing temporary venv if it exists
if exist "%VENV_DIR%" (
    echo Removing existing virtual environment...
    REM Make sure no Python processes are running that lock files
    tasklist /FI "IMAGENAME eq python.exe" /FO LIST | findstr /I "%CD%\%VENV_DIR%" >nul
    if not errorlevel 1 (
        echo ERROR: Python processes are running from %VENV_DIR%. Please close them before continuing.
        pause
        exit /b 1
    )
    rmdir /s /q "%VENV_DIR%"
    if exist "%VENV_DIR%" (
        echo ERROR: Could not remove %VENV_DIR%. Please close any programs using it.
        pause
        exit /b 1
    )
)

REM 2. Create a new virtual environment
echo Creating new virtual environment...
python -m venv "%VENV_DIR%"
if errorlevel 1 (
    echo ERROR: Failed to create virtual environment.
    pause
    exit /b 1
)

REM 3. Activate the virtual environment
echo Activating virtual environment...
call "%VENV_DIR%\Scripts\activate.bat"
if errorlevel 1 (
    echo ERROR: Failed to activate virtual environment.
    pause
    exit /b 1
)

REM 4. Upgrade pip and install requirements
echo Upgrading pip and installing requirements...
python -m pip install --upgrade pip
if errorlevel 1 (
    echo ERROR: Failed to upgrade pip.
    call deactivate
    rmdir /s /q "%VENV_DIR%"
    pause
    exit /b 1
)

pip install -r requirements.txt
if errorlevel 1 (
    echo ERROR: Failed to install required packages.
    call deactivate
    rmdir /s /q "%VENV_DIR%"
    pause
    exit /b 1
)

REM 5. Run PyInstaller to build the app
echo Building application with PyInstaller...
pyinstaller --onefile --clean --icon="%ICON%" --add-data "data;data" --add-data "templates;templates" --name "%APP_NAME%" "%SCRIPT%"
if errorlevel 1 (
    echo ERROR: PyInstaller build failed.
    call deactivate
    rmdir /s /q "%VENV_DIR%"
    pause
    exit /b 1
)

REM 6. Deactivate virtual environment
echo Deactivating virtual environment...
call deactivate

REM 7. Clean up by removing the temporary venv
echo Cleaning up virtual environment...
rmdir /s /q "%VENV_DIR%"
if exist "%VENV_DIR%" (
    echo WARNING: Could not remove virtual environment folder completely. Please remove manually.
) else (
    echo Cleanup successful.
)

echo *** Build process complete! ***
pause
endlocal
```