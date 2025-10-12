# Making a Simple Loading Spinner

You can make a simple spinner using the following component:

```tsx
import React from "react";

type Props = {
  size?: number | string;
  thickness?: number | string;
  className?: string;
};

export default function Spinner({ size = 24, thickness, className }: Props) {
  const s = typeof size === "number" ? `${size}px` : size;
  const t =
    thickness ??
    (typeof size === "number" ? `${Math.max(2, Math.round(size / 8))}px` : "3px");

  return (
    <span
      aria-label="Loading"
      role="status"
      className={`spinner ${className ?? ""}`}
      style={
        {
          "--size": s,
          "--thickness": t,
        } as React.CSSProperties
      }
    />
  );
}
```

There is a style sheet associated, which dynamically passes the colour down.

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  display: inline-block;
  width: var(--size);
  height: var(--size);
  border: var(--thickness) solid transparent;
  border-top-color: currentColor;
  border-right-color: currentColor;
  border-radius: 50%;
  animation: spin .8s linear infinite;
}
```

## Tailwind

Using Tailwind makes it easier:

```tsx
import React from "react";

type Props = {
  size?: number | string;
  thickness?: number;
  colorClass?: string;
  className?: string;
};

export default function Spinner({
  size = 24,
  thickness = 3,
  colorClass = "text-sky-500",
  className,
}: Props) {
  const s = typeof size === "number" ? `${size}px` : size;

  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-transparent border-solid ${colorClass} ${className ?? ""}`}
      style={{
        width: s,
        height: s,
        borderWidth: thickness,
        // show two coloured sides; uses currentColor from text-*
        borderTopColor: "currentColor",
        borderRightColor: "currentColor",
      }}
    />
  );
}
```