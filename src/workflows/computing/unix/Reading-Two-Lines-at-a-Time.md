# Reading Two Lines at a Time

To read two lines at a time for a single file, you can use the following code:

```sh
while IFS= read -r code && IFS= read -r name; do
    echo "$code $name"
done < "$subjectpairs" > "$results"
```