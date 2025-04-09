# Creating a Container that Smoothly Changes Height

We can use [Framer Motion](/workflows/#/computing/react/Introduction-to-Framer-Motion) achieve this.

```tsx
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CollapsibleProps = {
  children: React.ReactNode;
  label?: string;
};

const Collapsible = ({ children, label = "Toggle" }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;

    const resizeObserver = new ResizeObserver(() => {
      setMeasuredHeight(node.scrollHeight);
    });

    resizeObserver.observe(node);
    setMeasuredHeight(node.scrollHeight);

    return () => resizeObserver.disconnect();
  }, [children, isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? `Hide ${label}` : `Show ${label}`}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: measuredHeight, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onAnimationComplete={() => {
              if (isOpen && containerRef.current) {
                containerRef.current.style.height = "auto";
              }
            }}
            style={{ overflow: "hidden" }}
          >
            <div ref={containerRef}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Collapsible;

```