const n=`# Hyperbolic Tiling in the Poincaré Disk\r
\r
## Code Example\r
\r
This implementation efficiently generates and renders a tiling in hyperbolic space using the Poincaré disk model.\r
\r
\`\`\`javascript\r
const generatePolygons = (p, q) => {\r
    const d = Math.sqrt((Math.tan(Math.PI / 2 - Math.PI / q) - Math.tan(Math.PI / p)) /\r
              (Math.tan(Math.PI / 2 - Math.PI / q) + Math.tan(Math.PI / p)));\r
\r
    const polyPoints = Array.from({ length: p + 1 }, (_, i) => {\r
        const angle = 2 * Math.PI * i / p + (p % 2 ? 0 : Math.PI / p);\r
        return new Point(d * Math.cos(angle), d * Math.sin(angle));\r
    });\r
\r
    const initialPolygon = new Polygon(polyPoints);\r
    const maxDepth = computeMaxDepth(p);\r
    const queue = [{ polygon: initialPolygon, depth: 0 }];\r
    const visitedEdges = new Set();\r
    const visitedPolygons = new Set([polygonKey(initialPolygon)]);\r
    const newPolygons = [initialPolygon];\r
\r
    while (queue.length) {\r
        const { polygon, depth } = queue.shift();\r
        if (depth >= maxDepth) continue;\r
\r
        polygon.curves.forEach(curve => {\r
            const key = edgeKey(curve.p1, curve.p2);\r
            if (visitedEdges.has(key)) return;\r
            visitedEdges.add(key);\r
\r
            const reflectedPolygon = curve.reflectPolygon(polygon);\r
            const polyKey = polygonKey(reflectedPolygon);\r
            if (visitedPolygons.has(polyKey)) return;\r
            visitedPolygons.add(polyKey);\r
            newPolygons.push(reflectedPolygon);\r
            queue.push({ polygon: reflectedPolygon, depth: depth + 1 });\r
        });\r
    }\r
    setPolygons(newPolygons);\r
}\r
\`\`\`\r
\r
The maximum depth can be chosen depending on \\\\(p\\\\) and \\\\(q\\\\) with the following function\r
\r
\`\`\`javascript\r
const computeMaxDepth = (p) => {\r
    const C = 7;\r
    const k = 0.5;\r
    return Math.max(1, Math.floor(C - k * p));\r
};\r
\`\`\`\r
\r
Note that the function checks for repeats using a key system, which can be implemented using the following:\r
\r
\`\`\`javascript\r
const edgeKey = useCallback((p1, p2) => {\r
    const key1 = \`\${round(p1.x)}_\${round(p1.y)}\`;\r
    const key2 = \`\${round(p2.x)}_\${round(p2.y)}\`;\r
    return (key1 < key2) ? \`\${key1}_\${key2}\` : \`\${key2}_\${key1}\`;\r
}, []);\r
\r
const polygonKey = useCallback((polygon) => {\r
    const keys = polygon.points.map(p => \`\${round(p.x)}_\${round(p.y)}\`);\r
    keys.sort();\r
    return keys.join('|');\r
}, []);\r
\`\`\`\r
\r
Finally, the \`reflectPolygon\` referenced in the code refers to the [circle inversion](/workflows/#/mathematics/analytic_geometry/Circle-Inversions) over the [geodesic calculated for the given edge](/workflows/#/mathematics/analytic_geometry/Generating-Line-Geodesic-on-Poincaré-Disk).\r
\r
---\r
\r
## Mathematical Explanation of Hyperbolic Tiling\r
\r
This algorithm generates a hyperbolic tiling based on a **Schläfli symbol** \\\\( \\\\{p, q\\\\} \\\\), where:\r
- \\\\( p \\\\) is the number of sides per polygon,\r
- \\\\( q \\\\) is the number of polygons meeting at each vertex.\r
\r
Hyperbolic regular polygons are inscribed in a circle of radius \\\\( d \\\\), computed as:\r
\\\\[\r
d = \\\\sqrt{\\\\frac{\\\\tan(\\\\pi / 2 - \\\\pi / q) - \\\\tan(\\\\pi / p)}{\\\\tan(\\\\pi / 2 - \\\\pi / q) + \\\\tan(\\\\pi / p)}}\r
\\\\]\r
This ensures that all polygons are correctly placed within the Poincaré disk. The vertices are computed using:\r
\\\\[\r
\\\\theta_i = \\\\frac{2 \\\\pi i}{p} + \\\\left( p \\\\mod 2 = 0 \\\\right) \\\\frac{\\\\pi}{p}\r
\\\\]\r
where each vertex is placed at:\r
\\\\[\r
(x_i, y_i) = \\\\left( d \\\\cos(\\\\theta_i), d \\\\sin(\\\\theta_i) \\\\right)\r
\\\\]\r
\r
Using a BFS-like approach:\r
1. Maintain a **queue** of polygons to process.\r
2. Track visited **edges** and **polygons** to avoid redundant reflections.\r
3. For each polygon, reflect it across each of its edges to generate new polygons.\r
\r
The reflection across an edge is computed by inverting the polygon across the corresponding geodesic in hyperbolic space. To avoid excessive recursion, a depth limit is introduced:\r
\\\\[\r
\\\\text{maxDepth} = \\\\max(1, \\\\lfloor C - k \\\\cdot p \\\\rfloor)\r
\\\\]\r
where \\\\( C \\\\) and \\\\( k \\\\) control the density of the tiling. Each generated polygon is converted to an **SVG path**, with:\r
- The unit circle as the boundary.\r
- Hyperbolic geodesics drawn as circular arcs.\r
\r
---\r
\r
You can see [this logic in action](https://moaesaycto.github.io/comp3821-project/).`;export{n as default};
