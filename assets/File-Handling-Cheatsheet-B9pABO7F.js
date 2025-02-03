const n=`# Python File Handling Guide\r
\r
## 1. Basic File Handling\r
\r
### Opening and Closing Files\r
\`\`\`python\r
file = open("example.txt", "r")  # Open file in read mode\r
content = file.read()\r
file.close()  # Always close files after use\r
\`\`\`\r
\r
### Using \`with\` Statement (Best Practice)\r
\`\`\`python\r
with open("example.txt", "r") as file:\r
    content = file.read()  # File is automatically closed\r
\`\`\`\r
\r
### File Modes\r
- \`"r"\` - Read (default, raises error if file doesn’t exist)\r
- \`"w"\` - Write (creates file, overwrites if exists)\r
- \`"a"\` - Append (creates file if doesn’t exist)\r
- \`"x"\` - Exclusive creation mode (fails if file exists)\r
- \`"b"\` - Binary mode (e.g., \`"rb"\`, \`"wb"\`)\r
- \`"t"\` - Text mode (default, e.g., \`"rt"\`, \`"wt"\`)\r
\r
## 2. Reading Files\r
### Reading Entire File\r
\`\`\`python\r
with open("example.txt", "r") as file:\r
    content = file.read()\r
\`\`\`\r
\r
### Reading Line by Line\r
\`\`\`python\r
with open("example.txt", "r") as file:\r
    for line in file:\r
        print(line.strip())\r
\`\`\`\r
\r
### Reading Fixed Number of Characters\r
\`\`\`python\r
with open("example.txt", "r") as file:\r
    content = file.read(10)  # Reads first 10 characters\r
\`\`\`\r
\r
## 3. Writing to Files\r
### Writing (Overwrites File)\r
\`\`\`python\r
with open("example.txt", "w") as file:\r
    file.write("Hello, World!\\n")\r
\`\`\`\r
\r
### Appending to File\r
\`\`\`python\r
with open("example.txt", "a") as file:\r
    file.write("Appending new line\\n")\r
\`\`\`\r
\r
## 4. Working with CSV Files\r
### Reading CSV Files\r
\`\`\`python\r
import csv\r
\r
with open("data.csv", "r") as file:\r
    reader = csv.reader(file)\r
    for row in reader:\r
        print(row)\r
\`\`\`\r
\r
### Writing CSV Files\r
\`\`\`python\r
with open("data.csv", "w", newline='') as file:\r
    writer = csv.writer(file)\r
    writer.writerow(["Name", "Age", "City"])\r
    writer.writerow(["Alice", 30, "New York"])\r
\`\`\`\r
\r
## 5. Working with JSON Files\r
### Reading JSON Files\r
\`\`\`python\r
import json\r
\r
with open("data.json", "r") as file:\r
    data = json.load(file)  # Converts JSON to Python dictionary\r
\`\`\`\r
\r
### Writing JSON Files\r
\`\`\`python\r
data = {"name": "Alice", "age": 30, "city": "New York"}\r
\r
with open("data.json", "w") as file:\r
    json.dump(data, file, indent=4)\r
\`\`\`\r
\r
## 6. Working with XML Files\r
### Reading XML Files\r
\`\`\`python\r
import xml.etree.ElementTree as ET\r
\r
tree = ET.parse("data.xml")\r
root = tree.getroot()\r
for child in root:\r
    print(child.tag, child.text)\r
\`\`\`\r
\r
### Writing XML Files\r
\`\`\`python\r
root = ET.Element("users")\r
user = ET.SubElement(root, "user")\r
name = ET.SubElement(user, "name")\r
name.text = "Alice"\r
\r
tree = ET.ElementTree(root)\r
tree.write("data.xml")\r
\`\`\`\r
\r
## 7. Handling Binary Files\r
### Reading Binary Files\r
\`\`\`python\r
with open("image.jpg", "rb") as file:\r
    data = file.read()\r
\`\`\`\r
\r
### Writing Binary Files\r
\`\`\`python\r
with open("copy.jpg", "wb") as file:\r
    file.write(data)\r
\`\`\`\r
\r
## 8. Exception Handling in File Operations\r
\`\`\`python\r
try:\r
    with open("example.txt", "r") as file:\r
        content = file.read()\r
except FileNotFoundError:\r
    print("File not found!")\r
\`\`\`\r
\r
## 9. File Operations with \`os\` and \`shutil\`\r
### Checking If a File Exists\r
\`\`\`python\r
import os\r
\r
if os.path.exists("example.txt"):\r
    print("File exists")\r
\`\`\`\r
\r
### Deleting a File\r
\`\`\`python\r
os.remove("example.txt")\r
\`\`\`\r
\r
### Creating and Deleting Directories\r
\`\`\`python\r
os.mkdir("new_folder")\r
os.rmdir("new_folder")\r
\`\`\`\r
\r
### Copying and Moving Files\r
\`\`\`python\r
import shutil\r
\r
shutil.copy("source.txt", "destination.txt")\r
shutil.move("file.txt", "new_directory/")\r
\`\`\`\r
`;export{n as default};
