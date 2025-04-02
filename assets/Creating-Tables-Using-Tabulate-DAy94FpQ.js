const n=`# Using Tabulate in Python (Quick Guide)\r
\r
\`tabulate\` lets you print neatly formatted tables in the terminal or as plain text.\r
\r
## Installation\r
\r
\`\`\`bash\r
pip install tabulate\r
\`\`\`\r
\r
## Basic Usage\r
\r
\`\`\`python\r
from tabulate import tabulate\r
\r
data = [\r
    ["Alice", 24],\r
    ["Bob", 19],\r
    ["Charlie", 31]\r
]\r
headers = ["Name", "Age"]\r
\r
print(tabulate(data, headers=headers))\r
\`\`\`\r
\r
### Output:\r
\`\`\`\r
Name      Age\r
-------  -----\r
Alice      24\r
Bob        19\r
Charlie    31\r
\`\`\`\r
\r
## Table Formats\r
\r
You can change how the table looks with \`tablefmt\`:\r
\r
\`\`\`python\r
print(tabulate(data, headers, tablefmt="grid"))\r
\`\`\`\r
\r
Other formats include:\r
- \`"plain"\`\r
- \`"simple"\`\r
- \`"github"\`\r
- \`"grid"\`\r
- \`"fancy_grid"\`\r
- \`"pipe"\` (good for Markdown)\r
- \`"html"\` (for web)\r
\r
## Tips\r
\r
- Works with lists of lists, dicts, or objects.\r
- You can align columns with \`stralign\` or \`numalign\`.\r
\r
\`\`\`python\r
print(tabulate(data, headers, stralign="right"))\r
\`\`\`\r
`;export{n as default};
