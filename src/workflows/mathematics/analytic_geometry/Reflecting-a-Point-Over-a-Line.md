# Reflecing a Point Over a Line

Given a point `p`, we reflect over the line through `l1` and `l2` using the following code

## Mathematical Explanation of Reflection Across a Line

Given:
- A **point** \\( P(x, y) \\)
- A **line** passing through two points \\( L_1(x_1, y_1) \\) and \\( L_2(x_2, y_2) \\)

The direction vector of the line is:
\\[
\\mathbf{d} = (dx, dy) = (x_2 - x_1, y_2 - y_1)
\\]

The projection of \\( P \\) onto the line is determined by the **dot product**:
\\[
t = \\frac{(x - x_1)dx + (y - y_1)dy}{dx^2 + dy^2}
\\]
This scalar \\( t \\) determines where \\( P \\) projects along the line. Using \\( t \\), the projected point \\( Q \\) on the line is:
\\[
Q_x = x_1 + t \\cdot dx
\\]
\\[
Q_y = y_1 + t \\cdot dy
\\]
This gives the closest point on the line to \\( P \\). The reflection formula is:
\\[
P' = (2Q_x - x, 2Q_y - y)
\\]
This ensures that \\( P' \\) is equidistant from \\( Q \\) but on the opposite side.

---

## Examples in Code

### **JavaScript**
```javascript
const reflectAcrossLine = (p, l1, l2) => {
    const dx = l2.x - l1.x, dy = l2.y - l1.y;
    const dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy);
    return new Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y);
};
```
### **Python**
```python
def reflect_across_line(p, l1, l2):
    dx, dy = l2.x - l1.x, l2.y - l1.y
    dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy)
    return Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y)
```

### **C++**
```cpp
Point reflectAcrossLine(const Point& p, const Point& l1, const Point& l2) {
    double dx = l2.x - l1.x, dy = l2.y - l1.y;
    double dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy);
    return Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y);
}
```

### **Java**
```java
class Reflection {
    public static Point reflectAcrossLine(Point p, Point l1, Point l2) {
        double dx = l2.x - l1.x, dy = l2.y - l1.y;
        double dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy);
        return new Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y);
    }
}
```