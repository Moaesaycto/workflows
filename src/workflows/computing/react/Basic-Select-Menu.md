# Making a basic Select Menu

Below is a basic example of a dropdown select menu in TypeScript.

```tsx
import React from "react";

type Option = { value: string; label: string };

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  width?: number | string;
};

export default function Select({
  options,
  value,
  onChange,
  className,
  width = 160,
}: Props) {
  const w = typeof width === "number" ? `${width}px` : width;

  return (
    <>
      <select
        className={`${className ?? ""}`}
        style={{ width: w }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}
```

You can do it in Tailwind like this:

```tsx
import React from "react";

type Option = { value: string; label: string };

type Props = {
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
};

export default function Select({ options, value, onChange, className }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`bg-transparent text-sm ${className ?? ""}`}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

```

To use it, you can use the following:

```tsx
<SpinnerTW size={32} thickness={4} colorClass="text-purple-500" />
<SelectTW
  value="b"
  onChange={(v) => console.log(v)}
  options={[{value:"a",label:"A"},{value:"b",label:"B"},{value:"c",label:"C"}]}
/>
```
