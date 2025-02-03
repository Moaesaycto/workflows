const r=`# Python Arrays (Lists)\r
\r
## 1. Basics & Notation\r
\r
Python does not have built-in arrays like C; instead, it uses **lists**:\r
\r
\`\`\`python\r
arr = [1, 2, 3, 4, 5]  # List definition\r
\`\`\`\r
\r
### Indexing & Slicing\r
\r
\`\`\`python\r
arr[0]    # First element\r
arr[-1]   # Last element\r
arr[1:3]  # Slice from index 1 to 2 (excluding 3)\r
arr[:3]   # First 3 elements\r
arr[2:]   # From index 2 to end\r
arr[::2]  # Every second element\r
arr[::-1] # Reverse list\r
\`\`\`\r
\r
### Copying Lists\r
\r
\`\`\`python\r
copy1 = arr[:]      # Creates a new list\r
copy2 = list(arr)   # Explicit copy\r
copy3 = arr.copy()  # Another copy method\r
\`\`\`\r
\r
## 2. List Methods\r
\r
\`\`\`python\r
arr.append(6)      # Add element at the end\r
arr.extend([7,8])  # Append multiple elements\r
arr.insert(2, 10)  # Insert 10 at index 2\r
arr.remove(3)      # Remove first occurrence of 3\r
arr.pop()          # Remove last element (returns it)\r
arr.pop(1)         # Remove element at index 1\r
arr.index(4)       # Get index of first occurrence of 4\r
arr.count(2)       # Count occurrences of 2\r
arr.sort()         # Sort in ascending order\r
arr.sort(reverse=True) # Sort in descending order\r
arr.reverse()      # Reverse the list\r
arr.clear()        # Empty the list\r
\`\`\`\r
\r
### List Comprehension (Alternative to map/filter)\r
\r
\`\`\`python\r
squared = [x**2 for x in arr]  # List of squares\r
filtered = [x for x in arr if x > 2]  # Filtered list\r
\`\`\`\r
\r
## 3. Technicalities: Mutable vs. Immutable\r
\r
Lists are **mutable** (modifiable in place). Assigning a list to a new variable does **not** create a copy but a reference:\r
\r
\`\`\`python\r
arr1 = [1, 2, 3]\r
arr2 = arr1  # Both point to the same memory location\r
arr2.append(4)  # Modifies arr1 as well\r
\`\`\`\r
\r
To avoid this, use **copying methods** mentioned earlier.\r
\r
### Modifying Lists in Place vs. Creating New Lists\r
\r
\`\`\`python\r
# Modifies the original list\r
arr.sort() \r
arr.reverse()\r
\r
# Creates a new list\r
sorted_arr = sorted(arr)\r
reversed_arr = list(reversed(arr))\r
\`\`\`\r
\r
## 4. Special Cases & Gotchas\r
\r
### Nested Lists\r
\r
\`\`\`python\r
matrix = [[1, 2], [3, 4]]\r
value = matrix[1][0]  # Access nested element (3)\r
\`\`\`\r
\r
### Checking Membership\r
\r
\`\`\`python\r
if 2 in arr: \r
    print("Found")\r
\`\`\`\r
\r
### Unpacking Lists\r
\r
\`\`\`python\r
a, b, *rest = [1, 2, 3, 4]  # a=1, b=2, rest=[3,4]\r
\`\`\`\r
\r
## 5. Alternative to Lists: \`array\` Module\r
\r
For C-style arrays with fixed type:\r
\r
\`\`\`python\r
import array\r
arr = array.array('i', [1, 2, 3, 4])  # 'i' means integer type\r
`;export{r as default};
