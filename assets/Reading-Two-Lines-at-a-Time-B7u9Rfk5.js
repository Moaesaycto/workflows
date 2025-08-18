const e=`# Reading Two Lines at a Time\r
\r
To read two lines at a time for a single file, you can use the following code:\r
\r
\`\`\`sh\r
while IFS= read -r code && IFS= read -r name; do\r
    echo "$code $name"\r
done < "$subjectpairs" > "$results"\r
\`\`\``;export{e as default};
