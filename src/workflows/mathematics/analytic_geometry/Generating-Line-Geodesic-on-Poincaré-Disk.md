# Computing and Rendering a Hyperbolic Geodesic in the Poincaré Disk

## Code Example

We manually define a [machine number](https://en.wikipedia.org/wiki/Machine_epsilon#:~:text=In%20the%20mainstream%20definition%2C%20machine,next%20larger%20floating%20point%20number.) (\\(\\varepsilon\\)) for comparisons near zero.

```javascript
const EPSILON = 1e-10;
```

We can find the center of the arc that forms the geodesic using the following logic.

```javascript
function getCenter(p1, p2) {
    if (p2.x < 0 && Math.abs(p2.y) < EPSILON) [p1, p2] = [p2, p1];

    const [Px, Py, Qx, Qy] = [p1.x, p1.y, p2.x, p2.y];

    if (Math.abs(Px * Qy - Py * Qx) < EPSILON) {
        return null;
    }

    const [iP, iQ] = [pDiskInvert(p1), pDiskInvert(p2)];
    const [Mx, My, Nx, Ny] = [(Px + iP.x) / 2, (Py + iP.y) / 2, (Qx + iQ.x) / 2, (Qy + iQ.y) / 2];

    const mp = Math.abs(Py - My) < EPSILON ? Infinity : -(Px - Mx) / (Py - My);
    const mq = Math.abs(Qy - Ny) < EPSILON ? Infinity : -(Qx - Nx) / (Qy - Ny);
    const bp = My - (mp === Infinity ? 0 : mp * Mx);
    const bq = Ny - (mq === Infinity ? 0 : mq * Nx);

    if (Math.abs(mp - mq) < EPSILON) return null;

    const x = mp === Infinity ? Mx : mq === Infinity ? Nx : (bq - bp) / (mp - mq);
    const y = mp === Infinity ? mq * x + bq : mp * x + bp;

    return new Point(x, y);
}
```

The code above uses [circle inversions](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) which are defind with the function below. For the Poincaré disk inversion, it's simply an application of the circle inversion over the unit circle.

```javascript
const pDiskInvert = (p) => {
    return circleInvert(p, new Point(0, 0), 1);
}
```

Rendering the arc can be done with the following code.

```javascript
function toSVG() {
    if (!this.center) {
        return (
            <line
                x1={POINCARE_WIDTH * (this.p1.x + 1) / 2}
                y1={POINCARE_HEIGHT * (1 - this.p1.y) / 2}
                x2={POINCARE_WIDTH * (this.p2.x + 1) / 2}
                y2={POINCARE_HEIGHT * (1 - this.p2.y) / 2}
                stroke={LINE_COLOR}
                strokeWidth={LINE_WIDTH.toString()}
            />
        );
    }

    const [svgP1X, svgP1Y] = [POINCARE_WIDTH * (this.p1.x + 1) / 2, POINCARE_HEIGHT * (1 - this.p1.y) / 2];
    const [svgP2X, svgP2Y] = [POINCARE_WIDTH * (this.p2.x + 1) / 2, POINCARE_HEIGHT * (1 - this.p2.y) / 2];
    const [svgCenterX, svgCenterY] = [POINCARE_WIDTH * (this.center.x + 1) / 2, POINCARE_HEIGHT * (1 - this.center.y) / 2];
    const svgRadius = this.radius * POINCARE_WIDTH / 2;

    if (!isFinite(svgRadius) || isNaN(svgRadius)) return null;

    const vector1 = { x: svgP1X - svgCenterX, y: svgP1Y - svgCenterY };
    const vector2 = { x: svgP2X - svgCenterX, y: svgP2Y - svgCenterY };

    const crossProduct = vector1.x * vector2.y - vector1.y * vector2.x;
    const sweepFlag = crossProduct > 0 ? 1 : 0;

    const angleBetweenPoints = Math.atan2(vector2.y, vector2.x) - Math.atan2(vector1.y, vector1.x);
    if (!isFinite(angleBetweenPoints) || isNaN(angleBetweenPoints)) return null;
    const largeArcFlag = (((angleBetweenPoints % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) > Math.PI ? 0 : 0;

    const path = `M${svgP1X},${svgP1Y} A${svgRadius},${svgRadius} 0 ${largeArcFlag * 1.5},${sweepFlag} ${svgP2X},${svgP2Y}`;
    return <path d={path} stroke={LINE_COLOR} fill="none" strokeWidth={LINE_WIDTH.toString()} />;
}
```

Note that the parameters `POINCARE_WIDTH` and `POINCARE_HEIGHT` represent the size of the rendered image, and `LINE_COLOR` and `LINE_WIDTH` are set descriptors for the resulting line. This code was taken from another project and is merely used as a reference. Refining will be project specific.

---

## Mathematical Explanation of Center Location

The Poincaré disk model represents hyperbolic lines as either:
1. Euclidean lines passing through the origin.
2. Circular arcs orthogonal to the unit circle.

Given two points \\( P(x_1, y_1) \\) and \\( Q(x_2, y_2) \\), the goal is to determine the center of the circular arc forming the geodesic. If \\( Q \\) is to the left of the origin and nearly on the \\( x \\)-axis, swap \\( P \\) and \\( Q \\). If \\( P \\) and \\( Q \\) are collinear with the origin, return `null` since the geodesic is a [straight line](/workflows/#/mathematics/analytic_geometry/Reflecting-a-Point-Over-a-Line). Now, we take the [circle inversions](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) as follows:
   \\[
   P' = \\text{pDiskInvert}(P), ~~~~ Q' = \\text{pDiskInvert}(Q)
   \\]

Compute the Euclidean midpoints between original and inverted points:
   \\[
   M = \\left(\\frac{x_1 + x_1'}{2}, \\frac{y_1 + y_1'}{2} \\right), ~~~~ N = \\left(\\frac{x_2 + x_2'}{2}, \\frac{y_2 + y_2'}{2} \\right)
   \\]

The slopes of the perpendicular bisectors of \\( P \\to P' \\) and \\( Q \\to Q' \\) are:
   \\[
   m_P = \\frac{-(x_1 - M_x)}{y_1 - M_y}, ~~~~ m_Q = \\frac{-(x_2 - N_x)}{y_2 - N_y}
   \\]

We must handle vertical slopes as a special case. From here, we solve for the intersection of the bisectors to obtain the center \\( C(x_c, y_c) \\):
   \\[
   x_c = \\frac{b_Q - b_P}{m_P - m_Q}, ~~~~ y_c = m_P x_c + b_P
   \\]

If the bisectors are parallel, return `null` since the points define a line. If the geodesic is a Euclidean line (i.e., the points are collinear with the origin), render it as a straight **SVG** line. Transform \\( (x, y) \\) from the Poincaré disk to screen space:

\\[
   x_{\\text{svg}} = \text{POINCARE_WIDTH} \\times \\frac{x + 1}{2} \text{, } ~~~~
   y_{\\text{svg}} = \text{POINCARE_HEIGHT} \\times \\frac{1 - y}{2}
\\]

When rendering, need to define the arc of the circle based on the two given points and the center of the circle as defined above. To find the direction the arc travels (which bulges towards the center of the disk):
   - Find vectors from the center \\( C \\) to each point.
   - Compute the **cross product** to determine the sweep direction:
     \\[
     \\text{cross} = (P_1 - C) \\times (P_2 - C)
     \\]
   - Determine **arc direction**:
     - `sweepFlag = 1` if counterclockwise, otherwise `0`.
     - Compute the **angle difference**:
       \\[
       \\theta = \\text{atan2}(y_2 - y_c, x_2 - x_c) - \\text{atan2}(y_1 - y_c, x_1 - x_c)
       \\]
     - Set `largeArcFlag = 1` if the arc subtends more than \\( 180^\\circ \\), otherwise `0`.

Finally, we can construct the arc using:
   \\[
   M P_1 ~~~~ A R R ~~~~ 0 ~~~~ \\text{largeArcFlag}, \\text{sweepFlag} ~~~~ P_2
   \\]
   Where \\( R \\) is the Euclidean radius of the circle.

---

You can see [this logic in action](https://moaesaycto.github.io/comp3821-project/).