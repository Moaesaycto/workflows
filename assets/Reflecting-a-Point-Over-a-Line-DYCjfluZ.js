const n=`# Reflecing a Point Over a Line\r
\r
Given a point \`p\`, we reflect over the line through \`l1\` and \`l2\` using the following code\r
\r
## Mathematical Explanation of Reflection Across a Line\r
\r
Given:\r
- A **point** \\\\( P(x, y) \\\\)\r
- A **line** passing through two points \\\\( L_1(x_1, y_1) \\\\) and \\\\( L_2(x_2, y_2) \\\\)\r
\r
The direction vector of the line is:\r
\\\\[\r
\\\\mathbf{d} = (dx, dy) = (x_2 - x_1, y_2 - y_1)\r
\\\\]\r
\r
The projection of \\\\( P \\\\) onto the line is determined by the **dot product**:\r
\\\\[\r
t = \\\\frac{(x - x_1)dx + (y - y_1)dy}{dx^2 + dy^2}\r
\\\\]\r
This scalar \\\\( t \\\\) determines where \\\\( P \\\\) projects along the line. Using \\\\( t \\\\), the projected point \\\\( Q \\\\) on the line is:\r
\\\\[\r
Q_x = x_1 + t \\\\cdot dx\r
\\\\]\r
\\\\[\r
Q_y = y_1 + t \\\\cdot dy\r
\\\\]\r
This gives the closest point on the line to \\\\( P \\\\). The reflection formula is:\r
\\\\[\r
P' = (2Q_x - x, 2Q_y - y)\r
\\\\]\r
This ensures that \\\\( P' \\\\) is equidistant from \\\\( Q \\\\) but on the opposite side.\r
\r
---\r
\r
## Examples in Code\r
\r
### **JavaScript**\r
\`\`\`javascript\r
const reflectAcrossLine = (p, l1, l2) => {\r
    const dx = l2.x - l1.x, dy = l2.y - l1.y;\r
    const dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy);\r
    return new Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y);\r
};\r
\`\`\`\r
### **Python**\r
\`\`\`python\r
def reflect_across_line(p, l1, l2):\r
    dx, dy = l2.x - l1.x, l2.y - l1.y\r
    dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy)\r
    return Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y)\r
\`\`\`\r
\r
### **C++**\r
\`\`\`cpp\r
Point reflectAcrossLine(const Point& p, const Point& l1, const Point& l2) {\r
    double dx = l2.x - l1.x, dy = l2.y - l1.y;\r
    double dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy);\r
    return Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y);\r
}\r
\`\`\`\r
\r
### **Java**\r
\`\`\`java\r
class Reflection {\r
    public static Point reflectAcrossLine(Point p, Point l1, Point l2) {\r
        double dx = l2.x - l1.x, dy = l2.y - l1.y;\r
        double dot = ((p.x - l1.x) * dx + (p.y - l1.y) * dy) / (dx * dx + dy * dy);\r
        return new Point(2 * (l1.x + dot * dx) - p.x, 2 * (l1.y + dot * dy) - p.y);\r
    }\r
}\r
\`\`\``;export{n as default};
