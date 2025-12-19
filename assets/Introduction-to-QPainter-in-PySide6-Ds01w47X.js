const n=`# Introduction to QPainter \r
\r
QPainter in PySide6 allows you to paint shapes, lines, etc. The same type of stuff that you can do in Inkscape (but much simpler).\r
\r
## Basic Setup\r
\r
QPainter acts as a widget but with the ability to add shapes. For this example, we will create a basic widget that handles painting.\r
\r
\`\`\`py\r
# These will be in the items we import over this workflow\r
from PySide6.QtWidgets import QWidget\r
from PySide6.QtGui import QPainter, QPen, QBrush, QColor, QFont\r
from PySide6.QtCore import Qt, QPoint, QPointF, QRect, QRectF\r
\r
class PaintedWidget(QWidget):\r
    def paintEvent(self, event):\r
        painter = QPainter(self)\r
        painter.setRenderHint(QPainter.RenderHint.Antialiasing)\r
\r
        # You will draw things here\r
\r
        painter.end() # Optional\r
\`\`\`\r
\r
There are two tools that we will be using:\r
* \`Pen\` refers to outline/stroke elements;\r
* \`Brush\` refers to the fill of elements.\r
\r
It's not very intuitive, but you get used to it.\r
\r
### Pen\r
\r
Note: You do not need to specify everything. The defaults are mostly alright.\r
\r
\`\`\`py\r
pen = QPen(QColor("#4ade80"))     # Colour\r
pen.setWidth(2)                     # Thickness\r
pen.setStyle(Qt.PenStyle.DashLine)  # Solid, dash, dot, etc.\r
pen.setCapStyle(Qt.PenCapStyle.RoundCap)\r
pen.setJoinStyle(Qt.PenJoinStyle.RoundJoin)\r
painter.setPen(pen)\r
\`\`\`\r
\r
There are several types of pen styles:\r
\r
\`\`\`py\r
Qt.PenStyle.NoPen           # No outline\r
Qt.PenStyle.SolidLine       # ──────────\r
Qt.PenStyle.DashLine        # ── ── ── ─\r
Qt.PenStyle.DotLine         # ··········\r
Qt.PenStyle.DashDotLine     # ─·─·─·─·─·\r
Qt.PenStyle.DashDotDotLine  # ─··─··─··─\r
\r
# Cap style (line endings)\r
Qt.PenCapStyle.FlatCap      # Ends exactly at point\r
Qt.PenCapStyle.SquareCap    # Extends past point by half width\r
Qt.PenCapStyle.RoundCap     # Rounded ends\r
\r
# Join style (where lines meet)\r
Qt.PenJoinStyle.MiterJoin   # Sharp corners\r
Qt.PenJoinStyle.BevelJoin   # Flattened corners\r
Qt.PenJoinStyle.RoundJoin   # Rounded corners\r
\`\`\`\r
\r
### Brush\r
\r
\`\`\`py\r
brush = QBrush(QColor("#1a1a1a"))        # Colour\r
brush.setStyle(Qt.BrushStyle.SolidPattern) # Styles\r
painter.setBrush(brush)\r
\`\`\`\r
\r
There are several types of brush styles:\r
\r
\`\`\`py\r
Qt.BrushStyle.NoBrush          # No fill (transparent)\r
Qt.BrushStyle.SolidPattern     # Solid color\r
Qt.BrushStyle.Dense1Pattern    # Dense dots\r
Qt.BrushStyle.HorPattern       # Horizontal lines ═══\r
Qt.BrushStyle.VerPattern       # Vertical lines |||\r
Qt.BrushStyle.CrossPattern     # Grid ┼┼┼\r
Qt.BrushStyle.DiagCrossPattern # Diagonal grid XXX\r
\`\`\`\r
\r
## Render Hints (Quality)\r
\r
There are various enums you can use for rendering options:\r
\r
\`\`\`py\r
painter.setRenderHint(QPainter.RenderHint.Antialiasing)              # Smooth edges\r
painter.setRenderHint(QPainter.RenderHint.TextAntialiasing)          # Smooth text\r
painter.setRenderHint(QPainter.RenderHint.SmoothPixmapTransform)     # Smooth image scaling\r
painter.setRenderHint(QPainter.RenderHint.LosslessImageRendering)    # Preserve image quality\r
painter.setRenderHint(QPainter.RenderHint.NonCosmeticBrushPatterns)  # Scale brush patterns\r
\`\`\`\r
\r
## Drawing Primitives\r
\r
These are the actual shapes you can draw with this.\r
\r
### Points\r
\r
\`\`\`py\r
# Single point\r
painter.drawPoint(x, y)\r
painter.drawPoint(QPoint(100, 100))\r
\r
# Multiple points\r
points = [QPoint(10, 10), QPoint(20, 20), QPoint(30, 15)]\r
painter.drawPoints(points)\r
\`\`\`\r
\r
### Lines and Polylines\r
\r
\`\`\`py\r
# Single line\r
painter.drawLine(x1, y1, x2, y2)\r
painter.drawLine(QPoint(0, 0), QPoint(100, 100))\r
\r
# Multiple connected lines (polyline)\r
points = [QPoint(0, 0), QPoint(50, 100), QPoint(100, 0)]\r
painter.drawPolyline(points)\r
\`\`\`\r
\r
### Rectangles\r
\r
\`\`\`py\r
# Basic rectangle\r
painter.drawRect(x, y, width, height)\r
painter.drawRect(QRect(10, 10, 100, 50))\r
\r
# Rounded rectangle\r
painter.drawRoundedRect(x, y, w, h, xRadius, yRadius)\r
painter.drawRoundedRect(10, 10, 100, 50, 8, 8)\r
\r
# Filled rectangle (no outline)\r
painter.fillRect(QRect(0, 0, 100, 100), QColor("#1a1a1a"))\r
\`\`\`\r
\r
### Circles and Ellipses\r
\r
\`\`\`py\r
# Ellipse (bounding rect)\r
painter.drawEllipse(x, y, width, height)\r
\r
# Circle (center point + radius)\r
painter.drawEllipse(centerPoint, rx, ry)\r
painter.drawEllipse(QPoint(200, 200), 50, 50)  # Circle with radius 50\r
\r
# Using QPointF for float precision\r
painter.drawEllipse(QPointF(200.5, 200.5), 50.0, 50.0)\r
\`\`\`\r
\r
### Arcs and Sectors (Pies)\r
\r
\`\`\`py\r
# Angles are in 1/16th of a degree\r
# 0° = 3 o'clock, counter-clockwise\r
\r
# Arc (partial ellipse outline)\r
startAngle = 0 * 16        # Start at 3 o'clock\r
spanAngle = 90 * 16        # Sweep 90 degrees\r
painter.drawArc(x, y, w, h, startAngle, spanAngle)\r
\r
# Pie (filled wedge)\r
painter.drawPie(x, y, w, h, startAngle, spanAngle)\r
\r
# Chord (arc with straight line closing it)\r
painter.drawChord(x, y, w, h, startAngle, spanAngle)\r
\`\`\`\r
\r
Note that polygons have multiple fill methods:\r
\r
\`\`\`py\r
from PySide6.QtGui import QPainterPath\r
\r
path = QPainterPath()\r
path.setFillRule(Qt.FillRule.OddEvenFill)  # Alternating fill (default)\r
path.setFillRule(Qt.FillRule.WindingFill)  # Fill everything inside\r
\`\`\`\r
\r
### Polygons\r
\r
\`\`\`py\r
# Filled polygon\r
points = [QPoint(50, 0), QPoint(100, 100), QPoint(0, 100)]\r
painter.drawPolygon(points)\r
\r
# Outline only\r
painter.setBrush(Qt.BrushStyle.NoBrush)\r
painter.drawPolygon(points)\r
\`\`\`\r
\r
### Text\r
\r
\`\`\`py\r
# Basic text\r
painter.drawText(x, y, "Hello")\r
\r
# Text in rectangle (with alignment)\r
rect = QRect(10, 10, 200, 50)\r
painter.drawText(rect, Qt.AlignmentFlag.AlignCenter, "Centered Text")\r
\r
# Set font first\r
font = QFont("Monospace", 12)\r
font.setBold(True)\r
painter.setFont(font)\r
painter.drawText(100, 100, "Bold Mono")\r
\`\`\`\r
\r
Note that text comes with alignment flags:\r
\r
\`\`\`py\r
Qt.AlignmentFlag.AlignLeft\r
Qt.AlignmentFlag.AlignRight\r
Qt.AlignmentFlag.AlignHCenter\r
Qt.AlignmentFlag.AlignTop\r
Qt.AlignmentFlag.AlignBottom\r
Qt.AlignmentFlag.AlignVCenter\r
Qt.AlignmentFlag.AlignCenter  # HCenter + VCenter\r
\r
# These can be combined with bitwise operators\r
alignment = Qt.AlignmentFlag.AlignRight | Qt.AlignmentFlag.AlignTop\r
painter.drawText(rect, alignment, "Top Right")\r
\`\`\`\r
\r
There are a few styling enums that come with text/fonts as well:\r
\r
\`\`\`py\r
font = QFont("Monospace", 12)\r
font.setWeight(QFont.Weight.Bold)        # Thin, Light, Normal, Medium, Bold, Black\r
font.setStyle(QFont.Style.StyleItalic)   # StyleNormal, StyleItalic, StyleOblique\r
font.setCapitalization(QFont.Capitalization.AllUppercase)\r
font.setHintingPreference(QFont.HintingPreference.PreferFullHinting)\r
\`\`\`\r
\r
## Colours, Gradients and Transparency\r
\r
You can define colours using the \`QColor\` class, which works with hex codes, RGB values and RGBA (where the alpha channel defines opacity between 0 and 255).\r
\r
\`\`\`py\r
# Solid color\r
color = QColor("#4ade80")\r
color = QColor(74, 222, 128)       # RGB\r
color = QColor(74, 222, 128, 128)  # RGBA (128 = 50% transparent)\r
\r
# Set alpha separately\r
color = QColor("#4ade80")\r
color.setAlpha(128)  # 0-255\r
\r
# Predefined colors\r
QColor("red")\r
QColor("transparent")\r
Qt.GlobalColor.white\r
Qt.GlobalColor.black\r
\`\`\`\r
\r
You can do more complicated fills, such as gradients, using the following:\r
\r
\`\`\`py\r
from PySide6.QtGui import QLinearGradient, QRadialGradient\r
\r
# Linear gradient\r
gradient = QLinearGradient(x1, y1, x2, y2)\r
gradient.setColorAt(0, QColor("#000000"))\r
gradient.setColorAt(1, QColor("#4ade80"))\r
painter.setBrush(QBrush(gradient))\r
painter.drawRect(0, 0, 200, 200)\r
\r
# Radial gradient (for radar sweep glow, etc.)\r
gradient = QRadialGradient(centerX, centerY, radius)\r
gradient.setColorAt(0, QColor(74, 222, 128, 255))  # Solid center\r
gradient.setColorAt(1, QColor(74, 222, 128, 0))    # Transparent edge\r
painter.setBrush(QBrush(gradient))\r
painter.drawEllipse(QPoint(centerX, centerY), radius, radius)\r
\`\`\`\r
\r
Gradient coordinate modes are as follows:\r
\r
\`\`\`py\r
gradient.setCoordinateMode(QGradient.CoordinateMode.LogicalMode)         # Uses painter coords (default)\r
gradient.setCoordinateMode(QGradient.CoordinateMode.ObjectBoundingMode)  # 0-1 relative to object\r
\`\`\`\r
\r
Gradient spread modes are as follows:\r
\r
\`\`\`py\r
gradient.setSpread(QGradient.Spread.PadSpread)      # Extends last color (default)\r
gradient.setSpread(QGradient.Spread.RepeatSpread)   # Repeats gradient\r
gradient.setSpread(QGradient.Spread.ReflectSpread)  # Mirrors gradient\r
\`\`\`\r
\r
## Transformations\r
\r
Transformations move the entire coordinate system. To combat this and make sure you only transform what you need, you should \`save()\` and \`restore()\` the state before and after respectively.\r
\r
\`\`\`py\r
painter.save() # Save state\r
\r
painter.translate(100, 100) # (0, 0) is now at (100, 100)\r
painter.rotate(45) # Degrees clockwise\r
painter.scale(2.0, 2.0) # 2x size\r
\r
painter.restore() # Undo translation\r
\`\`\`\r
\r
Note that these \`save\` and \`restore\` actions stack.\r
\r
For more abstract applications of the (mostly isometric) transformations, consider the following examples:\r
\r
### Rotation Around a Point\r
\r
\`\`\`py\r
def rotate_around_point(painter, px, py, angle):\r
    """Set up rotation around point (px, py)"""\r
    painter.translate(px, py)\r
    painter.rotate(angle)\r
    painter.translate(-px, -py)\r
\`\`\`\r
\r
### Reflection Over a Line\r
Suppose you are trying to reflect over \\\\(y = mx + b\\\\), you can do it by:\r
\r
\`\`\`py\r
def reflect_over_line(painter, m, b):\r
    angle = math.degrees(math.atan(m))\r
    painter.translate(0, b)\r
    painter.rotate(-angle)\r
    painter.scale(1, -1)\r
    painter.rotate(angle)\r
    painter.translate(0, -b)\r
\`\`\`\r
\r
For easier applications, you can reflect over a line simply by doing the following:\r
\r
\`\`\`py\r
def reflect_over_line(painter, angle):\r
    painter.rotate(angle)\r
    painter.scale(1, -1)\r
    painter.rotate(-angle)\r
\`\`\`\r
\r
You can also do this for vertical or horizontal:\r
\r
\`\`\`py\r
def reflect_vertical(painter, axis_y):\r
    painter.translate(0, axis_y)\r
    painter.scale(1, -1)  # Flip Y, use (-1, 1) for X\r
    painter.translate(0, -axis_y)\r
\`\`\`\r
\r
### Translation\r
\r
This is simple. You do not need anything special for this.\r
\r
\`\`\`py\r
painter.save()\r
painter.translate(dx, dy)\r
painter.drawRect(0, 0, 50, 50)  # Appears at (dx, dy)\r
painter.restore()\r
\`\`\`\r
\r
### Scaling Around a Point\r
\r
\`\`\`py\r
def scale_around_point(painter, px, py, sx, sy):\r
    painter.translate(px, py)\r
    painter.scale(sx, sy)\r
    painter.translate(-px, -py)\r
\`\`\`\r
\r
## Clipping\r
\r
Clipping is essentially defining the region on which you can visibly see the information. For example:\r
\r
\`\`\`py\r
# Only draw inside this region\r
painter.setClipRect(QRect(50, 50, 200, 200))\r
\r
# Circular clip (for radar scope)\r
from PySide6.QtGui import QPainterPath\r
path = QPainterPath()\r
path.addEllipse(QPointF(200, 200), 150, 150)\r
painter.setClipPath(path)\r
\`\`\`\r
\r
For multiple clips, you have several operations to choose from for overlapping clips:\r
\r
\`\`\`py\r
# How clip regions combine\r
painter.setClipRect(rect1, Qt.ClipOperation.ReplaceClip)    # Replace existing clip\r
painter.setClipRect(rect2, Qt.ClipOperation.IntersectClip)  # AND with existing clip\r
\`\`\`\r
\r
## Composition Modes\r
\r
You can change composition modes for the painter object:\r
\r
\`\`\`py\r
# How new pixels combine with existing pixels\r
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_SourceOver)   # Default (alpha blend)\r
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Plus)         # Additive (glow effect)\r
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Multiply)     # Darken\r
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Screen)       # Lighten\r
painter.setCompositionMode(QPainter.CompositionMode.CompositionMode_Clear)        # Erase\r
\`\`\`\r
\r
## Adding Images\r
\r
\`\`\`py\r
from PySide6.QtGui import QPixmap, QImage\r
\r
# Draw image\r
pixmap = QPixmap("icon.png")\r
painter.drawPixmap(x, y, pixmap)\r
painter.drawPixmap(QRect(0, 0, 100, 100), pixmap)  # Scaled to rect\r
\r
# Draw portion of image\r
source = QRect(0, 0, 50, 50)       # Part of image to draw\r
target = QRect(100, 100, 100, 100) # Where to draw it\r
painter.drawPixmap(target, pixmap, source)\r
\`\`\`\r
\r
There are a few image rendering parameters worth considering:\r
\r
\`\`\`py\r
# When drawing pixmaps/images\r
painter.setRenderHint(QPainter.RenderHint.SmoothPixmapTransform, True)   # Bilinear filtering\r
painter.setRenderHint(QPainter.RenderHint.SmoothPixmapTransform, False)  # Nearest neighbor (pixelated)\r
\`\`\``;export{n as default};
