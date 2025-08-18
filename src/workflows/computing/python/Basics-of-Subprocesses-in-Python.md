# Basics of Subprocesses in Python

First, make sure you import the subprocess module using:

```py
import subprocess
```

Generally, to run a subprocess you do something like this:

```py
subprocess.run(["curl", "--silent", url], stdout=outfile)
```

If you wanted to capture the output of a command directly into the script, you can do so like this:

```py
result = subprocess.run(
    ["grep", "-E", "PATTERN", "filename"],
    capture_output=True,
    text=True
)
output = result.stdout
```

Note that you NEED the `text=True` to ensure that the output is a string instead of bytes.

## Running Piped Commands

You can run piped commands like you would by setting up an entire string rather than using a list. For example:

```py
result = subprocess.run(
    f"sort {filename} | uniq -w 8",
    capture_output=True,
    text=True,
    shell=True
)
output = result.stdout
```

## Temporary Files

You can instead create temporary files using the following module:

```py
import tempfiles

with tempfile.NamedTemporaryFile(mode="w+", delete=False) as tmpfile:
    tmpfile.write("some content")
    tmpfile.flush()  # Make sure data is written before subprocess uses it
```

You need to have the `.flush()` for async purposes. It's like an `await` in JS.

## Running a Whole Shell Script

If you can't be bothered running individual subprocesses, consider setting up a temporary `.sh` file and running it that way:

```py
with tempfile.NamedTemporaryFile(mode="w", delete=False, suffix=".sh") as script:
    script.write("#!/bin/dash\n echo Hello")
os.chmod(script.name, 0o755)  # Make it executable
subprocess.run([script.name])
```