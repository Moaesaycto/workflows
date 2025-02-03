const r=`# Python Data Structures and Algorithms Guide\r
\r
## 1. Basic Data Structures\r
\r
### Lists (Dynamic Arrays)\r
\`\`\`python\r
lst = [1, 2, 3]\r
lst.append(4)   # Add element\r
lst.pop()       # Remove last element\r
lst[1] = 99     # Modify element\r
\`\`\`\r
\r
### Tuples (Immutable Sequences)\r
\`\`\`python\r
tpl = (1, 2, 3)\r
first, second, third = tpl  # Unpacking\r
\`\`\`\r
\r
### Sets (Unique Elements)\r
\`\`\`python\r
s = {1, 2, 3, 3}\r
s.add(4)\r
s.remove(2)\r
\`\`\`\r
\r
### Dictionaries (Hash Maps)\r
\`\`\`python\r
d = {"name": "Alice", "age": 25}\r
d["city"] = "New York"\r
\`\`\`\r
\r
---\r
\r
## 2. Stacks (LIFO)\r
\`\`\`python\r
stack = []\r
stack.append(1)  # Push\r
stack.append(2)\r
stack.pop()      # Pop\r
\`\`\`\r
\r
Using \`collections.deque\` for efficient stack operations:\r
\`\`\`python\r
from collections import deque\r
stack = deque()\r
stack.append(1)\r
stack.pop()\r
\`\`\`\r
\r
---\r
\r
## 3. Queues (FIFO)\r
Using \`collections.deque\`:\r
\`\`\`python\r
queue = deque()\r
queue.append(1)  # Enqueue\r
queue.popleft()  # Dequeue\r
\`\`\`\r
\r
Using \`queue.Queue\` (Thread-Safe):\r
\`\`\`python\r
from queue import Queue\r
q = Queue()\r
q.put(1)\r
q.get()\r
\`\`\`\r
\r
---\r
\r
## 4. Linked Lists\r
\`\`\`python\r
class Node:\r
    def __init__(self, data):\r
        self.data = data\r
        self.next = None\r
\r
class LinkedList:\r
    def __init__(self):\r
        self.head = None\r
\`\`\`\r
\r
---\r
\r
## 5. Hash Tables (Dictionaries in Python)\r
\`\`\`python\r
d = {"key": "value"}\r
d["new_key"] = "new_value"\r
\`\`\`\r
\r
---\r
\r
## 6. Trees\r
### Binary Tree\r
\`\`\`python\r
class TreeNode:\r
    def __init__(self, value):\r
        self.value = value\r
        self.left = None\r
        self.right = None\r
\`\`\`\r
\r
### Binary Search Tree (BST)\r
\`\`\`python\r
class BST:\r
    def __init__(self):\r
        self.root = None\r
\`\`\`\r
\r
---\r
\r
## 7. Graphs\r
Using adjacency list representation:\r
\`\`\`python\r
from collections import defaultdict\r
\r
graph = defaultdict(list)\r
graph[1].append(2)\r
graph[2].append(3)\r
\`\`\`\r
\r
---\r
\r
## 8. Sorting Algorithms\r
### Bubble Sort\r
\`\`\`python\r
def bubble_sort(arr):\r
    n = len(arr)\r
    for i in range(n):\r
        for j in range(0, n-i-1):\r
            if arr[j] > arr[j+1]:\r
                arr[j], arr[j+1] = arr[j+1], arr[j]\r
\`\`\`\r
\r
### Merge Sort\r
\`\`\`python\r
def merge_sort(arr):\r
    if len(arr) > 1:\r
        mid = len(arr) // 2\r
        left = arr[:mid]\r
        right = arr[mid:]\r
        merge_sort(left)\r
        merge_sort(right)\r
\`\`\`\r
\r
---\r
\r
## 9. Searching Algorithms\r
### Linear Search\r
\`\`\`python\r
def linear_search(arr, target):\r
    for i, num in enumerate(arr):\r
        if num == target:\r
            return i\r
    return -1\r
\`\`\`\r
\r
### Binary Search (Only for Sorted Arrays)\r
\`\`\`python\r
def binary_search(arr, target):\r
    left, right = 0, len(arr) - 1\r
    while left <= right:\r
        mid = (left + right) // 2\r
        if arr[mid] == target:\r
            return mid\r
        elif arr[mid] < target:\r
            left = mid + 1\r
        else:\r
            right = mid - 1\r
    return -1\r
\`\`\`\r
\r
---\r
\r
## 10. Dynamic Programming (Memoization)\r
\`\`\`python\r
from functools import lru_cache\r
\r
@lru_cache(None)\r
def fibonacci(n):\r
    if n < 2:\r
        return n\r
    return fibonacci(n-1) + fibonacci(n-2)\r
\`\`\`\r
`;export{r as default};
