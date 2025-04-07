# Using Tabulate in Python (Quick Guide)

`tabulate` lets you print neatly formatted tables in the terminal or as plain text.

## Installation

```bash
pip install tabulate
```

## Basic Usage

```python
from tabulate import tabulate

data = [
    ["Alice", 24],
    ["Bob", 19],
    ["Charlie", 31]
]
headers = ["Name", "Age"]

print(tabulate(data, headers=headers))
```

### Output:
```plaintext
Name      Age
-------  -----
Alice      24
Bob        19
Charlie    31
```

## Table Formats

You can change how the table looks with `tablefmt`:

```python
print(tabulate(data, headers, tablefmt="grid"))
```

Other formats include:
- `"plain"`
- `"simple"`
- `"github"`
- `"grid"`
- `"fancy_grid"`
- `"pipe"` (good for Markdown)
- `"html"` (for web)

## Tips

- Works with lists of lists, dicts, or objects.
- You can align columns with `stralign` or `numalign`.

```python
print(tabulate(data, headers, stralign="right"))
```
