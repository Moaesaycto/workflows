# Curl, WGet and JQ for Web-Scraping

`curl` (Client URL) and `wget` (Web Get) are used to send requests. Below is a table with the basic commands

| Task                | `curl`                   | `wget`                       |
| ------------------- | ------------------------ | ---------------------------- |
| Simple download     | `curl -O URL`            | `wget URL`                   |
| Custom filename     | `curl -o file URL`       | `wget -O file URL`           |
| Follow redirects    | `curl -L URL`            | `wget URL` (default follows) |
| POST request        | `curl -X POST -d ...`    | *(Not ideal — use curl)*     |
| Recursive site grab | *(Not ideal — use wget)* | `wget -r URL`                |

## JQ (JSON Query Tool)

`jq` is just a general tool for working with JSON objects. Here are the basics:

| Task           | Command                       |
| -------------- | ----------------------------- |
| Pretty print   | `jq .`                        |
| Get key        | `jq '.key'`                   |
| Nested key     | `jq '.a.b.c'`                 |
| Filter array   | `jq '.\[] \| select(.x > 5)'` |
| Extract fields | `jq '.\[] \| {id, name}'`     |
| From curl      | `curl ... \| jq '.'`          |

You can use `jq` right after `curl` or `wget`, like so:

```bash
curl -s https://api.example.com/data | jq '.key'
```

### Array Access and Manipulation in JQ

| Syntax                               | Description                            |
| ------------------------------------ | -------------------------------------- |
| `.[0]`                               | First element                          |
| `.[-1]`                              | Last element                           |
| `.[0:2]`                             | Slice: index 0 to 1                    |
| `.[2:]`                              | Slice: from index 2 to end             |
| `.[-3:]`                             | Last 3 elements                        |
| `.[0,2,4]`                           | Specific indexes                       |
| `\[.\[] \| select(.age > 30)]`       | Filter items into new array            |
| `\[.\[] \| .name]`                   | Extract field `.name` from each object |
| `\[.\[] \| select(.ok == true)]\[0]` | First item where condition is true     |
| `map(.name)`                         | Shorthand for field extraction         |
| `map(select(.score > 50))`           | Filter using `map()`                   |
| `any(.[]; .id == 1)`                 | Returns true if any match              |
| `index("b")`                         | Index of value `"b"`                   |
| `map(.name == "foo") \| index(true)` | Index of first match by condition      |
| `sort_by(.score)`                    | Sort array of objects by key           |

### JQ Variables and Arguments
In order to use arguments, use the structure `--arg name value`. For example, 

```bash
jq --arg varname "$shell_var" '... use $varname ...'
```

This will replace the `$varname` string with the desired variable. Repeat this for all arguments needed.
### Filtering

Filtering uses the `select()` and `test()` functions:
```bash
jq '.data[] | select(.type == "Course")'
```

You can also use `and`, `or` and `not` keywords, such as:

```bash
select(.type == "Course" and (.code | test("^COMP")))
select(.type == "Course" or .type == "Program") 
select((.code | test("^BIOC")) | not)
```

You can use Regex to filter based on the actual attribute. For example:
```bash
select(.code | test("^COMP[0-9]{4}"))
```

Of course, you can handle these externally if needed, using variables:

```bash
jq --arg code "^COMP[0-9]{4}" 'select(.code | test($code))'
```

| Function           | Purpose                           | Example                            |
| ------------------ | --------------------------------- | ---------------------------------- |
| `select(...)`      | Filters based on condition        | `select(.code == "COMP1531")`      |
| `test("regex")`    | Regex match for strings           | `select(.code \| test("^COMP"))`   |
| `and`, `or`, `not` | Logical operations                | `select(.a == 1 and .b == 2)`      |
| `.field[]`         | Index into arrays                 | `.lines[0] == "Course"`            |
| `.field?`          | Safe access (no error if missing) | `select(.optional?)`               |


## Fallback

If you are worried something does not exist, you can use a fallback by doing `.field1 // .field2`. For example:

```bash
'| select((.code // .filename) | test(\$code))'
```

## Substitutions (`gsub`)
`gsub` is used to replace characters in `jq` commands. The usage is as follows:

```bash
gsub("pattern"; "replacement")
```

For example:

```bash
"a\nb\r\nc" | gsub("[\n\r]+"; " ") # ->  "a b c"
```

### Making it Shell Compatible
Suppose you want to format it into a string that you can use outside of JQ. To do this, we want to be using the raw output, which is with `-r`.

To create the strings you're used to working with, at the very end of your query, set them by referring to them as follows:

```bash
"\(.field1) \(.field2)"
```
From there, you are able to safely pass them into the desired UNIX commands. For example:

```bash
curl -sL "$url" | jq -r '.[]| "\(.code) \(.title)' | sort | uniq
```