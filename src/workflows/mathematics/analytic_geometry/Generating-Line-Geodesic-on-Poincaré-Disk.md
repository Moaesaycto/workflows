# Computing and Rendering a Hyperbolic Geodesic in the Poincaré Disk

## Code Example

Below is the function that defines the center of of the circle that makes the geodesic.

```javascript
function getCenter(p1, p2) {
    // Ensure consistent ordering
    if (p1.x > p2.x || (nearlyEqual(p1.x, p2.x) && p1.y > p2.y)) [p1, p2] = [p2, p1];

    let { x: Px, y: Py } = p1, { x: Qx, y: Qy } = p2;
    let { x: iPx, y: iPy } = pDiskInvert(p1), { x: iQx, y: iQy } = pDiskInvert(p2);
    let M = new Point((Px + iPx) / 2, (Py + iPy) / 2);
    let N = new Point((Qx + iQx) / 2, (Qy + iQy) / 2);

    let getLine = (P, iP, M) => nearlyEqual(P.y, iP.y)
        ? [Infinity, M.x]
        : [-(P.x - iP.x) / (P.y - iP.y), M.y - ((P.x - iP.x) / (P.y - iP.y)) * M.x];
    let [mp, bp] = getLine(p1, { x: iPx, y: iPy }, M);
    let [mq, bq] = getLine(p2, { x: iQx, y: iQy }, N);

    if (nearlyEqual(mp, mq)) return null; // Parallel or coincident lines
    let x = (mp === Infinity) ? bp : (mq === Infinity) ? bq : (bq - bp) / (mp - mq);
    let y = (mp === Infinity) ? mq * x + bq : mp * x + bp;

    return new Point(x, y);
}
```

The code above uses [circle inversions](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) which are defind with the function below.

```javascript
const circleInvert = (p, c, r) => {
    const alpha = r * r / ((p.x - c.x) * (p.x - c.x) + (p.y - c.y) * (p.y - c.y))
    return new Point(alpha * (p.x - c.x) + c.x, alpha * (p.y - c.y) + c.y)
}
```

For the Poincaré disk inversion, it's simply an application of the circle inversion over the unit circle.

```javascript
const pDiskInvert = (p) => {
    return circleInvert(p, new Point(0, 0), 1);
}
```

Finally, we check similarity using a manually assigned machine number to account for floating point arithmetic errors.

```javascript
const EPSILON = 1e-10;
const nearlyEqual = (a, b, epsilon = EPSILON) => Math.abs(a - b) < epsilon;
```

Rendering the arc can be done with the following code.

```javascript
toSVG() {
    if (!this.center) return null;

    const transform = p => [POINCARE_WIDTH * (p.x + 1) / 2, POINCARE_HEIGHT * (1 - p.y) / 2];
    const [svgP1X, svgP1Y] = transform(this.p1);
    const [svgP2X, svgP2Y] = transform(this.p2);
    const [svgCenterX, svgCenterY] = transform(this.center);
    const svgRadius = (this.radius * POINCARE_WIDTH) / 2;

    const v1 = { x: svgP1X - svgCenterX, y: svgP1Y - svgCenterY };
    const v2 = { x: svgP2X - svgCenterX, y: svgP2Y - svgCenterY };

    const crossProduct = v1.x * v2.y - v1.y * v2.x;
    const sweepFlag = crossProduct > 0 ? 1 : 0;

    const angleDiff = (Math.atan2(v2.y, v2.x) - Math.atan2(v1.y, v1.x) + 2 * Math.PI) % (2 * Math.PI);
    const largeArcFlag = angleDiff > Math.PI ? 1 : 0;

    return <path
        d={`M${svgP1X},${svgP1Y} A${svgRadius},${svgRadius} 0 ${largeArcFlag},${sweepFlag} ${svgP2X},${svgP2Y}`}
        stroke={LINE_COLOR}
        fill="none"
        strokeWidth={LINE_WIDTH}
    />;
}
```

Note that the parameters `POINCARE_WIDTH` and `POINCARE_HEIGHT` represent the size of the endered image, and `LINE_COLOR` and `LINE_WIDTH` are set descriptors for the resulting line. This code was taken from another project and is merely used as a reference. Refining will be project specific.

---

## Mathematical Explanation of Center Location

Suppose we are given two points, \\(p_1\\) and \\(p_2\\). To ensure a consistent calculation, we always order the points so that the leftmost one is \\( p_1 \\). If they have the same \\( x \\)-coordinate, we order by \\( y \\):

\\[
\text{if } p_1.x > p_2.x \text{ or } (p_1.x = p_2.x \text{ and } p_1.y > p_2.y), ~~~~ \text{swap } p_1 \text{ and } p_2
\\]

This prevents inconsistencies in later calculations. The Poincaré disk inversion of a point \\( p = (x, y) \\) is given by:

\\[
p' = \left( \frac{x}{x^2 + y^2}, \frac{y}{x^2 + y^2} \right)
\\]

Thus, the inverted points \\( p_1' \\) and \\( p_2' \\) are:

\\[
p_1' = \left( \frac{p_1.x}{p_1.x^2 + p_1.y^2}, \frac{p_1.y}{p_1.x^2 + p_1.y^2} \right), ~~~~
p_2' = \left( \frac{p_2.x}{p_2.x^2 + p_2.y^2}, \frac{p_2.y}{p_2.x^2 + p_2.y^2} \right)
\\]

We compute the midpoints between the original and inverted points:

\\[
M = \frac{p_1 + p_1'}{2}, ~~~~ N = \frac{p_2 + p_2'}{2}
\\]

Expanding,

\\[
M_x = \frac{p_1.x + p_1'.x}{2}, ~~~~ M_y = \frac{p_1.y + p_1'.y}{2}
\\]

\\[
N_x = \frac{p_2.x + p_2'.x}{2}, ~~~~ N_y = \frac{p_2.y + p_2'.y}{2}
\\]

The slopes of the perpendicular bisectors are given by:

\\[
m_p = -\frac{p_1.x - p_1'.x}{p_1.y - p_1'.y}, ~~~~
m_q = -\frac{p_2.x - p_2'.x}{p_2.y - p_2'.y}
\\]

If \\( p_1.y = p_1'.y \\), we have a **vertical line**, so we define:

\\[
m_p = \infty, ~~~~ b_p = M_x
\\]

Otherwise, the line equation is:

\\[
b_p = M_y - m_p M_x
\\]

Similarly, for \\( p_2 \\):

\\[
b_q = N_y - m_q N_x
\\]

The intersection of these two lines gives the center of the geodesic. The intersection \\( (x, y) \\) satisfies:

\\[
x = \begin{cases} 
    b_p, & \text{if } m_p = \infty \\\\
    \\\\
    b_q, & \text{if } m_q = \infty \\\\
    \\\\
    \frac{b_q - b_p}{m_p - m_q}, & \text{otherwise} 
    \end{cases}
\\]

\\[
y = \begin{cases} 
    m_q x + b_q, & \text{if } m_p = \infty \\\\
    \\\\
    m_p x + b_p, & \text{otherwise}
    \end{cases}
\\]

This final point \\( (x, y) \\) is the center of the hyperbolic geodesic circle.

---

## Explanation of Rendering Process

Since the Poincaré disk is centered at \\( (0,0) \\), but the **SVG coordinate system** has its origin at the top-left corner, we need to transform the coordinates. Given an SVG viewport of width \\( W \\) and height \\( H \\), the transformation for any point \\( p = (x, y) \\) is:

\\[
\text{svgX} = W \times \frac{p.x + 1}{2}, ~~~~ \text{svgY} = H \times \left(1 - \frac{p.y + 1}{2} \right)
\\]

Using this function, we transform:
- **Endpoints** \\( p_1 \\) and \\( p_2 \\)
- **Circle Center** \\( c \\) of the geodesic
- **Radius** \\( r \\)

\\[
\text{svgRadius} = \frac{W}{2} \times r
\\]

To determine the **direction of the arc**, we compute the cross-product of the two vectors:

\\[
\mathbf{v_1} = (\text{svgP1X} - \text{svgCenterX}, \text{svgP1Y} - \text{svgCenterY})
\\]

\\[
\mathbf{v_2} = (\text{svgP2X} - \text{svgCenterX}, \text{svgP2Y} - \text{svgCenterY})
\\]

\\[
\mathbf{v_1} \times \mathbf{v_2} = v_1.x \cdot v_2.y - v_1.y \cdot v_2.x
\\]

\\[
\text{sweepFlag} =
\begin{cases} 
    1, & \text{if } \mathbf{v_1} \times \mathbf{v_2} > 0 ~~~~ (\text{counterclockwise}) \\\\
    \\\\
    0, & \text{otherwise} ~~~~ (\text{clockwise})
\end{cases}
\\]

To select the **correct hyperbolic arc**, we compute the angle between vectors:

\\[
\theta = \arctan2(v_2.y, v_2.x) - \arctan2(v_1.y, v_1.x)
\\]

Normalize \\( \theta \\) into the range \\( [0, 2\pi] \\):

\\[
\theta' = \left( (\theta \mod 2\pi) + 2\pi \right) \mod 2\pi
\\]

If the angle is **greater than \\( \pi \\)**, the `largeArcFlag` is set to \\(1\\):

\\[
\text{largeArcFlag} =
\begin{cases} 
    1, & \text{if } \theta' > \pi \\\\
    \\\\
    0, & \text{otherwise}
\end{cases}
\\]


Using the computed parameters, we construct the SVG `<path>`:

```jsx
<path
    d={`M${svgP1X},${svgP1Y} A${svgRadius},${svgRadius} 0 ${largeArcFlag},${sweepFlag} ${svgP2X},${svgP2Y}`}
    stroke={LINE_COLOR}
    fill="none"
    strokeWidth={LINE_WIDTH}
/>
```

The **SVG arc command** follows this structure:

\\[
M (\text{svgP1X}, \text{svgP1Y}) ~~~~
A (\text{svgRadius}, \text{svgRadius}) ~~~~ 0 ~~~~
\text{largeArcFlag},\text{sweepFlag} ~~~~
(\text{svgP2X},\text{svgP2Y})
\\]

---

## Known Bugs

While this code seems to work, there appear to be some cases where SVG rendering is overloaded, providing problematic paths. This seems to occur when the \\(y\\) coordinate of a point is \\(0\\), or if the line crosses over the negative \\(x\\)-axis.