const r=`# Simple Blender Python Script\r
\r
## 1. Open Blender's Scripting Editor\r
- Click **Scripting** at the top.\r
- Open a new script.\r
\r
## 2. Add and Run a Simple Script\r
Paste the following script to add a cube:\r
\r
\`\`\`python\r
import bpy\r
\r
# Delete all objects\r
bpy.ops.object.select_all(action='SELECT')\r
bpy.ops.object.delete()\r
\r
# Add a cube\r
bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 1))\r
\`\`\`\r
\r
- Click **Run Script** to execute.\r
\r
## 3. Save the Script\r
- Save it as \`my_script.py\` for reuse.\r
- Run it from Blender’s **Text Editor** or via **Blender’s Python API**.\r
`;export{r as default};
