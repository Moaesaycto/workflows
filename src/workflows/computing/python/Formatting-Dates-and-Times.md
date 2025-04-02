# Python Date and Datetime Formatting (Quick Guide)

The `datetime` module in Python lets you format dates and times using the `.strftime()` method.

## Importing

```python
from datetime import datetime, date
```

## Getting Current Date/Time

```python
now = datetime.now()
today = date.today()
```

## Common Format Codes

| Code | Meaning              | Example       |
|------|----------------------|---------------|
| `%Y` | Year (4 digits)      | `2025`        |
| `%y` | Year (2 digits)      | `25`          |
| `%m` | Month (01–12)        | `04`          |
| `%B` | Month name           | `April`       |
| `%b` | Short month name     | `Apr`         |
| `%d` | Day (01–31)          | `02`          |
| `%A` | Day name             | `Wednesday`   |
| `%a` | Short day name       | `Wed`         |
| `%H` | Hour (00–23)         | `14`          |
| `%I` | Hour (01–12)         | `02`          |
| `%p` | AM/PM                | `PM`          |
| `%M` | Minute               | `05`          |
| `%S` | Second               | `09`          |
| `%f` | Microsecond          | `123456`      |
| `%z` | Timezone offset      | `+0000`       |
| `%Z` | Timezone name        | `UTC`         |
| `%j` | Day of the year      | `092`         |
| `%W` | Week number (Mon)    | `14`          |
| `%U` | Week number (Sun)    | `13`          |
| `%c` | Local datetime       | `Wed Apr  2 14:05:09 2025` |
| `%x` | Local date           | `04/02/25`    |
| `%X` | Local time           | `14:05:09`    |

## Examples

```python
now = datetime.now()

print(now.strftime("%Y-%m-%d"))        # 2025-04-02
print(now.strftime("%d %B %Y"))        # 02 April 2025
print(now.strftime("%I:%M %p"))        # 02:05 PM
print(now.strftime("%A, %x"))          # Wednesday, 04/02/25
```

## Parsing Strings to Dates

Use `.strptime()` to parse a date string:

```python
dt = datetime.strptime("2025-04-02", "%Y-%m-%d")
```

