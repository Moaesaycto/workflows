# Python Arrays (Lists)

## 1. Basics & Notation

Python does not have built-in arrays like C; instead, it uses **lists**:

```python
arr = [1, 2, 3, 4, 5]  # List definition
```

### Indexing & Slicing

```python
arr[0]    # First element
arr[-1]   # Last element
arr[1:3]  # Slice from index 1 to 2 (excluding 3)
arr[:3]   # First 3 elements
arr[2:]   # From index 2 to end
arr[::2]  # Every second element
arr[::-1] # Reverse list
```

### Copying Lists

```python
copy1 = arr[:]      # Creates a new list
copy2 = list(arr)   # Explicit copy
copy3 = arr.copy()  # Another copy method
```

## 2. List Methods

```python
arr.append(6)      # Add element at the end
arr.extend([7,8])  # Append multiple elements
arr.insert(2, 10)  # Insert 10 at index 2
arr.remove(3)      # Remove first occurrence of 3
arr.pop()          # Remove last element (returns it)
arr.pop(1)         # Remove element at index 1
arr.index(4)       # Get index of first occurrence of 4
arr.count(2)       # Count occurrences of 2
arr.sort()         # Sort in ascending order
arr.sort(reverse=True) # Sort in descending order
arr.reverse()      # Reverse the list
arr.clear()        # Empty the list
```

### List Comprehension (Alternative to map/filter)

```python
squared = [x**2 for x in arr]  # List of squares
filtered = [x for x in arr if x > 2]  # Filtered list
```

## 3. Technicalities: Mutable vs. Immutable

Lists are **mutable** (modifiable in place). Assigning a list to a new variable does **not** create a copy but a reference:

```python
arr1 = [1, 2, 3]
arr2 = arr1  # Both point to the same memory location
arr2.append(4)  # Modifies arr1 as well
```

To avoid this, use **copying methods** mentioned earlier.

### Modifying Lists in Place vs. Creating New Lists

```python
# Modifies the original list
arr.sort() 
arr.reverse()

# Creates a new list
sorted_arr = sorted(arr)
reversed_arr = list(reversed(arr))
```

## 4. Special Cases & Gotchas

### Nested Lists

```python
matrix = [[1, 2], [3, 4]]
value = matrix[1][0]  # Access nested element (3)
```

### Checking Membership

```python
if 2 in arr: 
    print("Found")
```

### Unpacking Lists

```python
a, b, *rest = [1, 2, 3, 4]  # a=1, b=2, rest=[3,4]
```

## 5. Alternative to Lists: `array` Module

For C-style arrays with fixed type:

```python
import array
arr = array.array('i', [1, 2, 3, 4])  # 'i' means integer type
