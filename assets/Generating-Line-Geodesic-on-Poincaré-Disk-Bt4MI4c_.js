const n=`# Computing and Rendering a Hyperbolic Geodesic in the Poincaré Disk\r
\r
## Code Example\r
\r
Below is the function that defines the center of of the circle that makes the geodesic.\r
\r
\`\`\`javascript\r
function getCenter(p1, p2) {\r
    // Ensure consistent ordering\r
    if (p1.x > p2.x || (nearlyEqual(p1.x, p2.x) && p1.y > p2.y)) [p1, p2] = [p2, p1];\r
\r
    let { x: Px, y: Py } = p1, { x: Qx, y: Qy } = p2;\r
    let { x: iPx, y: iPy } = pDiskInvert(p1), { x: iQx, y: iQy } = pDiskInvert(p2);\r
    let M = new Point((Px + iPx) / 2, (Py + iPy) / 2);\r
    let N = new Point((Qx + iQx) / 2, (Qy + iQy) / 2);\r
\r
    let getLine = (P, iP, M) => nearlyEqual(P.y, iP.y)\r
        ? [Infinity, M.x]\r
        : [-(P.x - iP.x) / (P.y - iP.y), M.y - ((P.x - iP.x) / (P.y - iP.y)) * M.x];\r
    let [mp, bp] = getLine(p1, { x: iPx, y: iPy }, M);\r
    let [mq, bq] = getLine(p2, { x: iQx, y: iQy }, N);\r
\r
    if (nearlyEqual(mp, mq)) return null; // Parallel or coincident lines\r
    let x = (mp === Infinity) ? bp : (mq === Infinity) ? bq : (bq - bp) / (mp - mq);\r
    let y = (mp === Infinity) ? mq * x + bq : mp * x + bp;\r
\r
    return new Point(x, y);\r
}\r
\`\`\`\r
\r
The code above uses [circle inversions](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) which are defind with the function below.\r
\r
\`\`\`javascript\r
const circleInvert = (p, c, r) => {\r
    const alpha = r * r / ((p.x - c.x) * (p.x - c.x) + (p.y - c.y) * (p.y - c.y))\r
    return new Point(alpha * (p.x - c.x) + c.x, alpha * (p.y - c.y) + c.y)\r
}\r
\`\`\`\r
\r
For the Poincaré disk inversion, it's simply an application of the circle inversion over the unit circle.\r
\r
\`\`\`javascript\r
const pDiskInvert = (p) => {\r
    return circleInvert(p, new Point(0, 0), 1);\r
}\r
\`\`\`\r
\r
Finally, we check similarity using a manually assigned machine number to account for floating point arithmetic errors.\r
\r
\`\`\`javascript\r
const EPSILON = 1e-10;\r
const nearlyEqual = (a, b, epsilon = EPSILON) => Math.abs(a - b) < epsilon;\r
\`\`\`\r
\r
Rendering the arc can be done with the following code.\r
\r
\`\`\`javascript\r
toSVG() {\r
    if (!this.center) return null;\r
\r
    const transform = p => [POINCARE_WIDTH * (p.x + 1) / 2, POINCARE_HEIGHT * (1 - p.y) / 2];\r
    const [svgP1X, svgP1Y] = transform(this.p1);\r
    const [svgP2X, svgP2Y] = transform(this.p2);\r
    const [svgCenterX, svgCenterY] = transform(this.center);\r
    const svgRadius = (this.radius * POINCARE_WIDTH) / 2;\r
\r
    const v1 = { x: svgP1X - svgCenterX, y: svgP1Y - svgCenterY };\r
    const v2 = { x: svgP2X - svgCenterX, y: svgP2Y - svgCenterY };\r
\r
    const crossProduct = v1.x * v2.y - v1.y * v2.x;\r
    const sweepFlag = crossProduct > 0 ? 1 : 0;\r
\r
    const angleDiff = (Math.atan2(v2.y, v2.x) - Math.atan2(v1.y, v1.x) + 2 * Math.PI) % (2 * Math.PI);\r
    const largeArcFlag = angleDiff > Math.PI ? 1 : 0;\r
\r
    return <path\r
        d={\`M\${svgP1X},\${svgP1Y} A\${svgRadius},\${svgRadius} 0 \${largeArcFlag},\${sweepFlag} \${svgP2X},\${svgP2Y}\`}\r
        stroke={LINE_COLOR}\r
        fill="none"\r
        strokeWidth={LINE_WIDTH}\r
    />;\r
}\r
\`\`\`\r
\r
Note that the parameters \`POINCARE_WIDTH\` and \`POINCARE_HEIGHT\` represent the size of the endered image, and \`LINE_COLOR\` and \`LINE_WIDTH\` are set descriptors for the resulting line. This code was taken from another project and is merely used as a reference. Refining will be project specific.\r
\r
---\r
\r
## Mathematical Explanation of Center Location\r
\r
Suppose we are given two points, \\\\(p_1\\\\) and \\\\(p_2\\\\). To ensure a consistent calculation, we always order the points so that the leftmost one is \\\\( p_1 \\\\). If they have the same \\\\( x \\\\)-coordinate, we order by \\\\( y \\\\):\r
\r
\\\\[\r
\\text{if } p_1.x > p_2.x \\text{ or } (p_1.x = p_2.x \\text{ and } p_1.y > p_2.y), ~~~~ \\text{swap } p_1 \\text{ and } p_2\r
\\\\]\r
\r
This prevents inconsistencies in later calculations. The Poincaré disk inversion of a point \\\\( p = (x, y) \\\\) is given by:\r
\r
\\\\[\r
p' = \\left( \\frac{x}{x^2 + y^2}, \\frac{y}{x^2 + y^2} \\right)\r
\\\\]\r
\r
Thus, the inverted points \\\\( p_1' \\\\) and \\\\( p_2' \\\\) are:\r
\r
\\\\[\r
p_1' = \\left( \\frac{p_1.x}{p_1.x^2 + p_1.y^2}, \\frac{p_1.y}{p_1.x^2 + p_1.y^2} \\right), ~~~~\r
p_2' = \\left( \\frac{p_2.x}{p_2.x^2 + p_2.y^2}, \\frac{p_2.y}{p_2.x^2 + p_2.y^2} \\right)\r
\\\\]\r
\r
We compute the midpoints between the original and inverted points:\r
\r
\\\\[\r
M = \\frac{p_1 + p_1'}{2}, ~~~~ N = \\frac{p_2 + p_2'}{2}\r
\\\\]\r
\r
Expanding,\r
\r
\\\\[\r
M_x = \\frac{p_1.x + p_1'.x}{2}, ~~~~ M_y = \\frac{p_1.y + p_1'.y}{2}\r
\\\\]\r
\r
\\\\[\r
N_x = \\frac{p_2.x + p_2'.x}{2}, ~~~~ N_y = \\frac{p_2.y + p_2'.y}{2}\r
\\\\]\r
\r
The slopes of the perpendicular bisectors are given by:\r
\r
\\\\[\r
m_p = -\\frac{p_1.x - p_1'.x}{p_1.y - p_1'.y}, ~~~~\r
m_q = -\\frac{p_2.x - p_2'.x}{p_2.y - p_2'.y}\r
\\\\]\r
\r
If \\\\( p_1.y = p_1'.y \\\\), we have a **vertical line**, so we define:\r
\r
\\\\[\r
m_p = \\infty, ~~~~ b_p = M_x\r
\\\\]\r
\r
Otherwise, the line equation is:\r
\r
\\\\[\r
b_p = M_y - m_p M_x\r
\\\\]\r
\r
Similarly, for \\\\( p_2 \\\\):\r
\r
\\\\[\r
b_q = N_y - m_q N_x\r
\\\\]\r
\r
The intersection of these two lines gives the center of the geodesic. The intersection \\\\( (x, y) \\\\) satisfies:\r
\r
\\\\[\r
x = \\begin{cases} \r
    b_p, & \\text{if } m_p = \\infty \\\\\\\\\r
    \\\\\\\\\r
    b_q, & \\text{if } m_q = \\infty \\\\\\\\\r
    \\\\\\\\\r
    \\frac{b_q - b_p}{m_p - m_q}, & \\text{otherwise} \r
    \\end{cases}\r
\\\\]\r
\r
\\\\[\r
y = \\begin{cases} \r
    m_q x + b_q, & \\text{if } m_p = \\infty \\\\\\\\\r
    \\\\\\\\\r
    m_p x + b_p, & \\text{otherwise}\r
    \\end{cases}\r
\\\\]\r
\r
This final point \\\\( (x, y) \\\\) is the center of the hyperbolic geodesic circle.\r
\r
---\r
\r
## Explanation of Rendering Process\r
\r
Since the Poincaré disk is centered at \\\\( (0,0) \\\\), but the **SVG coordinate system** has its origin at the top-left corner, we need to transform the coordinates. Given an SVG viewport of width \\\\( W \\\\) and height \\\\( H \\\\), the transformation for any point \\\\( p = (x, y) \\\\) is:\r
\r
\\\\[\r
\\text{svgX} = W \\times \\frac{p.x + 1}{2}, ~~~~ \\text{svgY} = H \\times \\left(1 - \\frac{p.y + 1}{2} \\right)\r
\\\\]\r
\r
Using this function, we transform:\r
- **Endpoints** \\\\( p_1 \\\\) and \\\\( p_2 \\\\)\r
- **Circle Center** \\\\( c \\\\) of the geodesic\r
- **Radius** \\\\( r \\\\)\r
\r
\\\\[\r
\\text{svgRadius} = \\frac{W}{2} \\times r\r
\\\\]\r
\r
To determine the **direction of the arc**, we compute the cross-product of the two vectors:\r
\r
\\\\[\r
\\mathbf{v_1} = (\\text{svgP1X} - \\text{svgCenterX}, \\text{svgP1Y} - \\text{svgCenterY})\r
\\\\]\r
\r
\\\\[\r
\\mathbf{v_2} = (\\text{svgP2X} - \\text{svgCenterX}, \\text{svgP2Y} - \\text{svgCenterY})\r
\\\\]\r
\r
\\\\[\r
\\mathbf{v_1} \\times \\mathbf{v_2} = v_1.x \\cdot v_2.y - v_1.y \\cdot v_2.x\r
\\\\]\r
\r
\\\\[\r
\\text{sweepFlag} =\r
\\begin{cases} \r
    1, & \\text{if } \\mathbf{v_1} \\times \\mathbf{v_2} > 0 ~~~~ (\\text{counterclockwise}) \\\\\\\\\r
    \\\\\\\\\r
    0, & \\text{otherwise} ~~~~ (\\text{clockwise})\r
\\end{cases}\r
\\\\]\r
\r
To select the **correct hyperbolic arc**, we compute the angle between vectors:\r
\r
\\\\[\r
\\theta = \\arctan2(v_2.y, v_2.x) - \\arctan2(v_1.y, v_1.x)\r
\\\\]\r
\r
Normalize \\\\( \\theta \\\\) into the range \\\\( [0, 2\\pi] \\\\):\r
\r
\\\\[\r
\\theta' = \\left( (\\theta \\mod 2\\pi) + 2\\pi \\right) \\mod 2\\pi\r
\\\\]\r
\r
If the angle is **greater than \\\\( \\pi \\\\)**, the \`largeArcFlag\` is set to \\\\(1\\\\):\r
\r
\\\\[\r
\\text{largeArcFlag} =\r
\\begin{cases} \r
    1, & \\text{if } \\theta' > \\pi \\\\\\\\\r
    \\\\\\\\\r
    0, & \\text{otherwise}\r
\\end{cases}\r
\\\\]\r
\r
\r
Using the computed parameters, we construct the SVG \`<path>\`:\r
\r
\`\`\`jsx\r
<path\r
    d={\`M\${svgP1X},\${svgP1Y} A\${svgRadius},\${svgRadius} 0 \${largeArcFlag},\${sweepFlag} \${svgP2X},\${svgP2Y}\`}\r
    stroke={LINE_COLOR}\r
    fill="none"\r
    strokeWidth={LINE_WIDTH}\r
/>\r
\`\`\`\r
\r
The **SVG arc command** follows this structure:\r
\r
\\\\[\r
M (\\text{svgP1X}, \\text{svgP1Y}) ~~~~\r
A (\\text{svgRadius}, \\text{svgRadius}) ~~~~ 0 ~~~~\r
\\text{largeArcFlag},\\text{sweepFlag} ~~~~\r
(\\text{svgP2X},\\text{svgP2Y})\r
\\\\]\r
\r
---\r
\r
## Known Bugs\r
\r
While this code seems to work, there appear to be some cases where SVG rendering is overloaded, providing problematic paths. This seems to occur when the \\\\(y\\\\) coordinate of a point is \\\\(0\\\\), or if the line crosses over the negative \\\\(x\\\\)-axis.`;export{n as default};
