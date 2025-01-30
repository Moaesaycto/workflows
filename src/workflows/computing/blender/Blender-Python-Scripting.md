# Simple Blender Python Script

## 1. Open Blender's Scripting Editor
- Click **Scripting** at the top.
- Open a new script.

## 2. Add and Run a Simple Script
Paste the following script to add a cube:

```python
import bpy

# Delete all objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Add a cube
bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 1))
```

- Click **Run Script** to execute.

## 3. Save the Script
- Save it as `my_script.py` for reuse.
- Run it from Blender’s **Text Editor** or via **Blender’s Python API**.
