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