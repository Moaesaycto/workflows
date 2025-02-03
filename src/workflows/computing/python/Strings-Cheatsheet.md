# Python Strings: A Complete Guide

## 1. Introduction to Strings
A string in Python is a sequence of characters enclosed in single (`'`), double (`"`), or triple (`'''` or `"""`) quotes.

```python
s1 = 'Hello'
s2 = "World"
s3 = '''Multiline
string'''
```

---

## 2. String Operations
### Concatenation
```python
s1 = "Hello"
s2 = "World"
result = s1 + " " + s2  # "Hello World"
```

### Repeating Strings
```python
repeat_str = "Ha" * 3  # "HaHaHa"
```

### String Length
```python
length = len("Python")  # 6
```

---

## 3. String Indexing and Slicing
### Indexing
```python
s = "Python"
first_char = s[0]  # 'P'
last_char = s[-1]  # 'n'
```

### Slicing
```python
substring = s[0:4]  # 'Pyth'
reverse_str = s[::-1]  # 'nohtyP'
```

---

## 4. String Methods
### Changing Case
```python
s = "hello world"
upper_s = s.upper()  # "HELLO WORLD"
lower_s = s.lower()  # "hello world"
title_s = s.title()  # "Hello World"
```

### Checking String Content
```python
s = "Python123"
is_alpha = s.isalpha()  # False (Contains numbers)
is_digit = "1234".isdigit()  # True
```

### Stripping Whitespace
```python
s = "  hello  "
trimmed = s.strip()  # "hello"
```

### Finding and Replacing
```python
s = "Hello, World!"
found_index = s.find("World")  # 7
replaced = s.replace("World", "Python")  # "Hello, Python!"
```

### Splitting and Joining Strings
```python
s = "apple,banana,orange"
words = s.split(",")  # ['apple', 'banana', 'orange']
joined = "-".join(words)  # "apple-banana-orange"
```

---

## 5. Formatting Strings
### f-strings (Python 3.6+)
```python
name = "Alice"
age = 25
formatted = f"My name is {name} and I am {age} years old."
```

### `.format()` Method
```python
formatted = "My name is {} and I am {} years old.".format(name, age)
```

### Old-Style Formatting
```python
formatted = "My name is %s and I am %d years old." % (name, age)
```

---

## 6. String Encoding and Decoding
### Encoding to Bytes
```python
s = "Hello"
encoded = s.encode("utf-8")  # b'Hello'
```

### Decoding from Bytes
```python
decoded = encoded.decode("utf-8")  # "Hello"
```

---

## 7. String Comparison and Membership
### String Comparison
```python
result = "apple" == "banana"  # False
```

### Checking Substring Presence
```python
s = "Hello, World!"
contains = "World" in s  # True
```

---

## 8. Multiline Strings
```python
multi_line = """This is
a multiline
string."""
```

---

## 9. Escape Characters
```python
escaped = "This is a newline:\nNew line here"
```

---

## 10. Raw Strings (Ignoring Escape Characters)
```python
raw_string = r"C:\new_folder"
```
