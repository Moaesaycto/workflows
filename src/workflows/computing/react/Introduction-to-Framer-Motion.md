# Framer Motion Guide

## Introduction
[Framer Motion](https://www.framer.com/motion/) is a powerful animation library for React, offering an easy API for declarative animations with performance optimizations.

---

## Installation
```sh
npm install framer-motion
```

## Basic Usage
```jsx
import { motion } from "framer-motion";

export default function Example() {
  return <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} />;
}
```

---

## Core Components
### `motion`
Wraps HTML elements or React components to enable animations.
```jsx
<motion.div animate={{ x: 100 }} />
```

### `AnimatePresence`
Manages animations when components mount/unmount.
```jsx
import { AnimatePresence, motion } from "framer-motion";

export default function Example({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} />}
    </AnimatePresence>
  );
}
```

### `useAnimation`
Imperative control over animations.
```jsx
import { motion, useAnimation } from "framer-motion";

export default function Example() {
  const controls = useAnimation();
  return (
    <motion.div animate={controls} onClick={() => controls.start({ x: 100 })} />
  );
}
```

---

## Animation Properties
### `animate`
Defines target values.
```jsx
<motion.div animate={{ scale: 1.2, rotate: 90 }} />
```

### `initial`
Starting animation values.
```jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

### `exit`
Animation when component is removed.
```jsx
<motion.div exit={{ y: -50, opacity: 0 }} />
```

### `transition`
Configures timing and easing.
```jsx
<motion.div animate={{ y: 100 }} transition={{ duration: 0.5, ease: "easeInOut" }} />
```

---

## Gestures
### `whileHover`
Animate when hovered.
```jsx
<motion.div whileHover={{ scale: 1.1 }} />
```

### `whileTap`
Animate when tapped/clicked.
```jsx
<motion.div whileTap={{ scale: 0.9 }} />
```

### `drag`
Make elements draggable.
```jsx
<motion.div drag dragConstraints={{ left: -100, right: 100 }} />
```

---

## Variants
Reusable animation presets.
```jsx
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

<motion.div initial="hidden" animate="visible" variants={variants} />
```

---

## Advanced Features
### Scroll-based Animations
```jsx
import { motion, useScroll } from "framer-motion";

export default function Example() {
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} />;
}
```

### Layout Animations
```jsx
<motion.div layout />
```

### Keyframes
```jsx
<motion.div animate={{ x: [0, 100, 0] }} transition={{ duration: 2 }} />
```

---

## Performance Optimization
- **Lazy Rendering:** Use `AnimatePresence` efficiently.
- **Reduce Rerenders:** Use `motion.div` only where needed.
- **Hardware Acceleration:** Leverage `will-change` CSS properties.

---

## Resources
- [Official Docs](https://www.framer.com/docs/)
- [API Reference](https://www.framer.com/docs/component/)
- [Examples](https://codesandbox.io/examples/package/framer-motion)

