const n=`# Cycling Through Files Recursively\r
\r
\`\`\`shell\r
#!/bin/dash\r
\r
for path in "$@"; do\r
    if [ -f "$path" ]; then\r
        echo "$path"\r
    elif [ -d "$path" ]; then\r
        find "$path" -type f\r
    fi\r
done |\r
while IFS= read -r file; do\r
    echo "$file"\r
done\r
\`\`\``;export{n as default};
