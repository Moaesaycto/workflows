# Introduction to QSS and Comparison to CSS

QSS is PySide6's version of CSS, which allows robust fixing for the components. These should generally be applied to `QFrame` widgets, but it can be applied to all. You can use it with `QWidget`, but you need to set `setAttribute(Qt.WA_StyledBackground, True)`.

## Key Differences with CSS

Pretty much all of it is the same. The synax is also identical. There are, however, some differences.

| Discrepancy                  | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `background`                 | Mostly the same, but no shorthand for size/position |
| `background-size`            | Doesn't exist in QSS, use `border-image` instead    |
| `font`                       | No shorthand                                        |
| `border-radius`              | `px` only, no `%`                                   |
| `border-image`               | See below                                           |
| `margin`                     | Often ignored, use layouts                          |
| `width` and `height`         | Only for some widgets                               |
| `opacity`                    | Use `QGraphicsOpacityEffect`                        |
| `box-shadow`                 | Use `QGraphicsDropShadowEffect`                     |
| `text-shadow`                | Not supported                                       |
| `transform`                  | Use `QPainter` transforms                           |
| `transition` and `animation` | Use `QPropertyAnimation`                            |
| `display`                    | Use `widget.hide()` / `show()`                      |
| `visibility`                 | Use `widget.setVisible()`                           |
| `position`                   | Use layouts or `setGeometry()`                      |
| `z-index`                    | Use `raise_()` / `lower()`                          |
| `overflow`                   | Use `QScrollArea`                                   |
| `cursor`                     | Use `widget.setCursor()`                            |
| `outline`                    | Not supported                                       |
| `text-align`                 | Use `widget.setAlignment()`                         |
| `vertical-align`             | Use layouts                                         |
| `line-height`                | Use layouts                                         |
| `letter-spacing`             | Not supported                                       |
| `text-transform`             | Not supported, but you can just use Python          |
| `white-space`                | Use `QLabel.setWordWrap()`                          |
| `flex` and `grid`            | Use `QHBoxLayout` / `QGridLayout`                   |
| `gap`                        | Use `layout.setSpacing()`                           |

### `border-image` Attribute

```css
/* Syntax */
border-image: url(image.png) top right bottom left stretch stretch;

/* Example: 10px corners, stretch middle */
QPushButton {
    border-image: url(button.png) 10 10 10 10 stretch stretch;
    border-width: 10px;
}
```

These are the modes you can use:

| Mode      | Behavior                       |
| --------- | ------------------------------ |
| `stretch` | Stretches middle sections      |
| `repeat`  | Tiles middle sections          |
| `round`   | Tiles and scales to fit evenly |

## Selectors

A lot of the selectors are similar to CSS.

| CSS                              | QSS              | Description                                                         |
| -------------------------------- | ---------------- | ------------------------------------------------------------------- |
| `element`                        | `WidgetClass`    | This is the same as CSS, just refer to the class like `QPushButton` |
| `.class`                         | `[class="name"]` | Use `setProperty("class", "name")`                                  |
| `#id`                            | `#objectName`    | Use `setObjectName("id")`                                           |
| `parent child`                   | `Parent Child`   | Identical                                                           |
| `parent > child`                 | `Parent > Child` | Identical                                                           |
| `*`                              | `*`              | Identical                                                           |
| `:hover`                         | `:hover`         | Identical                                                           |
| `:focus`                         | `:focus`         | Identical                                                           |
| `:active`                        | `:pressed`       | Different name                                                      |
| `:disabled`                      | `:disabled`      | Identical                                                           |
| `:enabled`                       | `:enabled`       | Identical                                                           |
| `:checked`                       | `:checked`       | Identical                                                           |
| `::selection`                    | `::selection`    | Identical                                                           |
| `:first-child` and `:last-child` | -                | Not supported                                                       |
| `:nth-child()`                   | -                | Not supported                                                       |
| `::before` and `::after`         | -                | Not supported                                                       |
| `::placeholder`                  | -                | Use `setPlaceholderText()`                                          |



## Pseudo-Elements (QSS-Specific)

| Widget         | Pseudo-Elements                                                    |
| -------------- | ------------------------------------------------------------------ |
| `QCheckBox`    | `::indicator`                                                      |
| `QRadioButton` | `::indicator`                                                      |
| `QComboBox`    | `::drop-down`, `::down-arrow`                                      |
| `QSpinBox`     | `::up-button`, `::down-button`, `::up-arrow`, `::down-arrow`       |
| `QSlider`      | `::groove`, `::handle`, `::add-page`, `::sub-page`                 |
| `QScrollBar`   | `::handle`, `::add-line`, `::sub-line`, `::add-page`, `::sub-page` |
| `QProgressBar` | `::chunk`                                                          |
| `QTabBar`      | `::tab`, `::tear`, `::scroller`                                    |
| `QGroupBox`    | `::title`, `::indicator`                                           |
| `QMenu`        | `::item`, `::separator`, `::indicator`                             |
| `QTableView`   | `::item`                                                           |
| `QTreeView`    | `::item`, `::branch`                                               |
| `QHeaderView`  | `::section`                                                        |

## Applying Styles

There are several ways to actually apply the styling:

```py
# 1. Inline on single widget (highest priority)
button.setStyleSheet("background-color: red;")

# 2. On parent (cascades to children)
container.setStyleSheet("QPushButton { background-color: red; }")

# 3. On application (global)
app.setStyleSheet("QPushButton { background-color: red; }")

# 4. From file
with open("style.qss", "r") as f:
    app.setStyleSheet(f.read())
```

There is a small issue when you try to set the style sheet, in that setting the sheet sometimes completely overrides the style sheet. You can add styles like this:

```py
def add_style(widget, new_style):
    current = widget.styleSheet()
    widget.setStyleSheet(current + "\n" + new_style)

add_style(button, "background-color: red;")
add_style(button, "color: white;")  # Keeps background-color
```