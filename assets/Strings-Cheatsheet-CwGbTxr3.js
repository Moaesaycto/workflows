const n=`# Python Strings: A Complete Guide\r
\r
## 1. Introduction to Strings\r
A string in Python is a sequence of characters enclosed in single (\`'\`), double (\`"\`), or triple (\`'''\` or \`"""\`) quotes.\r
\r
\`\`\`python\r
s1 = 'Hello'\r
s2 = "World"\r
s3 = '''Multiline\r
string'''\r
\`\`\`\r
\r
---\r
\r
## 2. String Operations\r
### Concatenation\r
\`\`\`python\r
s1 = "Hello"\r
s2 = "World"\r
result = s1 + " " + s2  # "Hello World"\r
\`\`\`\r
\r
### Repeating Strings\r
\`\`\`python\r
repeat_str = "Ha" * 3  # "HaHaHa"\r
\`\`\`\r
\r
### String Length\r
\`\`\`python\r
length = len("Python")  # 6\r
\`\`\`\r
\r
---\r
\r
## 3. String Indexing and Slicing\r
### Indexing\r
\`\`\`python\r
s = "Python"\r
first_char = s[0]  # 'P'\r
last_char = s[-1]  # 'n'\r
\`\`\`\r
\r
### Slicing\r
\`\`\`python\r
substring = s[0:4]  # 'Pyth'\r
reverse_str = s[::-1]  # 'nohtyP'\r
\`\`\`\r
\r
---\r
\r
## 4. String Methods\r
### Changing Case\r
\`\`\`python\r
s = "hello world"\r
upper_s = s.upper()  # "HELLO WORLD"\r
lower_s = s.lower()  # "hello world"\r
title_s = s.title()  # "Hello World"\r
\`\`\`\r
\r
### Checking String Content\r
\`\`\`python\r
s = "Python123"\r
is_alpha = s.isalpha()  # False (Contains numbers)\r
is_digit = "1234".isdigit()  # True\r
\`\`\`\r
\r
### Stripping Whitespace\r
\`\`\`python\r
s = "  hello  "\r
trimmed = s.strip()  # "hello"\r
\`\`\`\r
\r
### Finding and Replacing\r
\`\`\`python\r
s = "Hello, World!"\r
found_index = s.find("World")  # 7\r
replaced = s.replace("World", "Python")  # "Hello, Python!"\r
\`\`\`\r
\r
### Splitting and Joining Strings\r
\`\`\`python\r
s = "apple,banana,orange"\r
words = s.split(",")  # ['apple', 'banana', 'orange']\r
joined = "-".join(words)  # "apple-banana-orange"\r
\`\`\`\r
\r
---\r
\r
## 5. Formatting Strings\r
### f-strings (Python 3.6+)\r
\`\`\`python\r
name = "Alice"\r
age = 25\r
formatted = f"My name is {name} and I am {age} years old."\r
\`\`\`\r
\r
### \`.format()\` Method\r
\`\`\`python\r
formatted = "My name is {} and I am {} years old.".format(name, age)\r
\`\`\`\r
\r
### Old-Style Formatting\r
\`\`\`python\r
formatted = "My name is %s and I am %d years old." % (name, age)\r
\`\`\`\r
\r
---\r
\r
## 6. String Encoding and Decoding\r
### Encoding to Bytes\r
\`\`\`python\r
s = "Hello"\r
encoded = s.encode("utf-8")  # b'Hello'\r
\`\`\`\r
\r
### Decoding from Bytes\r
\`\`\`python\r
decoded = encoded.decode("utf-8")  # "Hello"\r
\`\`\`\r
\r
---\r
\r
## 7. String Comparison and Membership\r
### String Comparison\r
\`\`\`python\r
result = "apple" == "banana"  # False\r
\`\`\`\r
\r
### Checking Substring Presence\r
\`\`\`python\r
s = "Hello, World!"\r
contains = "World" in s  # True\r
\`\`\`\r
\r
---\r
\r
## 8. Multiline Strings\r
\`\`\`python\r
multi_line = """This is\r
a multiline\r
string."""\r
\`\`\`\r
\r
---\r
\r
## 9. Escape Characters\r
\`\`\`python\r
escaped = "This is a newline:\\nNew line here"\r
\`\`\`\r
\r
---\r
\r
## 10. Raw Strings (Ignoring Escape Characters)\r
\`\`\`python\r
raw_string = r"C:\\new_folder"\r
\`\`\`\r
`;export{n as default};
