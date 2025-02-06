const n=`# Computing and Rendering a Hyperbolic Geodesic in the Poincaré Disk\r
\r
## Code Example\r
\r
We manually define a [machine number](https://en.wikipedia.org/wiki/Machine_epsilon#:~:text=In%20the%20mainstream%20definition%2C%20machine,next%20larger%20floating%20point%20number.) (\\\\(\\\\varepsilon\\\\)) for comparisons near zero.\r
\r
\`\`\`javascript\r
const EPSILON = 1e-10;\r
\`\`\`\r
\r
We can find the center of the arc that forms the geodesic using the following logic.\r
\r
\`\`\`javascript\r
function getCenter(p1, p2) {\r
    if (p2.x < 0 && Math.abs(p2.y) < EPSILON) [p1, p2] = [p2, p1];\r
\r
    const [Px, Py, Qx, Qy] = [p1.x, p1.y, p2.x, p2.y];\r
\r
    if (Math.abs(Px * Qy - Py * Qx) < EPSILON) {\r
        return null;\r
    }\r
\r
    const [iP, iQ] = [pDiskInvert(p1), pDiskInvert(p2)];\r
    const [Mx, My, Nx, Ny] = [(Px + iP.x) / 2, (Py + iP.y) / 2, (Qx + iQ.x) / 2, (Qy + iQ.y) / 2];\r
\r
    const mp = Math.abs(Py - My) < EPSILON ? Infinity : -(Px - Mx) / (Py - My);\r
    const mq = Math.abs(Qy - Ny) < EPSILON ? Infinity : -(Qx - Nx) / (Qy - Ny);\r
    const bp = My - (mp === Infinity ? 0 : mp * Mx);\r
    const bq = Ny - (mq === Infinity ? 0 : mq * Nx);\r
\r
    if (Math.abs(mp - mq) < EPSILON) return null;\r
\r
    const x = mp === Infinity ? Mx : mq === Infinity ? Nx : (bq - bp) / (mp - mq);\r
    const y = mp === Infinity ? mq * x + bq : mp * x + bp;\r
\r
    return new Point(x, y);\r
}\r
\`\`\`\r
\r
The code above uses [circle inversions](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) which are defind with the function below. For the Poincaré disk inversion, it's simply an application of the circle inversion over the unit circle.\r
\r
\`\`\`javascript\r
const pDiskInvert = (p) => {\r
    return circleInvert(p, new Point(0, 0), 1);\r
}\r
\`\`\`\r
\r
Rendering the arc can be done with the following code.\r
\r
\`\`\`javascript\r
function toSVG() {\r
    if (!this.center) {\r
        return (\r
            <line\r
                x1={POINCARE_WIDTH * (this.p1.x + 1) / 2}\r
                y1={POINCARE_HEIGHT * (1 - this.p1.y) / 2}\r
                x2={POINCARE_WIDTH * (this.p2.x + 1) / 2}\r
                y2={POINCARE_HEIGHT * (1 - this.p2.y) / 2}\r
                stroke={LINE_COLOR}\r
                strokeWidth={LINE_WIDTH.toString()}\r
            />\r
        );\r
    }\r
\r
    const [svgP1X, svgP1Y] = [POINCARE_WIDTH * (this.p1.x + 1) / 2, POINCARE_HEIGHT * (1 - this.p1.y) / 2];\r
    const [svgP2X, svgP2Y] = [POINCARE_WIDTH * (this.p2.x + 1) / 2, POINCARE_HEIGHT * (1 - this.p2.y) / 2];\r
    const [svgCenterX, svgCenterY] = [POINCARE_WIDTH * (this.center.x + 1) / 2, POINCARE_HEIGHT * (1 - this.center.y) / 2];\r
    const svgRadius = this.radius * POINCARE_WIDTH / 2;\r
\r
    if (!isFinite(svgRadius) || isNaN(svgRadius)) return null;\r
\r
    const vector1 = { x: svgP1X - svgCenterX, y: svgP1Y - svgCenterY };\r
    const vector2 = { x: svgP2X - svgCenterX, y: svgP2Y - svgCenterY };\r
\r
    const crossProduct = vector1.x * vector2.y - vector1.y * vector2.x;\r
    const sweepFlag = crossProduct > 0 ? 1 : 0;\r
\r
    const angleBetweenPoints = Math.atan2(vector2.y, vector2.x) - Math.atan2(vector1.y, vector1.x);\r
    if (!isFinite(angleBetweenPoints) || isNaN(angleBetweenPoints)) return null;\r
    const largeArcFlag = (((angleBetweenPoints % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) > Math.PI ? 0 : 0;\r
\r
    const path = \`M\${svgP1X},\${svgP1Y} A\${svgRadius},\${svgRadius} 0 \${largeArcFlag * 1.5},\${sweepFlag} \${svgP2X},\${svgP2Y}\`;\r
    return <path d={path} stroke={LINE_COLOR} fill="none" strokeWidth={LINE_WIDTH.toString()} />;\r
}\r
\`\`\`\r
\r
Note that the parameters \`POINCARE_WIDTH\` and \`POINCARE_HEIGHT\` represent the size of the rendered image, and \`LINE_COLOR\` and \`LINE_WIDTH\` are set descriptors for the resulting line. This code was taken from another project and is merely used as a reference. Refining will be project specific.\r
\r
---\r
\r
## Mathematical Explanation of Center Location\r
\r
The Poincaré disk model represents hyperbolic lines as either:\r
1. Euclidean lines passing through the origin.\r
2. Circular arcs orthogonal to the unit circle.\r
\r
Given two points \\\\( P(x_1, y_1) \\\\) and \\\\( Q(x_2, y_2) \\\\), the goal is to determine the center of the circular arc forming the geodesic. If \\\\( Q \\\\) is to the left of the origin and nearly on the \\\\( x \\\\)-axis, swap \\\\( P \\\\) and \\\\( Q \\\\). If \\\\( P \\\\) and \\\\( Q \\\\) are collinear with the origin, return \`null\` since the geodesic is a [straight line](/workflows/#/mathematics/analytic_geometry/Reflecting-a-Point-Over-a-Line). Now, we take the [circle inversions](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) as follows:\r
   \\\\[\r
   P' = \\\\text{pDiskInvert}(P), ~~~~ Q' = \\\\text{pDiskInvert}(Q)\r
   \\\\]\r
\r
Compute the Euclidean midpoints between original and inverted points:\r
   \\\\[\r
   M = \\\\left(\\\\frac{x_1 + x_1'}{2}, \\\\frac{y_1 + y_1'}{2} \\\\right), ~~~~ N = \\\\left(\\\\frac{x_2 + x_2'}{2}, \\\\frac{y_2 + y_2'}{2} \\\\right)\r
   \\\\]\r
\r
The slopes of the perpendicular bisectors of \\\\( P \\\\to P' \\\\) and \\\\( Q \\\\to Q' \\\\) are:\r
   \\\\[\r
   m_P = \\\\frac{-(x_1 - M_x)}{y_1 - M_y}, ~~~~ m_Q = \\\\frac{-(x_2 - N_x)}{y_2 - N_y}\r
   \\\\]\r
\r
We must handle vertical slopes as a special case. From here, we solve for the intersection of the bisectors to obtain the center \\\\( C(x_c, y_c) \\\\):\r
   \\\\[\r
   x_c = \\\\frac{b_Q - b_P}{m_P - m_Q}, ~~~~ y_c = m_P x_c + b_P\r
   \\\\]\r
\r
If the bisectors are parallel, return \`null\` since the points define a line. If the geodesic is a Euclidean line (i.e., the points are collinear with the origin), render it as a straight **SVG** line. Transform \\\\( (x, y) \\\\) from the Poincaré disk to screen space:\r
\r
\\\\[\r
   x_{\\\\text{svg}} = \\text{POINCARE_WIDTH} \\\\times \\\\frac{x + 1}{2} \\text{, } ~~~~\r
   y_{\\\\text{svg}} = \\text{POINCARE_HEIGHT} \\\\times \\\\frac{1 - y}{2}\r
\\\\]\r
\r
When rendering, need to define the arc of the circle based on the two given points and the center of the circle as defined above. To find the direction the arc travels (which bulges towards the center of the disk):\r
   - Find vectors from the center \\\\( C \\\\) to each point.\r
   - Compute the **cross product** to determine the sweep direction:\r
     \\\\[\r
     \\\\text{cross} = (P_1 - C) \\\\times (P_2 - C)\r
     \\\\]\r
   - Determine **arc direction**:\r
     - \`sweepFlag = 1\` if counterclockwise, otherwise \`0\`.\r
     - Compute the **angle difference**:\r
       \\\\[\r
       \\\\theta = \\\\text{atan2}(y_2 - y_c, x_2 - x_c) - \\\\text{atan2}(y_1 - y_c, x_1 - x_c)\r
       \\\\]\r
     - Set \`largeArcFlag = 1\` if the arc subtends more than \\\\( 180^\\\\circ \\\\), otherwise \`0\`.\r
\r
Finally, we can construct the arc using:\r
   \\\\[\r
   M P_1 ~~~~ A R R ~~~~ 0 ~~~~ \\\\text{largeArcFlag}, \\\\text{sweepFlag} ~~~~ P_2\r
   \\\\]\r
   Where \\\\( R \\\\) is the Euclidean radius of the circle.\r
\r
---\r
\r
You can see [this logic in action](https://moaesaycto.github.io/comp3821-project/).`;export{n as default};
