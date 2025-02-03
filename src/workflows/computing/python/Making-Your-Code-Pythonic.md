# Writing Pythonic Code: A Complete Guide

## 1. Introduction
Writing **Pythonic** code means using Python’s idiomatic constructs for clarity, efficiency, and readability. This guide covers Python-specific patterns that make code more concise and elegant.

---

## 2. List Comprehensions (Concise Looping)
Instead of:
```python
squares = []
for i in range(10):
    squares.append(i ** 2)
```
Use:
```python
squares = [i ** 2 for i in range(10)]
```

### Filtering with List Comprehensions
```python
even_numbers = [x for x in range(10) if x % 2 == 0]
```

---

## 3. Dictionary & Set Comprehensions
### Dictionary Comprehension
```python
squared_numbers = {x: x ** 2 for x in range(5)}
```

### Set Comprehension
```python
unique_numbers = {x for x in [1, 2, 2, 3, 3, 4]}
```

---

## 4. Unpacking Variables (Tuple and Dictionary Unpacking)
### Tuple Unpacking
```python
a, b, c = (1, 2, 3)  # a=1, b=2, c=3
```

### Extended Unpacking
```python
first, *middle, last = [1, 2, 3, 4, 5]
```

### Dictionary Unpacking
```python
data = {"name": "Alice", "age": 25}
print("User Info:", **data)  # Equivalent to print("User Info:", name="Alice", age=25)
```

---

## 5. Using Enumerate Instead of Range
Instead of:
```python
for i in range(len(items)):
    print(i, items[i])
```
Use:
```python
for i, item in enumerate(items):
    print(i, item)
```

---

## 6. Using Zip to Iterate Multiple Lists
```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

---

## 7. Using `get()` for Dictionary Lookup
Instead of:
```python
if "key" in my_dict:
    value = my_dict["key"]
else:
    value = "default"
```
Use:
```python
value = my_dict.get("key", "default")
```

---

## 8. Using `defaultdict` for Missing Keys
```python
from collections import defaultdict
words = ["apple", "banana", "apple"]
word_count = defaultdict(int)
for word in words:
    word_count[word] += 1
```

---

## 9. Using Namedtuples for Readable Tuples
```python
from collections import namedtuple
Person = namedtuple("Person", ["name", "age"])
alice = Person("Alice", 25)
print(alice.name, alice.age)
```

---

## 10. Using `dataclasses` for Lightweight Classes
```python
from dataclasses import dataclass
@dataclass
class Person:
    name: str
    age: int
```

---

## 11. Using `lambda` for Short Functions
```python
square = lambda x: x ** 2
print(square(4))
```

---

## 12. Using `map()`, `filter()`, and `reduce()`
### `map()` for Transforming Lists
```python
nums = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, nums))
```

### `filter()` for Selecting Elements
```python
evens = list(filter(lambda x: x % 2 == 0, nums))
```

### `reduce()` for Aggregating Results
```python
from functools import reduce
sum_all = reduce(lambda x, y: x + y, nums)
```

---

## 13. Using `any()` and `all()` for Logical Checks
```python
values = [True, False, True]
print(any(values))  # True (if at least one True)
print(all(values))  # False (if all are True)
```

---

## 14. Using Walrus Operator (`:=`) for Assignments in Expressions
Instead of:
```python
data = input("Enter something: ")
while len(data) > 5:
    print("Too long!")
    data = input("Enter again: ")
```
Use:
```python
while (data := input("Enter something: ")) and len(data) > 5:
    print("Too long!")
```

---

## 15. Using `isinstance()` Instead of Type Checking
```python
def process(value):
    if isinstance(value, int):
        print("Processing integer")
```

---

## 16. Using `with` for Resource Management
```python
with open("file.txt", "r") as file:
    content = file.read()
```

---

## 17. Using `try/except/else/finally` for Error Handling
```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print("Success!")
finally:
    print("This always runs!")
```

---

## 18. Using `__slots__` to Optimize Memory in Classes
```python
class Person:
    __slots__ = ["name", "age"]
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

---

## 19. Using `functools.lru_cache` for Caching
```python
from functools import lru_cache

@lru_cache(maxsize=128)
def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)
```

---

## 20. Using F-Strings for String Formatting
```python
name = "Alice"
age = 25
print(f"{name} is {age} years old")
```
