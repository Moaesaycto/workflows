# Python File Handling Guide

## 1. Basic File Handling

### Opening and Closing Files
```python
file = open("example.txt", "r")  # Open file in read mode
content = file.read()
file.close()  # Always close files after use
```

### Using `with` Statement (Best Practice)
```python
with open("example.txt", "r") as file:
    content = file.read()  # File is automatically closed
```

### File Modes
- `"r"` - Read (default, raises error if file doesn’t exist)
- `"w"` - Write (creates file, overwrites if exists)
- `"a"` - Append (creates file if doesn’t exist)
- `"x"` - Exclusive creation mode (fails if file exists)
- `"b"` - Binary mode (e.g., `"rb"`, `"wb"`)
- `"t"` - Text mode (default, e.g., `"rt"`, `"wt"`)

## 2. Reading Files
### Reading Entire File
```python
with open("example.txt", "r") as file:
    content = file.read()
```

### Reading Line by Line
```python
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())
```

### Reading Fixed Number of Characters
```python
with open("example.txt", "r") as file:
    content = file.read(10)  # Reads first 10 characters
```

## 3. Writing to Files
### Writing (Overwrites File)
```python
with open("example.txt", "w") as file:
    file.write("Hello, World!\n")
```

### Appending to File
```python
with open("example.txt", "a") as file:
    file.write("Appending new line\n")
```

## 4. Working with CSV Files
### Reading CSV Files
```python
import csv

with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```

### Writing CSV Files
```python
with open("data.csv", "w", newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Alice", 30, "New York"])
```

## 5. Working with JSON Files
### Reading JSON Files
```python
import json

with open("data.json", "r") as file:
    data = json.load(file)  # Converts JSON to Python dictionary
```

### Writing JSON Files
```python
data = {"name": "Alice", "age": 30, "city": "New York"}

with open("data.json", "w") as file:
    json.dump(data, file, indent=4)
```

## 6. Working with XML Files
### Reading XML Files
```python
import xml.etree.ElementTree as ET

tree = ET.parse("data.xml")
root = tree.getroot()
for child in root:
    print(child.tag, child.text)
```

### Writing XML Files
```python
root = ET.Element("users")
user = ET.SubElement(root, "user")
name = ET.SubElement(user, "name")
name.text = "Alice"

tree = ET.ElementTree(root)
tree.write("data.xml")
```

## 7. Handling Binary Files
### Reading Binary Files
```python
with open("image.jpg", "rb") as file:
    data = file.read()
```

### Writing Binary Files
```python
with open("copy.jpg", "wb") as file:
    file.write(data)
```

## 8. Exception Handling in File Operations
```python
try:
    with open("example.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
```

## 9. File Operations with `os` and `shutil`
### Checking If a File Exists
```python
import os

if os.path.exists("example.txt"):
    print("File exists")
```

### Deleting a File
```python
os.remove("example.txt")
```

### Creating and Deleting Directories
```python
os.mkdir("new_folder")
os.rmdir("new_folder")
```

### Copying and Moving Files
```python
import shutil

shutil.copy("source.txt", "destination.txt")
shutil.move("file.txt", "new_directory/")
```
