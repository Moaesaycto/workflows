# Creating a Basic Search in React (with Typescript)

Let's suppose we have an object of the form:

```typescript
type SearchObject = {
    title: string, // We will be sorting by this attribute
    meta: {...}
}
```

Begin by getting the main list of these objects:

```tsx
const allSearchObjects: SearchObject[] = {...} // Your original list here
```

We need to define a `useState` to keep track of both the objects we want to show as well as the text that is used to filter them.

```tsx
    const [searchObjects, setSearchObjects] = useState<SearchObject[]>(() => {
        const sorted = [...(allSearchObjects)];
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        return sorted;
    });

    const [searchText, setSearchText] = useState<string>();
```

Now, we need to handle a `useEffect` hook to update our list when relevant.

```tsx
useEffect(() => {
    if (!searchText) {
        setSearchObjects(allSearchObjects);
    } else {
        setSearchObjects(
            searchObjects.filter((e) =>
                e.title.toLowerCase().includes(searchText?.toLowerCase() || "") // This is to sort it
            )
        )
    }
}, [searchText]);
```

To actually use this, we need an input:

```tsx
<input type="text" onChange={e => setSearchText(e.target.value)} />
```

Finally, this will be:

```tsx
<ul>
    { articles.map((e, idx) => (<li key={idx}>{e.title}</li>)); }
</ul>
```