# Dynamic Boxed Title String Generation

Let's define a few values:

```python
TITLE_PADDING = [3, 1]
TITLE_BORDER = [3, 1]
TITLE_DELIMITER = "#"
```

The padding represents the spaces between the text and the outside, where `TITLE_PADDING = [xPadding, yPadding]`, `TITLE_BORDER = [xBorderThickness, yBorderThickness]` and `TITLE_DELIMITER` is the character or string the boundary is made from.

Creating it manually looks like this:

```python
def create_title(string, width=None):
    words = string.split() if width else []
    secs, line = [], ""
    for word in words:
        if "\n" in word:
            pre, post = word.split("\n", 1)
            line += (" " if line else "") + pre
            secs += [line, post]
            line = ""
        elif len(line) + len(word) + bool(line) <= width:
            line += (" " if line else "") + word
        else:
            secs.append(line)
            line = word
    if line: secs.append(line)
    if not secs: secs = string.split("\n")

    px, py = TITLE_PADDING
    bx, by = TITLE_BORDER
    d = TITLE_DELIMITER
    g = len(max(secs, key=len)) + 2*px
    n = g + 2*bx*len(d)

    tb = [d*n]*by + [f"{' '*(g)}".join([d*bx]*2)]*py
    body = [f"{d*bx}{s.center(g)}{d*bx}" for s in secs]

    return "\n".join(tb + body + tb[::-1])
```

For a more pythonic approach, you can use `textwrap`:

```py
import textwrap

def create_title(string, width=None):
    from textwrap import wrap

    px, py = TITLE_PADDING
    bx, by = TITLE_BORDER
    d = TITLE_DELIMITER

    secs = wrap(string, width) if width else string.split("\n")
    g = len(max(secs, key=len)) + 2 * px
    n = g + 2 * bx * len(d)

    tb = [d * n] * by + [f"{' ' * (g + 1)}".join([d * bx] * 2)] * py
    body = [f"{d * bx}{s.center(g)}{d * bx}" for s in secs]

    return "\n".join(tb + body + tb[::-1])
```