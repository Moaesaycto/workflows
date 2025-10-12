const r=`# Making a Simple Loading Spinner\r
\r
You can make a simple spinner using the following component:\r
\r
\`\`\`tsx\r
import React from "react";\r
\r
type Props = {\r
  size?: number | string;\r
  thickness?: number | string;\r
  className?: string;\r
};\r
\r
export default function Spinner({ size = 24, thickness, className }: Props) {\r
  const s = typeof size === "number" ? \`\${size}px\` : size;\r
  const t =\r
    thickness ??\r
    (typeof size === "number" ? \`\${Math.max(2, Math.round(size / 8))}px\` : "3px");\r
\r
  return (\r
    <span\r
      aria-label="Loading"\r
      role="status"\r
      className={\`spinner \${className ?? ""}\`}\r
      style={\r
        {\r
          "--size": s,\r
          "--thickness": t,\r
        } as React.CSSProperties\r
      }\r
    />\r
  );\r
}\r
\`\`\`\r
\r
There is a style sheet associated, which dynamically passes the colour down.\r
\r
\`\`\`css\r
@keyframes spin {\r
  to { transform: rotate(360deg); }\r
}\r
\r
.spinner {\r
  display: inline-block;\r
  width: var(--size);\r
  height: var(--size);\r
  border: var(--thickness) solid transparent;\r
  border-top-color: currentColor;\r
  border-right-color: currentColor;\r
  border-radius: 50%;\r
  animation: spin .8s linear infinite;\r
}\r
\`\`\`\r
\r
## Tailwind\r
\r
Using Tailwind makes it easier:\r
\r
\`\`\`tsx\r
import React from "react";\r
\r
type Props = {\r
  size?: number | string;\r
  thickness?: number;\r
  colorClass?: string;\r
  className?: string;\r
};\r
\r
export default function Spinner({\r
  size = 24,\r
  thickness = 3,\r
  colorClass = "text-sky-500",\r
  className,\r
}: Props) {\r
  const s = typeof size === "number" ? \`\${size}px\` : size;\r
\r
  return (\r
    <span\r
      role="status"\r
      aria-label="Loading"\r
      className={\`inline-block animate-spin rounded-full border-transparent border-solid \${colorClass} \${className ?? ""}\`}\r
      style={{\r
        width: s,\r
        height: s,\r
        borderWidth: thickness,\r
        // show two coloured sides; uses currentColor from text-*\r
        borderTopColor: "currentColor",\r
        borderRightColor: "currentColor",\r
      }}\r
    />\r
  );\r
}\r
\`\`\``;export{r as default};
