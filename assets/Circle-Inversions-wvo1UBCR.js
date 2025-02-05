const r=`# Circle Inversions\r
\r
Circle inversion is a transformation that maps a point \\\\( P \\\\) to a new point \\\\( P' \\\\) such that:\r
\r
\\\\[\r
    OP \\\\cdot OP' = R^2\r
\\\\]\r
\r
where \\\\( O \\\\) is the center of the inversion circle, \\\\( R \\\\) is the radius, and \\\\( P, P' \\\\) are the original and transformed points, respectively.\r
\r
The inversion formula for a point \\\\( P = (x, y) \\\\) with respect to a circle centered at \\\\( C = (c_x, c_y) \\\\) with radius \\\\( R \\\\) is given by:\r
\r
\\\\[\r
    x' = c_x + \\\\frac{R^2 (x - c_x)}{(x - c_x)^2 + (y - c_y)^2}\r
\\\\]\r
\\\\[\r
    y' = c_y + \\\\frac{R^2 (y - c_y)}{(x - c_x)^2 + (y - c_y)^2}\r
\\\\]\r
\r
## Implementations\r
\r
### Python\r
\`\`\`python\r
class Point:\r
    def __init__(self, x, y):\r
        self.x = x\r
        self.y = y\r
\r
def circle_invert(p, c, r):\r
    dx, dy = p.x - c.x, p.y - c.y\r
    factor = (r * r) / (dx * dx + dy * dy)\r
    return Point(c.x + factor * dx, c.y + factor * dy)\r
\`\`\`\r
\r
### C++\r
\`\`\`cpp\r
#include <cmath>\r
\r
struct Point {\r
    double x, y;\r
};\r
\r
Point circleInvert(Point p, Point c, double r) {\r
    double dx = p.x - c.x, dy = p.y - c.y;\r
    double factor = (r * r) / (dx * dx + dy * dy);\r
    return {c.x + factor * dx, c.y + factor * dy};\r
}\r
\`\`\`\r
\r
### JavaScript / TypeScript\r
\`\`\`javascript\r
class Point {\r
    constructor(x, y) {\r
        this.x = x;\r
        this.y = y;\r
    }\r
}\r
\r
const circleInvert = (p, c, r) => {\r
    const dx = p.x - c.x, dy = p.y - c.y;\r
    const factor = (r * r) / (dx * dx + dy * dy);\r
    return new Point(c.x + factor * dx, c.y + factor * dy);\r
};\r
`;export{r as default};
