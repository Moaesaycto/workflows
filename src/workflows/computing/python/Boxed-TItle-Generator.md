# Boxed Title String Generator

Below is sample code for generating a boxed title for printing:

```python
from textwrap import wrap

def create_title(string, width=None):
    secs = wrap(string, width) if width else string.split("\n")

    px, py = 5, 1
    bx, by = 1, 1
    d = "#"

    g = width if width else len(max(secs, key=len)) + 2 * px
    n = g + 2 * bx * len(d)

    tb = [d * n] * by + [f"{' ' * g}".join([d * bx] * 2)] * py
    body = [f"{d * bx}{s.center(g)}{d * bx}" for s in secs]

    return "\n".join(tb + body + tb[::-1])
```
`width` should be set to the maximum width for each line, which will automatically wrap words for you.

`px` represents the horizontal padding size (number of chars), `py` represents the vertical padding size, `bx` represents the horizontal thickness of the border box and `by` represents the vertical thickness of the border box.

## Example Usage:

Running the following code:

```python
print(create_title("Line 1\nLine 2\nLine 3"))
```

Will return the following:

```plaintext
##################
#                #
#     Line 1     #
#     Line 2     #
#     Line 3     #
#                #
##################
```

Using the given `width` arugment, you can restrict the width to a certain number of characters:

```python
print(create_title("Aggressive wrapping on narrow width", width=10))
```

Will return the following:

```plaintext
##################
#                #
#  Aggressive    #
#   wrapping     #
#      on        #
#    narrow      #
#     width      #
#                #
##################
```