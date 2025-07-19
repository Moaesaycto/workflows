# Cycling Through Files Recursively

```shell
#!/bin/dash

for path in "$@"; do
    if [ -f "$path" ]; then
        echo "$path"
    elif [ -d "$path" ]; then
        find "$path" -type f
    fi
done |
while IFS= read -r file; do
    echo "$file"
done
```