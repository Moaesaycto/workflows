const t=`# Replicating Flex Properties in PySide6\r
\r
For this guide, we will be directly comparing the respective CSS features with their PySide6 counterpart.\r
\r
## The Basics\r
\r
PySide6 uses layouts to decide between a row and column\r
\r
\`\`\`css\r
.container {\r
    display: flex;\r
    flex-direction: row; /* Or column */\r
}\r
\`\`\`\r
\r
\`\`\`py\r
from PySide6.QtWidgets import QHBoxLayout, QVBoxLayout\r
\r
row_layout = QHBoxLayout() # flex-direction: row\r
col_layout = QVBoxLayout() # flex-direction: column\r
\`\`\`\r
\r
\r
## Justify Content (Main Axis)\r
\r
\`\`\`css\r
.container {\r
    display: flex\r
    justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;\r
}\r
\`\`\`\r
\r
Creating these need strategic use of the \`addStretch()\` method, which adds an invisible, expandable space that pushes widgets around. Rather than "aligning" things, it more adds dummy fillers to handle taking up available space. We must also use \`addStretch(n)\`, which is considered the **stretch factor** (or weight). So if you use \`.addStretch(1)\` and then \`.addStretch(2)\`, the latter is twice the space obtained from the former. Going through each of the options individually, we can figure out how to replicate this:\r
\r
### \`flex-start\` and \`flex-end\`\r
\r
\`flex-start\` is the default, so just add the widgets. For \`flex-end\`, run \`.addStretch()\` immediately before adding the items.\r
\r
\`\`\`py\r
layout = QHBoxLayout()\r
\r
# flex-start: just add them normally\r
layout.addWidget(widget1)\r
layout.addWidget(widget2)\r
\r
# flex-end: stretch then add them\r
layout.addStretch()\r
layout.addWidget(widget1)\r
layout.addWidget(widget2)\r
\`\`\`\r
\r
### \`center\`\r
\r
Add equal spacing on the ends.\r
\r
\`\`\`py\r
layout = QHBoxLayout()\r
\r
layout.addStretch()\r
layout.addWidget(widget1)\r
layout.addWidget(widget2)\r
layout.addStretch()\r
\`\`\`\r
\r
### \`space-between\`, \`space-around\` and \`space-evenly\`\r
\r
\`\`\`py\r
# justify-content: space-between\r
layout.addWidget(widget1)\r
layout.addStretch()\r
layout.addWidget(widget2)\r
layout.addStretch()\r
layout.addWidget(widget3)\r
\r
# justify-content: space-around (equal space around each)\r
layout.addStretch(1)\r
layout.addWidget(widget1)\r
layout.addStretch(2)\r
layout.addWidget(widget2)\r
layout.addStretch(2)\r
layout.addWidget(widget3)\r
layout.addStretch(1)\r
\r
# justify-content: space-evenly (equal space everywhere)\r
layout.addStretch(1)\r
layout.addWidget(widget1)\r
layout.addStretch(1)\r
layout.addWidget(widget2)\r
layout.addStretch(1)\r
layout.addWidget(widget3)\r
layout.addStretch(1)\r
\`\`\`\r
\r
## Align Items (Cross Axis)\r
\r
\`\`\`css\r
.container {\r
    display: flex;\r
    align-items: flex-start | center | flex-end | stretch;\r
}\r
\`\`\`\r
\r
This one uses constants to handle this\r
\r
\`\`\`py\r
from PySide6.QtCore import Qt\r
\r
layout = QHBoxLayout()\r
\r
# align-items: flex-start\r
layout.setAlignment(Qt.AlignTop)\r
\r
# align-items: center\r
layout.setAlignment(Qt.AlignVCenter)\r
\r
# align-items: flex-end\r
layout.setAlignment(Qt.AlignBottom)\r
\r
# align-items: stretch (default)\r
# Widgets naturally stretch to fill unless constrained\r
\`\`\`\r
\r
You can do it per item as well:\r
\r
\`\`\`py\r
layout = QHBoxLayout()\r
\r
# Align specific widget differently\r
layout.addWidget(label, alignment=Qt.AlignTop)\r
layout.addWidget(button, alignment=Qt.AlignVCenter)\r
layout.addWidget(icon, alignment=Qt.AlignBottom)\r
\`\`\`\r
\r
## Flex Grow (\`flex-1\`, \`flex-2\`, ...)\r
\r
Take up all available space. If multiple items have \`flex-1\`, split the space equally. Note that \`flex-1\` is the equivalent Tailwind class.\r
\r
\`\`\`css\r
.container {\r
    flex: 1 1 0%;\r
}\r
\`\`\`\r
\r
\`\`\`py\r
layout = QHBoxLayout()\r
\r
sidebar = QWidget()\r
content = QWidget()\r
\r
# Sidebar fixed, Content takes remaining space (flex-1)\r
layout.addWidget(sidebar, stretch=0)  # No stretch\r
layout.addWidget(content, stretch=1)  # flex-1\r
\r
# Both flex-1 (equal split)\r
layout.addWidget(sidebar, stretch=1)\r
layout.addWidget(content, stretch=1)\r
\r
# flex-1 vs flex-2 (1:2 ratio)\r
layout.addWidget(sidebar, stretch=1)\r
layout.addWidget(content, stretch=2)\r
\`\`\`\r
\r
This table may help:\r
\r
| Tailwind    | CSS              | PySide6                                       |\r
| ----------- | ---------------- | --------------------------------------------- |\r
| \`flex-1\`    | \`flex: 1 1 0%\`   | \`addWidget(w, stretch=1)\`                     |\r
| \`flex-0\`    | \`flex: 0 0 auto\` | \`addWidget(w, stretch=0)\`                     |\r
| \`flex-auto\` | \`flex: 1 1 auto\` | \`addWidget(w, stretch=1)\` + natural size      |\r
| \`flex-none\` | \`flex: none\`     | \`addWidget(w, stretch=0)\` + \`setFixedWidth()\` |\r
\r
## Gap\r
\r
\`\`\`css\r
.container {\r
    display: flex;\r
    gap: 16px;\r
}\r
\`\`\`\r
\r
This can be done very simply:\r
\r
\`\`\`py\r
layout = QHBoxLayout()\r
layout.setSpacing(16)  # Gap between widgets\r
\`\`\``;export{t as default};
