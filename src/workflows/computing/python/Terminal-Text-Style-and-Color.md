# Using Colorama in Python (Quick Guide)

`colorama` makes it easy to print coloured text in the terminal across platforms (including Windows).

## Installation

```bash
pip install colorama
```

## Basic Usage

```python
from colorama import init, Fore, Back, Style

init()  # Only needed on Windows

print(Fore.RED + 'This is red text')
print(Back.GREEN + 'With a green background')
print(Style.BRIGHT + 'Bright text')
print(Style.RESET_ALL + 'Back to normal')
```

## Available Colours

### Foreground (`Fore.`)
- `BLACK`, `RED`, `GREEN`, `YELLOW`, `BLUE`, `MAGENTA`, `CYAN`, `WHITE`, `RESET`

### Background (`Back.`)
- Same as above

### Style (`Style.`)
- `DIM`, `NORMAL`, `BRIGHT`, `RESET_ALL`

## Resetting

Always reset styles when you're done using colours:

```python
print(Fore.YELLOW + "Warning!" + Style.RESET_ALL)
```

## Useful Notes

To use Regex when detecting these patterns, you can use the following:

```python
ANSI_ESCAPE_PATTERN = re.compile(r'(\033\[[0-9;]*m)')
```
