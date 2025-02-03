# Python Data Structures and Algorithms Guide

## 1. Basic Data Structures

### Lists (Dynamic Arrays)
```python
lst = [1, 2, 3]
lst.append(4)   # Add element
lst.pop()       # Remove last element
lst[1] = 99     # Modify element
```

### Tuples (Immutable Sequences)
```python
tpl = (1, 2, 3)
first, second, third = tpl  # Unpacking
```

### Sets (Unique Elements)
```python
s = {1, 2, 3, 3}
s.add(4)
s.remove(2)
```

### Dictionaries (Hash Maps)
```python
d = {"name": "Alice", "age": 25}
d["city"] = "New York"
```

---

## 2. Stacks (LIFO)
```python
stack = []
stack.append(1)  # Push
stack.append(2)
stack.pop()      # Pop
```

Using `collections.deque` for efficient stack operations:
```python
from collections import deque
stack = deque()
stack.append(1)
stack.pop()
```

---

## 3. Queues (FIFO)
Using `collections.deque`:
```python
queue = deque()
queue.append(1)  # Enqueue
queue.popleft()  # Dequeue
```

Using `queue.Queue` (Thread-Safe):
```python
from queue import Queue
q = Queue()
q.put(1)
q.get()
```

---

## 4. Linked Lists
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
```

---

## 5. Hash Tables (Dictionaries in Python)
```python
d = {"key": "value"}
d["new_key"] = "new_value"
```

---

## 6. Trees
### Binary Tree
```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

### Binary Search Tree (BST)
```python
class BST:
    def __init__(self):
        self.root = None
```

---

## 7. Graphs
Using adjacency list representation:
```python
from collections import defaultdict

graph = defaultdict(list)
graph[1].append(2)
graph[2].append(3)
```

---

## 8. Sorting Algorithms
### Bubble Sort
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

### Merge Sort
```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]
        merge_sort(left)
        merge_sort(right)
```

---

## 9. Searching Algorithms
### Linear Search
```python
def linear_search(arr, target):
    for i, num in enumerate(arr):
        if num == target:
            return i
    return -1
```

### Binary Search (Only for Sorted Arrays)
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

---

## 10. Dynamic Programming (Memoization)
```python
from functools import lru_cache

@lru_cache(None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```
