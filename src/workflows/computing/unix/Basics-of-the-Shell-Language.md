# Basics of the Shell Language

## Preparing the file

Begin every file with the following line:

```bash
#!/bin/bash
```

You may need to use one of the following lines 

In order to run the code as well, make sure you set the permissions of the file to be able to execute. This can be done using the following command:

```bash
chmod +x file.sh
```

To finally run the file:

```bash
./file.sh
```

---

## Basics of Variables
To declare a variable, use the following:

```bash
name="Moae" # No spaces around the =
```

When accessing a variable, use `$` in front of it. For example:

```bash
echo $name
```

Always quote variables in shell unless you explicitly want splitting or glob expansion.

```bash
line="   a   b   "
echo $line      # → a b
echo "$line"    # →    a   b   
```
---

## Quoting Rules
- Use double quotes (`""`) when expanding variables inside.
- Use single quotes (`''`) when treating everything as literals.
- Use backticks (`\`\``) (or `$(...)`) when running a command substitution. In other words, when you want to run a command and use its output.

```bash
echo "Hello, $name"   # → Hello, Moae
echo 'Hello, $name'   # → Hello, $name

now=$(date)
echo "Current time is: $now"
```

---

## Standard Printing and Reading
echo "Enter your name:"
read name
echo "Hello, $name!"

---

## Arithmetic and Numerical Calculations
Basic arithmetic expressions are done inside of `$(())`. For example:

```bash
a=5
b=3

sum=$((a + b))
echo "$sum"  # Output: 8
```

You can use `+`, `-`, `*`, `/` and `%` for standard operations. You also have post/pre increment `++` and `--`. `**` is not POSIX, it's bash only.

POSIX shell does NOT support floating-point arithmetic. To do that, use `bc`:

```bash
echo "3.14 * 2" | bc  # 6.28
```

---

## Conditionals
Conditionals are run inside brackets `[]`, which is equivalent to running `test`. Note the following:

| Logic   | `[ ... ]` syntax           | Shell operator syntax |
| ------- | -------------------------- | --------------------- |
| **AND** | `[ cond1 ] && [ cond2 ]`   | `&&`                  |
| **OR**  | `[ cond1 ] \|\| [ cond2 ]` | `\|\|`                |
| **NOT** | `! [ cond ]`               | `!`                   |

**IMPORTANT:** You NEED spaces around the brackets on the inside. `[ var -eq var ]` is valid, but `[var -eq var]` is not.

### `if`, `elif`, and `else`
 This is the basic form:

```bash
if [ condition ]; then
    # code if true
elif [ other_condition ]; then
    # another case
else
    # code if none matched
fi
```

Common test operators (using inside `[]`)
#### Integers
  
| Operator | Meaning            |
| -------- | ------------------ |
| `-eq`    | equal              |
| `-ne`    | not equal          |
| `-lt`    | less than          |
| `-le`    | less than or equal |
| `-gt`    | greater than       |
| `-ge`    | greater or equal   |

#### Strings

| Operator | Meaning      |
| -------- | ------------ |
| `=`      | equal        |
| `!=`     | not equal    |
| `-z`     | is empty     |
| `-n`     | is not empty |

#### Files (used before the path)

| Operator         | Checks if...                   |
| ---------------- | ------------------------------ |
| `-f`             | file exists and is regular     |
| `-d`             | directory exists               |
| `-e`             | file/directory exists          |
| `-r`, `-w`, `-x` | readable, writable, executable |

### Switch statements

`;;` ends each pattern block, and `*` is the default (like else). Here's a basic example:

```shell
read fruit

case "$fruit" in
    apple)
        echo "You chose apple"
        ;;
    banana|mango)
        echo "Tropical choice!"
        ;;
    *)
        echo "Unknown fruit"
        ;;
esac
```

---

## "Arrays" (They don't really exist here)
Shell (specifically POSIX `sh` / `dash`) doesn’t have real arrays like Bash, but you can simulate them using strings.

```bash
animals="dog cat bird fish mouse"
```

---

## Loops
### `for` loops
For loops can be used as the following:

```bash
for animal in dog cat bird; do # Note that you do NOT need "" around each word
    echo "Animal: $animal"
done
```

You can do this with a variable "array", like this:

```bash
animals="dog cat bird fish mouse"

for animal in $animals; do
    echo "Animal: $animal"
done
```

**IMPORTANT:** Do NOT use `"$animals"` here because it will be interpreted as just the single string. If you wish to change the internal field separator (the delimiter to split up a string), do so as this:

```bash
items="apple,banana,cherry"
IFS=','

for item in $items; do
    echo "$item"
done
```

### `while` loops
Use a manual incrementer, set up with a basic conditional
```bash
i=1
while [ "$i" -le 5 ]; do
    echo "Count: $i"
    i=$((i + 1))
done
```

### `until` loops
These work in reverse to while loops. Try not to use this one.

```bash
count=0
until [ "$count" -gt 3 ]; do
    echo "Count is $count"
    count=$((count + 1))
done
```

### `break` and `continue`

You can use `break` and `continue` as you normally would:

```bash
for animal in dog cat fish STOP mouse; do
    if [ "$animal" = "STOP" ]; then
        break
    fi
    echo "$animal"
done

for animal in dog skipme cat fish; do
    if [ "$animal" = "skipme" ]; then
        continue
    fi
    echo "$animal"
done

```
---

## Arguments

Accessing arguments is as you would for other internal variables, specifically:

| Symbol | Meaning                           |
| ------ | --------------------------------- |
| `$0`   | Script name                       |
| `$1`   | First argument                    |
| `$2`   | Second argument                   |
| `$#`   | Number of arguments               |
| `$@`   | All arguments (preserves quoting) |
| `$*`   | All arguments (as one string)     |

Note that quoting here matters.

| Usage  | What it does                                   |
| ------ | ---------------------------------------------- |
| `"$@"` | Treats each arg as a separate quoted word      |
| `"$*"` | Joins all args into a **single** quoted string |

---

## Running Shell Commands Inside a Script

You can run any terminal command inside a shell script, just like you'd type it in the terminal:

```bash
ls -l # List files
grep "pattern" file.txt # Search for a pattern in a file
cut -d',' -f1 file.csv # Cut fields
cat file.txt | grep "thing" | sort | uniq # Pipe commands
```

You can also use command substitution to capture output:

```bash
count=$(grep -c "pattern" file.txt)
echo "There are $count matches"
```
---

## Errors
Every command returns an exit status (`0` = success, `non-zero` = error).

```bash
if ! command; then # Equivalent to running [ $? -ne 0 ] after the command to check the status
    echo "Command failed!" >&2 # IMPORTANT: use >&2
    exit 1
fi
```

When dealing with conditionals, you might find that another error is printed other than your own. You can avoid this by redirecting `stderr` to `/dev/null` to ignore it. For example:

```bash
if ! [ "$1" -eq "$1" ] 2>/dev/null; then
    echo "Argument 1 must be an integer" >&2
    exit 1
fi
```

Be sure to do the `2>/dev/null` for each conditional, like:

```bash
if ! [ "$1" -eq "$1" ] 2>/dev/null || ! [ "$1" -ge 0 ] 2>/dev/null; then
    echo "Argument 1 must be a non-negative integer" >&2
    exit 1
fi
```

In terms of quick and efficient error handling, consider these:

| Tool       | Purpose                       |
| ---------- | ----------------------------- |
| `if ! cmd` | Check for failure             |
| `set -e`   | Fail fast on any error        |
| `set -u`   | Catch unset variables         |
| `exit N`   | Exit with specific error code |
| `trap`     | Run cleanup logic on exit     |
| `>&2`      | Print to stderr (for errors)  |

---

## Reading Files

Reading files is quite straight-forward. Getting a single file by name can be done as this:

```bash
file="my_file.txt"
if [ -f "$file" ]; then
    echo "Found: $file"
fi
```

But if you want a list of files:

```bash
for file in *; do # * means EVERYTHING in the current directory
    if [ -f "$file" ]; then
        echo "$file"
    fi
done
```

Note that you can be more specific with the patterns of the actual files. For example, instead of `*`, you can do `*.txt` to get all the `txt` files.

**IMPORTANT:** `[ -f "$file" ]` ensures the item is a regular file (not a directory, syumlink, socket or something exotic).

---

## Useful Examples
### Reading every line of an input

```bash
while IFS= read -r line; do
    echo "$line"
done
```

`IFS=` disables trimming of whitespaces and `-r` prevents backslash escape interpretation. You can also do this:

```bash
cat input.txt | while IFS= read -r line; do
    echo "Line: $line"
done
```

but redirection (`< file`) is slightly more efficient.

### Checking if a value is an integer
```bash
[ "$var" -eq "$var" ] # As a conditional
```

