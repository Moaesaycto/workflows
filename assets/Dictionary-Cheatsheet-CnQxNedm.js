const n=`# Python Dictionaries\r
\r
## 1. Basics & Notation\r
\r
Dictionaries (\`dict\`) store key-value pairs:\r
\r
\`\`\`python\r
d = {"name": "Alice", "age": 25, "city": "New York"}\r
\`\`\`\r
\r
### Accessing Values\r
\r
\`\`\`python\r
value = d["name"]  # Get value by key\r
value = d.get("age")  # Safe way to get value (returns None if key doesn't exist)\r
\`\`\`\r
\r
### Modifying Dictionary\r
\r
\`\`\`python\r
d["age"] = 26  # Update value\r
d["job"] = "Engineer"  # Add new key-value pair\r
d.update({"country": "USA", "city": "LA"})  # Merge another dictionary\r
\`\`\`\r
\r
### Deleting Keys\r
\r
\`\`\`python\r
d.pop("age")  # Remove key and return value\r
d.popitem()  # Remove and return last inserted key-value pair\r
del d["city"]  # Delete key\r
d.clear()  # Remove all elements\r
\`\`\`\r
\r
## 2. Dictionary Methods\r
\r
\`\`\`python\r
d.keys()  # Get all keys\r
d.values()  # Get all values\r
d.items()  # Get key-value pairs\r
\`\`\`\r
\r
### Iteration\r
\r
\`\`\`python\r
for key in d:\r
    print(key, d[key])  # Iterating over keys\r
\r
for key, value in d.items():\r
    print(key, value)  # Iterating over key-value pairs\r
\`\`\`\r
\r
### Checking Membership\r
\r
\`\`\`python\r
if "name" in d:\r
    print("Exists")\r
\`\`\`\r
\r
## 3. Dictionary Comprehension\r
\r
\`\`\`python\r
squared = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\r
\`\`\`\r
\r
## 4. Technicalities: Mutable Nature\r
\r
Dictionaries are **mutable**, and modifying one affects all references:\r
\r
\`\`\`python\r
d1 = {"a": 1, "b": 2}\r
d2 = d1  # Both reference the same dictionary\r
d2["c"] = 3  # Modifies d1 as well\r
\`\`\`\r
\r
To avoid this, use:\r
\r
\`\`\`python\r
d3 = d1.copy()  # Creates a shallow copy\r
import copy\r
d4 = copy.deepcopy(d1)  # Creates a deep copy (for nested dicts)\r
\`\`\`\r
\r
## 5. Default Values with \`collections.defaultdict\`\r
\r
\`\`\`python\r
from collections import defaultdict\r
dd = defaultdict(int)  # Default value for missing keys is 0\r
dd["missing"] += 1  # No KeyError\r
\`\`\`\r
\r
## 6. OrderedDict (Preserving Insertion Order in Old Python Versions)\r
\r
\`\`\`python\r
from collections import OrderedDict\r
od = OrderedDict([("a", 1), ("b", 2)])\r
\`\`\`\r
\r
(Regular dictionaries maintain order since Python 3.7+)\r
\r
## 7. \`Counter\` for Frequency Counting\r
\r
\`\`\`python\r
from collections import Counter\r
counter = Counter("banana")  # {'b': 1, 'a': 3, 'n': 2}\r
\`\`\`\r
\r
## 8. Merging Dictionaries (Python 3.9+)\r
\r
\`\`\`python\r
d1 = {"a": 1}\r
d2 = {"b": 2}\r
merged = d1 | d2  # {'a': 1, 'b': 2}\r
`;export{n as default};
