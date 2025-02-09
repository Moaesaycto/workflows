# Creating a Container that Smoothly Changes Height

We can use [Framer Motion](/workflows/#/computing/react/Introduction-to-Framer-Motion) achieve this.

```typescript
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AutoResizeContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <motion.div
      animate={{ height }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};

export default AutoResizeContainer;
```