

# Setting Up MathJax in a React Project

## Install Dependencies

Run the following command:
```sh
npm install better-react-mathjax
```
or
```sh
yarn add better-react-mathjax
```

---

## Basic Usage
Wrap your app (or a component) with `<MathJaxContext>` and use `<MathJax>` inside it:
```tsx
import { MathJax, MathJaxContext } from "better-react-mathjax";

const MathComponent = () => (
  <MathJaxContext>
    <MathJax>{"\\(E = mc^2\\)"}</MathJax>
  </MathJaxContext>
);

export default MathComponent;
```
Supports both inline (`\( ... \)`) and block (`\[ ... \]`) math.

---

## Configuring MathJax
To enable additional LaTeX features (e.g., `\boldsymbol`, `\align`), pass a custom config:
```tsx
const mathJaxConfig = {
  tex: {
    packages: { "[+]": ["base", "autoload", "mathtools"] }, // Loads extra math features
  },
};

<MathJaxContext config={mathJaxConfig}>
  <MathJax>{"\\boldsymbol{x} = 5"}</MathJax>
</MathJaxContext>;
```

You may experience trouble with this, unfortunately. When a good solution is found, this page will be updated.

---

## Handling Markdown with MathJax
If using **ReactMarkdown**, integrate MathJax like this:
```tsx
<MathJaxContext config={mathJaxConfig}>
  <ReactMarkdown
    remarkPlugins={[remarkMath]}
    components={{
      p: ({ children }) => <MathJax dynamic>{children}</MathJax>,
    }}
  >
    {markdownContent}
  </ReactMarkdown>
</MathJaxContext>;
```

---

More will be added to this article in the future.