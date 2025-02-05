# Circle Inversions

Circle inversion is a transformation that maps a point \\( P \\) to a new point \\( P' \\) such that:

\\[
    OP \\cdot OP' = R^2
\\]

where \\( O \\) is the center of the inversion circle, \\( R \\) is the radius, and \\( P, P' \\) are the original and transformed points, respectively.

The inversion formula for a point \\( P = (x, y) \\) with respect to a circle centered at \\( C = (c_x, c_y) \\) with radius \\( R \\) is given by:

\\[
    x' = c_x + \\frac{R^2 (x - c_x)}{(x - c_x)^2 + (y - c_y)^2}
\\]
\\[
    y' = c_y + \\frac{R^2 (y - c_y)}{(x - c_x)^2 + (y - c_y)^2}
\\]

## Implementations

### Python
```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def circle_invert(p, c, r):
    dx, dy = p.x - c.x, p.y - c.y
    factor = (r * r) / (dx * dx + dy * dy)
    return Point(c.x + factor * dx, c.y + factor * dy)
```

### C++
```cpp
#include <cmath>

struct Point {
    double x, y;
};

Point circleInvert(Point p, Point c, double r) {
    double dx = p.x - c.x, dy = p.y - c.y;
    double factor = (r * r) / (dx * dx + dy * dy);
    return {c.x + factor * dx, c.y + factor * dy};
}
```

### JavaScript / TypeScript
```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const circleInvert = (p, c, r) => {
    const dx = p.x - c.x, dy = p.y - c.y;
    const factor = (r * r) / (dx * dx + dy * dy);
    return new Point(c.x + factor * dx, c.y + factor * dy);
};
