# Replicating Flex Properties in PySide6

For this guide, we will be directly comparing the respective CSS features with their PySide6 counterpart.

## The Basics

PySide6 uses layouts to decide between a row and column

```css
.container {
    display: flex;
    flex-direction: row; /* Or column */
}
```

```py
from PySide6.QtWidgets import QHBoxLayout, QVBoxLayout

row_layout = QHBoxLayout() # flex-direction: row
col_layout = QVBoxLayout() # flex-direction: column
```


## Justify Content (Main Axis)

```css
.container {
    display: flex
    justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;
}
```

Creating these need strategic use of the `addStretch()` method, which adds an invisible, expandable space that pushes widgets around. Rather than "aligning" things, it more adds dummy fillers to handle taking up available space. We must also use `addStretch(n)`, which is considered the **stretch factor** (or weight). So if you use `.addStretch(1)` and then `.addStretch(2)`, the latter is twice the space obtained from the former. Going through each of the options individually, we can figure out how to replicate this:

### `flex-start` and `flex-end`

`flex-start` is the default, so just add the widgets. For `flex-end`, run `.addStretch()` immediately before adding the items.

```py
layout = QHBoxLayout()

# flex-start: just add them normally
layout.addWidget(widget1)
layout.addWidget(widget2)

# flex-end: stretch then add them
layout.addStretch()
layout.addWidget(widget1)
layout.addWidget(widget2)
```

### `center`

Add equal spacing on the ends.

```py
layout = QHBoxLayout()

layout.addStretch()
layout.addWidget(widget1)
layout.addWidget(widget2)
layout.addStretch()
```

### `space-between`, `space-around` and `space-evenly`

```py
# justify-content: space-between
layout.addWidget(widget1)
layout.addStretch()
layout.addWidget(widget2)
layout.addStretch()
layout.addWidget(widget3)

# justify-content: space-around (equal space around each)
layout.addStretch(1)
layout.addWidget(widget1)
layout.addStretch(2)
layout.addWidget(widget2)
layout.addStretch(2)
layout.addWidget(widget3)
layout.addStretch(1)

# justify-content: space-evenly (equal space everywhere)
layout.addStretch(1)
layout.addWidget(widget1)
layout.addStretch(1)
layout.addWidget(widget2)
layout.addStretch(1)
layout.addWidget(widget3)
layout.addStretch(1)
```

## Align Items (Cross Axis)

```css
.container {
    display: flex;
    align-items: flex-start | center | flex-end | stretch;
}
```

This one uses constants to handle this

```py
from PySide6.QtCore import Qt

layout = QHBoxLayout()

# align-items: flex-start
layout.setAlignment(Qt.AlignTop)

# align-items: center
layout.setAlignment(Qt.AlignVCenter)

# align-items: flex-end
layout.setAlignment(Qt.AlignBottom)

# align-items: stretch (default)
# Widgets naturally stretch to fill unless constrained
```

You can do it per item as well:

```py
layout = QHBoxLayout()

# Align specific widget differently
layout.addWidget(label, alignment=Qt.AlignTop)
layout.addWidget(button, alignment=Qt.AlignVCenter)
layout.addWidget(icon, alignment=Qt.AlignBottom)
```

## Flex Grow (`flex-1`, `flex-2`, ...)

Take up all available space. If multiple items have `flex-1`, split the space equally. Note that `flex-1` is the equivalent Tailwind class.

```css
.container {
    flex: 1 1 0%;
}
```

```py
layout = QHBoxLayout()

sidebar = QWidget()
content = QWidget()

# Sidebar fixed, Content takes remaining space (flex-1)
layout.addWidget(sidebar, stretch=0)  # No stretch
layout.addWidget(content, stretch=1)  # flex-1

# Both flex-1 (equal split)
layout.addWidget(sidebar, stretch=1)
layout.addWidget(content, stretch=1)

# flex-1 vs flex-2 (1:2 ratio)
layout.addWidget(sidebar, stretch=1)
layout.addWidget(content, stretch=2)
```

This table may help:

| Tailwind    | CSS              | PySide6                                       |
| ----------- | ---------------- | --------------------------------------------- |
| `flex-1`    | `flex: 1 1 0%`   | `addWidget(w, stretch=1)`                     |
| `flex-0`    | `flex: 0 0 auto` | `addWidget(w, stretch=0)`                     |
| `flex-auto` | `flex: 1 1 auto` | `addWidget(w, stretch=1)` + natural size      |
| `flex-none` | `flex: none`     | `addWidget(w, stretch=0)` + `setFixedWidth()` |

## Gap

```css
.container {
    display: flex;
    gap: 16px;
}
```

This can be done very simply:

```py
layout = QHBoxLayout()
layout.setSpacing(16)  # Gap between widgets
```