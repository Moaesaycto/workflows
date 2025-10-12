const n=`# Making a basic Select Menu\r
\r
Below is a basic example of a dropdown select menu in TypeScript.\r
\r
\`\`\`tsx\r
import React from "react";\r
\r
type Option = { value: string; label: string };\r
\r
type Props = {\r
  options: Option[];\r
  value: string;\r
  onChange: (value: string) => void;\r
  className?: string;\r
  width?: number | string;\r
};\r
\r
export default function Select({\r
  options,\r
  value,\r
  onChange,\r
  className,\r
  width = 160,\r
}: Props) {\r
  const w = typeof width === "number" ? \`\${width}px\` : width;\r
\r
  return (\r
    <>\r
      <select\r
        className={\`\${className ?? ""}\`}\r
        style={{ width: w }}\r
        value={value}\r
        onChange={(e) => onChange(e.target.value)}\r
      >\r
        {options.map((opt) => (\r
          <option key={opt.value} value={opt.value}>\r
            {opt.label}\r
          </option>\r
        ))}\r
      </select>\r
    </>\r
  );\r
}\r
\`\`\`\r
\r
You can do it in Tailwind like this:\r
\r
\`\`\`tsx\r
import React from "react";\r
\r
type Option = { value: string; label: string };\r
\r
type Props = {\r
  options: Option[];\r
  value: string;\r
  onChange: (v: string) => void;\r
  className?: string;\r
};\r
\r
export default function Select({ options, value, onChange, className }: Props) {\r
  return (\r
    <select\r
      value={value}\r
      onChange={(e) => onChange(e.target.value)}\r
      className={\`bg-transparent text-sm \${className ?? ""}\`}\r
    >\r
      {options.map((o) => (\r
        <option key={o.value} value={o.value}>\r
          {o.label}\r
        </option>\r
      ))}\r
    </select>\r
  );\r
}\r
\r
\`\`\`\r
\r
To use it, you can use the following:\r
\r
\`\`\`tsx\r
<SpinnerTW size={32} thickness={4} colorClass="text-purple-500" />\r
<SelectTW\r
  value="b"\r
  onChange={(v) => console.log(v)}\r
  options={[{value:"a",label:"A"},{value:"b",label:"B"},{value:"c",label:"C"}]}\r
/>\r
\`\`\`\r
`;export{n as default};
