const n=`# Creating a Container that Smoothly Changes Height\r
\r
We can use [Framer Motion](/workflows/#/computing/react/Introduction-to-Framer-Motion) achieve this.\r
\r
\`\`\`typescript\r
import React, { useState, useRef, useEffect } from "react";\r
import { motion } from "framer-motion";\r
\r
const AutoResizeContainer = ({ children }: { children: React.ReactNode }) => {\r
  const containerRef = useRef<HTMLDivElement>(null);\r
  const [height, setHeight] = useState(0);\r
\r
  useEffect(() => {\r
    if (containerRef.current) {\r
      setHeight(containerRef.current.scrollHeight);\r
    }\r
  }, [children]);\r
\r
  return (\r
    <motion.div\r
      animate={{ height }}\r
      transition={{ type: "spring", stiffness: 200, damping: 20 }}\r
      style={{\r
        overflow: "hidden",\r
        width: "100%",\r
      }}\r
    >\r
      <div ref={containerRef}>{children}</div>\r
    </motion.div>\r
  );\r
};\r
\r
export default AutoResizeContainer;\r
\`\`\``;export{n as default};
