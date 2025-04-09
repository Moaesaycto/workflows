const e=`# Creating a Container that Smoothly Changes Height\r
\r
We can use [Framer Motion](/workflows/#/computing/react/Introduction-to-Framer-Motion) achieve this.\r
\r
\`\`\`tsx\r
import React, { useState, useRef, useEffect } from "react";\r
import { AnimatePresence, motion } from "framer-motion";\r
\r
type CollapsibleProps = {\r
  children: React.ReactNode;\r
  label?: string;\r
};\r
\r
const Collapsible = ({ children, label = "Toggle" }: CollapsibleProps) => {\r
  const [isOpen, setIsOpen] = useState(false);\r
  const containerRef = useRef<HTMLDivElement>(null);\r
  const [measuredHeight, setMeasuredHeight] = useState(0);\r
\r
  useEffect(() => {\r
    if (!containerRef.current) return;\r
    const node = containerRef.current;\r
\r
    const resizeObserver = new ResizeObserver(() => {\r
      setMeasuredHeight(node.scrollHeight);\r
    });\r
\r
    resizeObserver.observe(node);\r
    setMeasuredHeight(node.scrollHeight);\r
\r
    return () => resizeObserver.disconnect();\r
  }, [children, isOpen]);\r
\r
  return (\r
    <div>\r
      <button onClick={() => setIsOpen(!isOpen)}>\r
        {isOpen ? \`Hide \${label}\` : \`Show \${label}\`}\r
      </button>\r
\r
      <AnimatePresence>\r
        {isOpen && (\r
          <motion.div\r
            key="content"\r
            initial={{ height: 0, opacity: 0 }}\r
            animate={{ height: measuredHeight, opacity: 1 }}\r
            exit={{ height: 0, opacity: 0 }}\r
            transition={{ type: "spring", stiffness: 200, damping: 20 }}\r
            onAnimationComplete={() => {\r
              if (isOpen && containerRef.current) {\r
                containerRef.current.style.height = "auto";\r
              }\r
            }}\r
            style={{ overflow: "hidden" }}\r
          >\r
            <div ref={containerRef}>\r
              {children}\r
            </div>\r
          </motion.div>\r
        )}\r
      </AnimatePresence>\r
    </div>\r
  );\r
};\r
\r
export default Collapsible;\r
\r
\`\`\``;export{e as default};
