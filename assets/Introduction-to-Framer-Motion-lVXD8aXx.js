const n=`# Framer Motion Guide\r
\r
## Introduction\r
[Framer Motion](https://www.framer.com/motion/) is a powerful animation library for React, offering an easy API for declarative animations with performance optimizations.\r
\r
---\r
\r
## Installation\r
\`\`\`sh\r
npm install framer-motion\r
\`\`\`\r
\r
## Basic Usage\r
\`\`\`jsx\r
import { motion } from "framer-motion";\r
\r
export default function Example() {\r
  return <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} />;\r
}\r
\`\`\`\r
\r
---\r
\r
## Core Components\r
### \`motion\`\r
Wraps HTML elements or React components to enable animations.\r
\`\`\`jsx\r
<motion.div animate={{ x: 100 }} />\r
\`\`\`\r
\r
### \`AnimatePresence\`\r
Manages animations when components mount/unmount.\r
\`\`\`jsx\r
import { AnimatePresence, motion } from "framer-motion";\r
\r
export default function Example({ isVisible }) {\r
  return (\r
    <AnimatePresence>\r
      {isVisible && <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} />}\r
    </AnimatePresence>\r
  );\r
}\r
\`\`\`\r
\r
### \`useAnimation\`\r
Imperative control over animations.\r
\`\`\`jsx\r
import { motion, useAnimation } from "framer-motion";\r
\r
export default function Example() {\r
  const controls = useAnimation();\r
  return (\r
    <motion.div animate={controls} onClick={() => controls.start({ x: 100 })} />\r
  );\r
}\r
\`\`\`\r
\r
---\r
\r
## Animation Properties\r
### \`animate\`\r
Defines target values.\r
\`\`\`jsx\r
<motion.div animate={{ scale: 1.2, rotate: 90 }} />\r
\`\`\`\r
\r
### \`initial\`\r
Starting animation values.\r
\`\`\`jsx\r
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />\r
\`\`\`\r
\r
### \`exit\`\r
Animation when component is removed.\r
\`\`\`jsx\r
<motion.div exit={{ y: -50, opacity: 0 }} />\r
\`\`\`\r
\r
### \`transition\`\r
Configures timing and easing.\r
\`\`\`jsx\r
<motion.div animate={{ y: 100 }} transition={{ duration: 0.5, ease: "easeInOut" }} />\r
\`\`\`\r
\r
---\r
\r
## Gestures\r
### \`whileHover\`\r
Animate when hovered.\r
\`\`\`jsx\r
<motion.div whileHover={{ scale: 1.1 }} />\r
\`\`\`\r
\r
### \`whileTap\`\r
Animate when tapped/clicked.\r
\`\`\`jsx\r
<motion.div whileTap={{ scale: 0.9 }} />\r
\`\`\`\r
\r
### \`drag\`\r
Make elements draggable.\r
\`\`\`jsx\r
<motion.div drag dragConstraints={{ left: -100, right: 100 }} />\r
\`\`\`\r
\r
---\r
\r
## Variants\r
Reusable animation presets.\r
\`\`\`jsx\r
const variants = {\r
  hidden: { opacity: 0 },\r
  visible: { opacity: 1, transition: { duration: 0.5 } },\r
};\r
\r
<motion.div initial="hidden" animate="visible" variants={variants} />\r
\`\`\`\r
\r
---\r
\r
## Advanced Features\r
### Scroll-based Animations\r
\`\`\`jsx\r
import { motion, useScroll } from "framer-motion";\r
\r
export default function Example() {\r
  const { scrollYProgress } = useScroll();\r
  return <motion.div style={{ scaleX: scrollYProgress }} />;\r
}\r
\`\`\`\r
\r
### Layout Animations\r
\`\`\`jsx\r
<motion.div layout />\r
\`\`\`\r
\r
### Keyframes\r
\`\`\`jsx\r
<motion.div animate={{ x: [0, 100, 0] }} transition={{ duration: 2 }} />\r
\`\`\`\r
\r
---\r
\r
## Performance Optimization\r
- **Lazy Rendering:** Use \`AnimatePresence\` efficiently.\r
- **Reduce Rerenders:** Use \`motion.div\` only where needed.\r
- **Hardware Acceleration:** Leverage \`will-change\` CSS properties.\r
\r
---\r
\r
## Resources\r
- [Official Docs](https://www.framer.com/docs/)\r
- [API Reference](https://www.framer.com/docs/component/)\r
- [Examples](https://codesandbox.io/examples/package/framer-motion)\r
\r
`;export{n as default};
