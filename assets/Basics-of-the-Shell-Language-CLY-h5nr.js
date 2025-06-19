const n=`# Basics of the Shell Language\r
\r
## Preparing the file\r
\r
Begin every file with the following line:\r
\r
\`\`\`bash\r
#!/bin/bash\r
\`\`\`\r
\r
You may need to use one of the following lines \r
\r
In order to run the code as well, make sure you set the permissions of the file to be able to execute. This can be done using the following command:\r
\r
\`\`\`bash\r
chmod +x file.sh\r
\`\`\`\r
\r
To finally run the file:\r
\r
\`\`\`bash\r
./file.sh\r
\`\`\`\r
\r
---\r
\r
## Basics of Variables\r
To declare a variable, use the following:\r
\r
\`\`\`bash\r
name="Moae" # No spaces around the =\r
\`\`\`\r
\r
When accessing a variable, use \`$\` in front of it. For example:\r
\r
\`\`\`bash\r
echo $name\r
\`\`\`\r
\r
Always quote variables in shell unless you explicitly want splitting or glob expansion.\r
\r
\`\`\`bash\r
line="   a   b   "\r
echo $line      # → a b\r
echo "$line"    # →    a   b   \r
\`\`\`\r
---\r
\r
## Quoting Rules\r
- Use double quotes (\`""\`) when expanding variables inside.\r
- Use single quotes (\`''\`) when treating everything as literals.\r
- Use backticks (\`\\\`\\\`\`) (or \`$(...)\`) when running a command substitution. In other words, when you want to run a command and use its output.\r
\r
\`\`\`bash\r
echo "Hello, $name"   # → Hello, Moae\r
echo 'Hello, $name'   # → Hello, $name\r
\r
now=$(date)\r
echo "Current time is: $now"\r
\`\`\`\r
\r
---\r
\r
## Standard Printing and Reading\r
echo "Enter your name:"\r
read name\r
echo "Hello, $name!"\r
\r
---\r
\r
## Arithmetic and Numerical Calculations\r
Basic arithmetic expressions are done inside of \`$(())\`. For example:\r
\r
\`\`\`bash\r
a=5\r
b=3\r
\r
sum=$((a + b))\r
echo "$sum"  # Output: 8\r
\`\`\`\r
\r
You can use \`+\`, \`-\`, \`*\`, \`/\` and \`%\` for standard operations. You also have post/pre increment \`++\` and \`--\`. \`**\` is not POSIX, it's bash only.\r
\r
POSIX shell does NOT support floating-point arithmetic. To do that, use \`bc\`:\r
\r
\`\`\`bash\r
echo "3.14 * 2" | bc  # 6.28\r
\`\`\`\r
\r
---\r
\r
## Conditionals\r
Conditionals are run inside brackets \`[]\`, which is equivalent to running \`test\`. Note the following:\r
\r
| Logic   | \`[ ... ]\` syntax           | Shell operator syntax |\r
| ------- | -------------------------- | --------------------- |\r
| **AND** | \`[ cond1 ] && [ cond2 ]\`   | \`&&\`                  |\r
| **OR**  | \`[ cond1 ] \\|\\| [ cond2 ]\` | \`\\|\\|\`                |\r
| **NOT** | \`! [ cond ]\`               | \`!\`                   |\r
\r
**IMPORTANT:** You NEED spaces around the brackets on the inside. \`[ var -eq var ]\` is valid, but \`[var -eq var]\` is not.\r
\r
### \`if\`, \`elif\`, and \`else\`\r
 This is the basic form:\r
\r
\`\`\`bash\r
if [ condition ]; then\r
    # code if true\r
elif [ other_condition ]; then\r
    # another case\r
else\r
    # code if none matched\r
fi\r
\`\`\`\r
\r
Common test operators (using inside \`[]\`)\r
#### Integers\r
  \r
| Operator | Meaning            |\r
| -------- | ------------------ |\r
| \`-eq\`    | equal              |\r
| \`-ne\`    | not equal          |\r
| \`-lt\`    | less than          |\r
| \`-le\`    | less than or equal |\r
| \`-gt\`    | greater than       |\r
| \`-ge\`    | greater or equal   |\r
\r
#### Strings\r
\r
| Operator | Meaning      |\r
| -------- | ------------ |\r
| \`=\`      | equal        |\r
| \`!=\`     | not equal    |\r
| \`-z\`     | is empty     |\r
| \`-n\`     | is not empty |\r
\r
#### Files (used before the path)\r
\r
| Operator         | Checks if...                   |\r
| ---------------- | ------------------------------ |\r
| \`-f\`             | file exists and is regular     |\r
| \`-d\`             | directory exists               |\r
| \`-e\`             | file/directory exists          |\r
| \`-r\`, \`-w\`, \`-x\` | readable, writable, executable |\r
\r
### Switch statements\r
\r
\`;;\` ends each pattern block, and \`*\` is the default (like else). Here's a basic example:\r
\r
\`\`\`shell\r
read fruit\r
\r
case "$fruit" in\r
    apple)\r
        echo "You chose apple"\r
        ;;\r
    banana|mango)\r
        echo "Tropical choice!"\r
        ;;\r
    *)\r
        echo "Unknown fruit"\r
        ;;\r
esac\r
\`\`\`\r
\r
---\r
\r
## "Arrays" (They don't really exist here)\r
Shell (specifically POSIX \`sh\` / \`dash\`) doesn’t have real arrays like Bash, but you can simulate them using strings.\r
\r
\`\`\`bash\r
animals="dog cat bird fish mouse"\r
\`\`\`\r
\r
---\r
\r
## Loops\r
### \`for\` loops\r
For loops can be used as the following:\r
\r
\`\`\`bash\r
for animal in dog cat bird; do # Note that you do NOT need "" around each word\r
    echo "Animal: $animal"\r
done\r
\`\`\`\r
\r
You can do this with a variable "array", like this:\r
\r
\`\`\`bash\r
animals="dog cat bird fish mouse"\r
\r
for animal in $animals; do\r
    echo "Animal: $animal"\r
done\r
\`\`\`\r
\r
**IMPORTANT:** Do NOT use \`"$animals"\` here because it will be interpreted as just the single string. If you wish to change the internal field separator (the delimiter to split up a string), do so as this:\r
\r
\`\`\`bash\r
items="apple,banana,cherry"\r
IFS=','\r
\r
for item in $items; do\r
    echo "$item"\r
done\r
\`\`\`\r
\r
### \`while\` loops\r
Use a manual incrementer, set up with a basic conditional\r
\`\`\`bash\r
i=1\r
while [ "$i" -le 5 ]; do\r
    echo "Count: $i"\r
    i=$((i + 1))\r
done\r
\`\`\`\r
\r
### \`until\` loops\r
These work in reverse to while loops. Try not to use this one.\r
\r
\`\`\`bash\r
count=0\r
until [ "$count" -gt 3 ]; do\r
    echo "Count is $count"\r
    count=$((count + 1))\r
done\r
\`\`\`\r
\r
### \`break\` and \`continue\`\r
\r
You can use \`break\` and \`continue\` as you normally would:\r
\r
\`\`\`bash\r
for animal in dog cat fish STOP mouse; do\r
    if [ "$animal" = "STOP" ]; then\r
        break\r
    fi\r
    echo "$animal"\r
done\r
\r
for animal in dog skipme cat fish; do\r
    if [ "$animal" = "skipme" ]; then\r
        continue\r
    fi\r
    echo "$animal"\r
done\r
\r
\`\`\`\r
---\r
\r
## Arguments\r
\r
Accessing arguments is as you would for other internal variables, specifically:\r
\r
| Symbol | Meaning                           |\r
| ------ | --------------------------------- |\r
| \`$0\`   | Script name                       |\r
| \`$1\`   | First argument                    |\r
| \`$2\`   | Second argument                   |\r
| \`$#\`   | Number of arguments               |\r
| \`$@\`   | All arguments (preserves quoting) |\r
| \`$*\`   | All arguments (as one string)     |\r
\r
Note that quoting here matters.\r
\r
| Usage  | What it does                                   |\r
| ------ | ---------------------------------------------- |\r
| \`"$@"\` | Treats each arg as a separate quoted word      |\r
| \`"$*"\` | Joins all args into a **single** quoted string |\r
\r
---\r
\r
## Running Shell Commands Inside a Script\r
\r
You can run any terminal command inside a shell script, just like you'd type it in the terminal:\r
\r
\`\`\`bash\r
ls -l # List files\r
grep "pattern" file.txt # Search for a pattern in a file\r
cut -d',' -f1 file.csv # Cut fields\r
cat file.txt | grep "thing" | sort | uniq # Pipe commands\r
\`\`\`\r
\r
You can also use command substitution to capture output:\r
\r
\`\`\`bash\r
count=$(grep -c "pattern" file.txt)\r
echo "There are $count matches"\r
\`\`\`\r
---\r
\r
## Errors\r
Every command returns an exit status (\`0\` = success, \`non-zero\` = error).\r
\r
\`\`\`bash\r
if ! command; then # Equivalent to running [ $? -ne 0 ] after the command to check the status\r
    echo "Command failed!" >&2 # IMPORTANT: use >&2\r
    exit 1\r
fi\r
\`\`\`\r
\r
When dealing with conditionals, you might find that another error is printed other than your own. You can avoid this by redirecting \`stderr\` to \`/dev/null\` to ignore it. For example:\r
\r
\`\`\`bash\r
if ! [ "$1" -eq "$1" ] 2>/dev/null; then\r
    echo "Argument 1 must be an integer" >&2\r
    exit 1\r
fi\r
\`\`\`\r
\r
Be sure to do the \`2>/dev/null\` for each conditional, like:\r
\r
\`\`\`bash\r
if ! [ "$1" -eq "$1" ] 2>/dev/null || ! [ "$1" -ge 0 ] 2>/dev/null; then\r
    echo "Argument 1 must be a non-negative integer" >&2\r
    exit 1\r
fi\r
\`\`\`\r
\r
In terms of quick and efficient error handling, consider these:\r
\r
| Tool       | Purpose                       |\r
| ---------- | ----------------------------- |\r
| \`if ! cmd\` | Check for failure             |\r
| \`set -e\`   | Fail fast on any error        |\r
| \`set -u\`   | Catch unset variables         |\r
| \`exit N\`   | Exit with specific error code |\r
| \`trap\`     | Run cleanup logic on exit     |\r
| \`>&2\`      | Print to stderr (for errors)  |\r
\r
---\r
\r
## Reading Files\r
\r
Reading files is quite straight-forward. Getting a single file by name can be done as this:\r
\r
\`\`\`bash\r
file="my_file.txt"\r
if [ -f "$file" ]; then\r
    echo "Found: $file"\r
fi\r
\`\`\`\r
\r
But if you want a list of files:\r
\r
\`\`\`bash\r
for file in *; do # * means EVERYTHING in the current directory\r
    if [ -f "$file" ]; then\r
        echo "$file"\r
    fi\r
done\r
\`\`\`\r
\r
Note that you can be more specific with the patterns of the actual files. For example, instead of \`*\`, you can do \`*.txt\` to get all the \`txt\` files.\r
\r
**IMPORTANT:** \`[ -f "$file" ]\` ensures the item is a regular file (not a directory, syumlink, socket or something exotic).\r
\r
---\r
\r
## Useful Examples\r
### Reading every line of an input\r
\r
\`\`\`bash\r
while IFS= read -r line; do\r
    echo "$line"\r
done\r
\`\`\`\r
\r
\`IFS=\` disables trimming of whitespaces and \`-r\` prevents backslash escape interpretation. You can also do this:\r
\r
\`\`\`bash\r
cat input.txt | while IFS= read -r line; do\r
    echo "Line: $line"\r
done\r
\`\`\`\r
\r
but redirection (\`< file\`) is slightly more efficient.\r
\r
### Checking if a value is an integer\r
\`\`\`bash\r
[ "$var" -eq "$var" ] # As a conditional\r
\`\`\`\r
\r
`;export{n as default};
