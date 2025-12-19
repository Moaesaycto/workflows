# Introduction to QPainter 

QPainter in PySide6 allows you to paint shapes, lines, etc. The same type of stuff that you can do in Inkscape (but much simpler).

## Basic Setup

QPainter acts as a widget but with the ability to add shapes. For this example, we will create a basic widget that handles painting.

```py
# These will be in the items we import over this workflow
from PySide6.QtWidgets import QWidget
from PySide6.QtGui import QPainter, QPen, QBrush, QColor, QFont
from PySide6.QtCore import Qt, QPoint, QPointF, QRect, QRectF

class PaintedWidget(QWidget):
    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.RenderHint.Antialiasing)

        # You will draw things here

        painter.end() # Optional
```

There are two tools that we will be using:
* `Pen` refers to outline/stroke elements;
* `Brush` refers to the fill of elements.

It's not very intuitive, but you get used to it.

### Pen

Note: You do not need to specify everything. The defaults are mostly alright.

```py
pen = QPen(QColor("#4ade80"))     # Colour
pen.setWidth(2)                     # Thickness
pen.setStyle(Qt.PenStyle.DashLine)  # Solid, dash, dot, etc.
pen.setCapStyle(Qt.PenCapStyle.RoundCap)
pen.setJoinStyle(Qt.PenJoinStyle.RoundJoin)
painter.setPen(pen)
```

There are several types of pen styles:

```py
Qt.PenStyle.NoPen           # No outline
Qt.PenStyle.SolidLine       # ──────────
Qt.PenStyle.DashLine        # ── ── ── ─
Qt.PenStyle.DotLine         # ··········
Qt.PenStyle.DashDotLine     # ─·─·─·─·─·
Qt.PenStyle.DashDotDotLine  # ─··─··─··─

# Cap style (line endings)
Qt.PenCapStyle.FlatCap      # Ends exactly at point
Qt.PenCapStyle.SquareCap    # Extends past point by half width
Qt.PenCapStyle.RoundCap     # Rounded ends

# Join style (where lines meet)
Qt.PenJoinStyle.MiterJoin   # Sharp corners
Qt.PenJoinStyle.BevelJoin   # Flattened corners
Qt.PenJoinStyle.RoundJoin   # Rounded corners
```

### Brush

```py
brush = QBrush(QColor("#1a1a1a"))        # Colour
brush.setStyle(Qt.BrushStyle.SolidPattern) # Styles
painter.setBrush(brush)
```

There are several types of brush styles:

```py
Qt.BrushStyle.NoBrush          # No fill (transparent)
Qt.BrushStyle.SolidPattern     # Solid color
Qt.BrushStyle.Dense1Pattern    # Dense dots
Qt.BrushStyle.HorPattern       # Horizontal lines ═══
Qt.BrushStyle.VerPattern       # Vertical lines |||
Qt.BrushStyle.CrossPattern     # Grid ┼┼┼
Qt.BrushStyle.DiagCrossPattern # Diagonal grid XXX
```

## Render Hints (Quality)

There are various enums you can use for rendering options:

```py
painter.setRenderHint(QPainter.RenderHint.Antialiasing)              # Smooth edges
painter.setRenderHint(QPainter.RenderHint.TextAntialiasing)          # Smooth text
painter.setRenderHint(QPainter.RenderHint.SmoothPixmapTransform)     # Smooth image scaling
painter.setRenderHint(QPainter.RenderHint.LosslessImageRendering)    # Preserve image quality
painter.setRenderHint(QPainter.RenderHint.NonCosmeticBrushPatterns)  # Scale brush patterns
```

## Drawing Primitives

These are the actual shapes you can draw with this.

### Points

```py
# Single point
painter.drawPoint(x, y)
painter.drawPoint(QPoint(100, 100))

# Multiple points
points = [QPoint(10, 10), QPoint(20, 20), QPoint(30, 15)]
painter.drawPoints(points)
```

### Lines and Polylines

```py
# Single line
painter.drawLine(x1, y1, x2, y2)
painter.drawLine(QPoint(0, 0), QPoint(100, 100))

# Multiple connected lines (polyline)
points = [QPoint(0, 0), QPoint(50, 100), QPoint(100, 0)]
painter.drawPolyline(points)
```

### Rectangles

```py
# Basic rectangle
painter.drawRect(x, y, width, height)
painter.drawRect(QRect(10, 10, 100, 50))

# Rounded rectangle
painter.drawRoundedRect(x, y, w, h, xRadius, yRadius)
painter.drawRoundedRect(10, 10, 100, 50, 8, 8)

# Filled rectangle (no outline)
painter.fillRect(QRect(0, 0, 100, 100), QColor("#1a1a1a"))
```

### Circles and Ellipses

```py
# Ellipse (bounding rect)
painter.drawEllipse(x, y, width, height)

# Circle (center point + radius)
painter.drawEllipse(centerPoint, rx, ry)
painter.drawEllipse(QPoint(200, 200), 50, 50)  # Circle with radius 50

# Using QPointF for float precision
painter.drawEllipse(QPointF(200.5, 200.5), 50.0, 50.0)
```

### Arcs and Sectors (Pies)

```py
# Angles are in 1/16th of a degree
# 0° = 3 o'clock, counter-clockwise

# Arc (partial ellipse outline)
startAngle = 0 * 16        # Start at 3 o'clock
spanAngle = 90 * 16        # Sweep 90 degrees
painter.drawArc(x, y, w, h, startAngle, spanAngle)

# Pie (filled wedge)
painter.drawPie(x, y, w, h, startAngle, spanAngle)

# Chord (arc with straight line closing it)
painter.drawChord(x, y, w, h, startAngle, spanAngle)
```

Note that polygons have multiple fill methods:

```py
from PySide6.QtGui import QPainterPath

path = QPainterPath()
path.setFillRule(Qt.FillRule.OddEvenFill)  # Alternating fill (default)
path.setFillRule(Qt.FillRule.WindingFill)  # Fill everything inside
```

### Polygons

```py
# Filled polygon
points = [QPoint(50, 0), QPoint(100, 100), QPoint(0, 100)]
painter.drawPolygon(points)

# Outline only
painter.setBrush(Qt.BrushStyle.NoBrush)
painter.drawPolygon(points)
```

### Text

```py
# Basic text
painter.drawText(x, y, "Hello")

# Text in rectangle (with alignment)
rect = QRect(10, 10, 200, 50)
painter.drawText(rect, Qt.AlignmentFlag.AlignCenter, "Centered Text")

# Set font first
font = QFont("Monospace", 12)
font.setBold(True)
painter.setFont(font)
painter.drawText(100, 100, "Bold Mono")
```

Note that text comes with alignment flags:

```py
Qt.AlignmentFlag.AlignLeft
Qt.AlignmentFlag.AlignRight
Qt.AlignmentFlag.AlignHCenter
Qt.AlignmentFlag.AlignTop
Qt.AlignmentFlag.AlignBottom
Qt.AlignmentFlag.AlignVCenter
Qt.AlignmentFlag.AlignCenter  # HCenter + VCenter

# These can be combined with bitwise operators
alignment = Qt.AlignmentFlag.AlignRight | Qt.AlignmentFlag.AlignTop
painter.drawText(rect, alignment, "Top Right")
```

There are a few styling enums that come with text/fonts as well:

```py
font = QFont("Monospace", 12)
font.setWeight(QFont.Weight.Bold)        # Thin, Light, Normal, Medium, Bold, Black
font.setStyle(QFont.Style.StyleItalic)   # StyleNormal, StyleItalic, StyleOblique
font.setCapitalization(QFont.Capitalization.AllUppercase)
font.setHintingPreference(QFont.HintingPreference.PreferFullHinting)
```

## Colours, Gradients and Transparency

You can define colours using the `QColor` class, which works with hex codes, RGB values and RGBA (where the alpha channel defines opacity between 0 and 255).

```py
# Solid color
color = QColor("#4ade80")
color = QColor(74, 222, 128)       # RGB
color = QColor(74, 222, 128, 128)  # RGBA (128 = 50% transparent)

# Set alpha separately
color = QColor("#4ade80")
color.setAlpha(128)  # 0-255

# Predefined colors
QColor("red")
QColor("transparent")
Qt.GlobalColor.white
Qt.GlobalColor.black
```

You can do more complicated fills, such as gradients, using the following:

```py
from PySide6.QtGui import QLinearGradient, QRadialGradient

# Linear gradient
gradient = QLinearGradient(x1, y1, x2, y2)
gradient.setColorAt(0, QColor("#000000"))
gradient.setColorAt(1, QColor("#4ade80"))
painter.setBrush(QBrush(gradient))
painter.drawRect(0, 0, 200, 200)

# Radial gradient (for radar sweep glow, etc.)
gradient = QRadialGradient(centerX, centerY, radius)
gradient.setColorAt(0, QColor(74, 222, 128, 255))  # Solid center
gradient.setColorAt(1, QColor(74, 222, 128, 0))    # Transparent edge
painter.setBrush(QBrush(gradient))
painter.drawEllipse(QPoint(centerX, centerY), radius, radius)
```

Gradient coordinate modes are as follows:

```py
gradient.setCoordinateMode(QGradient.CoordinateMode.LogicalMode)         # Uses painter coords (default)
gradient.setCoordinateMode(QGradient.CoordinateMode.ObjectBoundingMode)  # 0-1 relative to object
```

Gradient spread modes are as follows:

```py
gradient.setSpread(QGradient.Spread.PadSpread)      # Extends last color (default)
gradient.setSpread(QGradient.Spread.RepeatSpread)   # Repeats gradient
gradient.setSpread(QGradient.Spread.ReflectSpread)  # Mirrors gradient
```

## Transformations

Transformations move the entire coordinate system. To combat this and make sure you only transform what you need, you should `save()` and `restore()` the state before and after respectively.

```py
painter.save() # Save state

painter.translate(100, 100) # (0, 0) is now at (100, 100)
painter.rotate(45) # Degrees clockwise
painter.scale(2.0, 2.0) # 2x size

painter.restore() # Undo translation
```

Note that these `save` and `restore` actions stack.

For more abstract applications of the (mostly isometric) transformations, consider the following examples:

### Rotation Around a Point

```py
def rotate_around_point(painter, px, py, angle):
    """Set up rotation around point (px, py)"""
    painter.translate(px, py)
    painter.rotate(angle)
    painter.translate(-px, -py)
```

### Reflection Over a Line
Suppose you are trying to reflect over \\(y = mx + b\\), you can do it by:

```py
def reflect_over_line(painter, m, b):
    angle = math.degrees(math.atan(m))
    painter.translate(0, b)
    painter.rotate(-angle)
    painter.scale(1, -1)
    painter.rotate(angle)
    painter.translate(0, -b)
```

For easier applications, you can reflect over a line simply by doing the following:

```py
def reflect_over_line(painter, angle):
    painter.rotate(angle)
    painter.scale(1, -1)
    painter.rotate(-angle)
```

You can also do this for vertical or horizontal:

```py
def reflect_vertical(painter, axis_y):
    painter.translate(0, axis_y)
    painter.scale(1, -1)  # Flip Y, use (-1, 1) for X
    painter.translate(0, -axis_y)
```

### Translation

This is simple. You do not need anything special for this.

```py
painter.save()
painter.translate(dx, dy)
painter.drawRect(0, 0, 50, 50)  # Appears at (dx, dy)
painter.restore()
```

### Scaling Around a Point

```py
def scale_around_point(painter, px, py, sx, sy):
    painter.translate(px, py)
    painter.scale(sx, sy)
    painter.translate(-px, -py)
```

## Clipping

Clipping is essentially defining the region on which you can visibly see the information. For example:

```py
# Only draw inside this region
painter.setClipRect(QRect(50, 50, 200, 200))

# Circular clip (for radar scope)
from PySide6.QtGui import QPainterPath
path = QPainterPath()
path.addEllipse(QPointF(200, 200), 150, 150)
painter.setClipPath(path)
```

For multiple clips, you have several operations to choose from for overlapping clips:

```py
# How clip regions combine
painter.setClipRect(rect1, Qt.ClipOperation.ReplaceClip)    # Replace existing clip
painter.setClipRect(rect2, Qt.ClipOperation.IntersectClip)  # AND with existing clip
```

## Composition Modes

You can change composition modes for the painter object:

```py
# How new pixels combine with existing pixels
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_SourceOver)   # Default (alpha blend)
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Plus)         # Additive (glow effect)
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Multiply)     # Darken
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Screen)       # Lighten
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Clear)        # Erase
```

## Adding Images

```py
from PySide6.QtGui import QPixmap, QImage

# Draw image
pixmap = QPixmap("icon.png")
painter.drawPixmap(x, y, pixmap)
painter.drawPixmap(QRect(0, 0, 100, 100), pixmap)  # Scaled to rect

# Draw portion of image
source = QRect(0, 0, 50, 50)       # Part of image to draw
target = QRect(100, 100, 100, 100) # Where to draw it
painter.drawPixmap(target, pixmap, source)
```

There are a few image rendering parameters worth considering:

```py
# When drawing pixmaps/images
painter.setRenderHint(QPainter.RenderHint.SmoothPixmapTransform, True)   # Bilinear filtering
painter.setRenderHint(QPainter.RenderHint.SmoothPixmapTransform, False)  # Nearest neighbor (pixelated)
```