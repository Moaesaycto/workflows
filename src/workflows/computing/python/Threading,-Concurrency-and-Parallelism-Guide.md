# Python Concurrency and Parallelism Guide

## 1. Introduction

Python provides multiple ways to handle concurrency and parallelism:
- **Threading**: Lightweight concurrency using threads (I/O-bound tasks).
- **Multiprocessing**: True parallelism using multiple processes (CPU-bound tasks).
- **Asyncio**: Asynchronous programming for non-blocking I/O operations.

---

## 2. Threading (Concurrency - I/O Bound)

The `threading` module allows multiple threads to run in a single process.

```python
import threading
import time

def task():
    print("Task started")
    time.sleep(2)
    print("Task completed")

thread = threading.Thread(target=task)
thread.start()
thread.join()  # Wait for the thread to finish
```

### Thread Pool
Using `concurrent.futures.ThreadPoolExecutor` for managing multiple threads efficiently.

```python
from concurrent.futures import ThreadPoolExecutor

def task(n):
    time.sleep(1)
    return f"Task {n} done"

with ThreadPoolExecutor(max_workers=5) as executor:
    results = executor.map(task, range(5))
    print(list(results))
```

---

## 3. Multiprocessing (Parallelism - CPU Bound)

The `multiprocessing` module spawns separate processes, bypassing the Global Interpreter Lock (GIL).

```python
import multiprocessing

def square(n):
    return n * n

with multiprocessing.Pool(processes=4) as pool:
    results = pool.map(square, [1, 2, 3, 4])
    print(results)
```

### Using `Process`
```python
def task():
    print("Executing in separate process")

p = multiprocessing.Process(target=task)
p.start()
p.join()
```

---

## 4. Asynchronous Programming (`asyncio` - Non-blocking I/O)

The `asyncio` module is ideal for I/O-bound operations such as network requests or database queries.

```python
import asyncio

async def async_task():
    print("Task started")
    await asyncio.sleep(2)
    print("Task completed")

asyncio.run(async_task())
```

### Running Multiple Tasks Concurrently
```python
async def main():
    tasks = [async_task() for _ in range(3)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

---

## 5. Comparison of Methods

| Method | Use Case | Best For |
|--------|---------|----------|
| Threading | Concurrency | I/O-bound tasks (e.g., file I/O, network requests) |
| Multiprocessing | Parallelism | CPU-bound tasks (e.g., data processing, ML) |
| Asyncio | Async I/O | High-performance network applications |
