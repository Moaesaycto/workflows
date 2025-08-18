const r=`# Basics of Subprocesses in Python\r
\r
First, make sure you import the subprocess module using:\r
\r
\`\`\`py\r
import subprocess\r
\`\`\`\r
\r
Generally, to run a subprocess you do something like this:\r
\r
\`\`\`py\r
subprocess.run(["curl", "--silent", url], stdout=outfile)\r
\`\`\`\r
\r
If you wanted to capture the output of a command directly into the script, you can do so like this:\r
\r
\`\`\`py\r
result = subprocess.run(\r
    ["grep", "-E", "PATTERN", "filename"],\r
    capture_output=True,\r
    text=True\r
)\r
output = result.stdout\r
\`\`\`\r
\r
Note that you NEED the \`text=True\` to ensure that the output is a string instead of bytes.\r
\r
## Running Piped Commands\r
\r
You can run piped commands like you would by setting up an entire string rather than using a list. For example:\r
\r
\`\`\`py\r
result = subprocess.run(\r
    f"sort {filename} | uniq -w 8",\r
    capture_output=True,\r
    text=True,\r
    shell=True\r
)\r
output = result.stdout\r
\`\`\`\r
\r
## Temporary Files\r
\r
You can instead create temporary files using the following module:\r
\r
\`\`\`py\r
import tempfiles\r
\r
with tempfile.NamedTemporaryFile(mode="w+", delete=False) as tmpfile:\r
    tmpfile.write("some content")\r
    tmpfile.flush()  # Make sure data is written before subprocess uses it\r
\`\`\`\r
\r
You need to have the \`.flush()\` for async purposes. It's like an \`await\` in JS.\r
\r
## Running a Whole Shell Script\r
\r
If you can't be bothered running individual subprocesses, consider setting up a temporary \`.sh\` file and running it that way:\r
\r
\`\`\`py\r
with tempfile.NamedTemporaryFile(mode="w", delete=False, suffix=".sh") as script:\r
    script.write("#!/bin/dash\\n echo Hello")\r
os.chmod(script.name, 0o755)  # Make it executable\r
subprocess.run([script.name])\r
\`\`\``;export{r as default};
