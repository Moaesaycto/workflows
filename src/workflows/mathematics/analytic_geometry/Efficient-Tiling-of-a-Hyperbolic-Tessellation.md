# Hyperbolic Tiling in the Poincaré Disk

## Code Example

This implementation efficiently generates and renders a tiling in hyperbolic space using the Poincaré disk model.

```javascript
const generatePolygons = (p, q) => {
    const d = Math.sqrt((Math.tan(Math.PI / 2 - Math.PI / q) - Math.tan(Math.PI / p)) /
              (Math.tan(Math.PI / 2 - Math.PI / q) + Math.tan(Math.PI / p)));

    const polyPoints = Array.from({ length: p + 1 }, (_, i) => {
        const angle = 2 * Math.PI * i / p + (p % 2 ? 0 : Math.PI / p);
        return new Point(d * Math.cos(angle), d * Math.sin(angle));
    });

    const initialPolygon = new Polygon(polyPoints);
    const maxDepth = computeMaxDepth(p);
    const queue = [{ polygon: initialPolygon, depth: 0 }];
    const visitedEdges = new Set();
    const visitedPolygons = new Set([polygonKey(initialPolygon)]);
    const newPolygons = [initialPolygon];

    while (queue.length) {
        const { polygon, depth } = queue.shift();
        if (depth >= maxDepth) continue;

        polygon.curves.forEach(curve => {
            const key = edgeKey(curve.p1, curve.p2);
            if (visitedEdges.has(key)) return;
            visitedEdges.add(key);

            const reflectedPolygon = curve.reflectPolygon(polygon);
            const polyKey = polygonKey(reflectedPolygon);
            if (visitedPolygons.has(polyKey)) return;
            visitedPolygons.add(polyKey);
            newPolygons.push(reflectedPolygon);
            queue.push({ polygon: reflectedPolygon, depth: depth + 1 });
        });
    }
    setPolygons(newPolygons);
}
```

The maximum depth can be chosen depending on \\(p\\) and \\(q\\) with the following function

```javascript
const computeMaxDepth = (p) => {
    const C = 7;
    const k = 0.5;
    return Math.max(1, Math.floor(C - k * p));
};
```

Note that the function checks for repeats using a key system, which can be implemented using the following:

```javascript
const edgeKey = useCallback((p1, p2) => {
    const key1 = `${round(p1.x)}_${round(p1.y)}`;
    const key2 = `${round(p2.x)}_${round(p2.y)}`;
    return (key1 < key2) ? `${key1}_${key2}` : `${key2}_${key1}`;
}, []);

const polygonKey = useCallback((polygon) => {
    const keys = polygon.points.map(p => `${round(p.x)}_${round(p.y)}`);
    keys.sort();
    return keys.join('|');
}, []);
```

Finally, the `reflectPolygon` referenced in the code refers to the [circle inversion](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) over the [geodesic calculated for the given edge](/workflows/#/mathematics/analytic_geometry/Generating-Line-Geodesic-on-Poincaré-Disk).

---

## Mathematical Explanation of Hyperbolic Tiling

This algorithm generates a hyperbolic tiling based on a **Schläfli symbol** \\( \\{p, q\\} \\), where:
- \\( p \\) is the number of sides per polygon,
- \\( q \\) is the number of polygons meeting at each vertex.

Hyperbolic regular polygons are inscribed in a circle of radius \\( d \\), computed as:
\\[
d = \\sqrt{\\frac{\\tan(\\pi / 2 - \\pi / q) - \\tan(\\pi / p)}{\\tan(\\pi / 2 - \\pi / q) + \\tan(\\pi / p)}}
\\]
This ensures that all polygons are correctly placed within the Poincaré disk. The vertices are computed using:
\\[
\\theta_i = \\frac{2 \\pi i}{p} + \\left( p \\mod 2 = 0 \\right) \\frac{\\pi}{p}
\\]
where each vertex is placed at:
\\[
(x_i, y_i) = \\left( d \\cos(\\theta_i), d \\sin(\\theta_i) \\right)
\\]

Using a BFS-like approach:
1. Maintain a **queue** of polygons to process.
2. Track visited **edges** and **polygons** to avoid redundant reflections.
3. For each polygon, reflect it across each of its edges to generate new polygons.

The reflection across an edge is computed by inverting the polygon across the corresponding geodesic in hyperbolic space. To avoid excessive recursion, a depth limit is introduced:
\\[
\\text{maxDepth} = \\max(1, \\lfloor C - k \\cdot p \\rfloor)
\\]
where \\( C \\) and \\( k \\) control the density of the tiling. Each generated polygon is converted to an **SVG path**, with:
- The unit circle as the boundary.
- Hyperbolic geodesics drawn as circular arcs.

---

You can see [this logic in action](https://moaesaycto.github.io/comp3821-project/).