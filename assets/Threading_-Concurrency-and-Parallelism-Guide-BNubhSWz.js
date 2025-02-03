const r=`# Python Concurrency and Parallelism Guide\r
\r
## 1. Introduction\r
\r
Python provides multiple ways to handle concurrency and parallelism:\r
- **Threading**: Lightweight concurrency using threads (I/O-bound tasks).\r
- **Multiprocessing**: True parallelism using multiple processes (CPU-bound tasks).\r
- **Asyncio**: Asynchronous programming for non-blocking I/O operations.\r
\r
---\r
\r
## 2. Threading (Concurrency - I/O Bound)\r
\r
The \`threading\` module allows multiple threads to run in a single process.\r
\r
\`\`\`python\r
import threading\r
import time\r
\r
def task():\r
    print("Task started")\r
    time.sleep(2)\r
    print("Task completed")\r
\r
thread = threading.Thread(target=task)\r
thread.start()\r
thread.join()  # Wait for the thread to finish\r
\`\`\`\r
\r
### Thread Pool\r
Using \`concurrent.futures.ThreadPoolExecutor\` for managing multiple threads efficiently.\r
\r
\`\`\`python\r
from concurrent.futures import ThreadPoolExecutor\r
\r
def task(n):\r
    time.sleep(1)\r
    return f"Task {n} done"\r
\r
with ThreadPoolExecutor(max_workers=5) as executor:\r
    results = executor.map(task, range(5))\r
    print(list(results))\r
\`\`\`\r
\r
---\r
\r
## 3. Multiprocessing (Parallelism - CPU Bound)\r
\r
The \`multiprocessing\` module spawns separate processes, bypassing the Global Interpreter Lock (GIL).\r
\r
\`\`\`python\r
import multiprocessing\r
\r
def square(n):\r
    return n * n\r
\r
with multiprocessing.Pool(processes=4) as pool:\r
    results = pool.map(square, [1, 2, 3, 4])\r
    print(results)\r
\`\`\`\r
\r
### Using \`Process\`\r
\`\`\`python\r
def task():\r
    print("Executing in separate process")\r
\r
p = multiprocessing.Process(target=task)\r
p.start()\r
p.join()\r
\`\`\`\r
\r
---\r
\r
## 4. Asynchronous Programming (\`asyncio\` - Non-blocking I/O)\r
\r
The \`asyncio\` module is ideal for I/O-bound operations such as network requests or database queries.\r
\r
\`\`\`python\r
import asyncio\r
\r
async def async_task():\r
    print("Task started")\r
    await asyncio.sleep(2)\r
    print("Task completed")\r
\r
asyncio.run(async_task())\r
\`\`\`\r
\r
### Running Multiple Tasks Concurrently\r
\`\`\`python\r
async def main():\r
    tasks = [async_task() for _ in range(3)]\r
    await asyncio.gather(*tasks)\r
\r
asyncio.run(main())\r
\`\`\`\r
\r
---\r
\r
## 5. Comparison of Methods\r
\r
| Method | Use Case | Best For |\r
|--------|---------|----------|\r
| Threading | Concurrency | I/O-bound tasks (e.g., file I/O, network requests) |\r
| Multiprocessing | Parallelism | CPU-bound tasks (e.g., data processing, ML) |\r
| Asyncio | Async I/O | High-performance network applications |\r
`;export{r as default};
