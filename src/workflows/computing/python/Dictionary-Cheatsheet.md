# Python Dictionaries

## 1. Basics & Notation

Dictionaries (`dict`) store key-value pairs:

```python
d = {"name": "Alice", "age": 25, "city": "New York"}
```

### Accessing Values

```python
value = d["name"]  # Get value by key
value = d.get("age")  # Safe way to get value (returns None if key doesn't exist)
```

### Modifying Dictionary

```python
d["age"] = 26  # Update value
d["job"] = "Engineer"  # Add new key-value pair
d.update({"country": "USA", "city": "LA"})  # Merge another dictionary
```

### Deleting Keys

```python
d.pop("age")  # Remove key and return value
d.popitem()  # Remove and return last inserted key-value pair
del d["city"]  # Delete key
d.clear()  # Remove all elements
```

## 2. Dictionary Methods

```python
d.keys()  # Get all keys
d.values()  # Get all values
d.items()  # Get key-value pairs
```

### Iteration

```python
for key in d:
    print(key, d[key])  # Iterating over keys

for key, value in d.items():
    print(key, value)  # Iterating over key-value pairs
```

### Checking Membership

```python
if "name" in d:
    print("Exists")
```

## 3. Dictionary Comprehension

```python
squared = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

## 4. Technicalities: Mutable Nature

Dictionaries are **mutable**, and modifying one affects all references:

```python
d1 = {"a": 1, "b": 2}
d2 = d1  # Both reference the same dictionary
d2["c"] = 3  # Modifies d1 as well
```

To avoid this, use:

```python
d3 = d1.copy()  # Creates a shallow copy
import copy
d4 = copy.deepcopy(d1)  # Creates a deep copy (for nested dicts)
```

## 5. Default Values with `collections.defaultdict`

```python
from collections import defaultdict
dd = defaultdict(int)  # Default value for missing keys is 0
dd["missing"] += 1  # No KeyError
```

## 6. OrderedDict (Preserving Insertion Order in Old Python Versions)

```python
from collections import OrderedDict
od = OrderedDict([("a", 1), ("b", 2)])
```

(Regular dictionaries maintain order since Python 3.7+)

## 7. `Counter` for Frequency Counting

```python
from collections import Counter
counter = Counter("banana")  # {'b': 1, 'a': 3, 'n': 2}
```

## 8. Merging Dictionaries (Python 3.9+)

```python
d1 = {"a": 1}
d2 = {"b": 2}
merged = d1 | d2  # {'a': 1, 'b': 2}
