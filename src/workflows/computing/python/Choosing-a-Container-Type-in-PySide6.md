# Choosing a Container Type in PySide6

Consider the following cases to help you decide on which one to use:

## When to Use Each Container

| Container        | Best For                                                         |
| ---------------- | ---------------------------------------------------------------- |
| `QWidget`        | Invisible grouping, custom painted widgets, any "div" equivalent |
| `QFrame`         | Cards, panels, sections with borders, visual separation          |
| `QGroupBox`      | Settings panels, form sections, labeled control groups           |
| `QScrollArea`    | Long lists, log viewers, content that overflows                  |
| `QTabWidget`     | Multi-view dashboards, settings categories, mode switching       |
| `QStackedWidget` | Wizards, custom navigation, view switching without visible tabs  |
| `QToolBox`       | Collapsible sections, toolbars, accordion menus                  |
| `QSplitter`      | IDE layouts, resizable panels, adjustable panes                  |
| `QMainWindow`    | Top-level app window with menus/toolbars/statusbar/docks         |


## Real Examples

| UI Element                            | Use                                             |
| ------------------------------------- | ----------------------------------------------- |
| Ribbon/toolbar                        | `QWidget` with `QHBoxLayout`                    |
| Dashboard grid                        | `QGridLayout` inside `QWidget`                  |
| Card component                        | `QFrame`                                        |
| Sidebar nav                           | `QWidget` or `QFrame`                           |
| Settings page                         | `QGroupBox` for each section                    |
| Log output                            | `QScrollArea` with `QLabel` or `QPlainTextEdit` |
| Multi-mode view (ADS-B / AIS / Audio) | `QTabWidget` or `QStackedWidget`                |
| Collapsible tool panels               | `QToolBox`                                      |
| Resizable sidebar + content           | `QSplitter`                                     |
| Main app shell                        | `QMainWindow`                                   |
