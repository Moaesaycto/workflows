# Updating the Title of a React Document Dynamically

You know the name of the website that appears in the actual tab being shown on your browser? That's what we want to use. Now, you *could* use [helmet](https://www.npmjs.com/package/react-helmet) or the [async equivalent](https://www.npmjs.com/package/react-helmet-async), but for this, we'll make our own hook.

Simply create the custom wrapper around the `document.title` property:

```javascript
import { useEffect } from "react";

export function useTitle(title: string) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
```