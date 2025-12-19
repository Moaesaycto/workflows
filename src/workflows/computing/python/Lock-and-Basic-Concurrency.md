# Locking and Basic Concurrency in Python

All services in this are from the `threading` module, so make sure to import that at the top. It is a built in python module.

# Lock

* **What**: Mutual-exclusion (binary) lock.
* **Use when**: Protecting a single shared resource or critical section.

```py
lock = threading.Lock()
with lock:
    # update shared state
```

# RLock (re-entrant lock)

* **What**: Lock the same thread can acquire multiple times.
* **Use when**: Functions that call other lock-using functions (nested/recursive).

```py
lock = threading.RLock()
def f():
    with lock:
        g()
def g():
    with lock:
        ...
```

# Semaphore

* **What**: Counter-based permit; up to *N* concurrent holders.
* **Use when**: Limit parallel access (e.g., pool of 5 DB connections).

```py
sem = threading.Semaphore(5)
with sem:
    # do limited work
```

# BoundedSemaphore

* **What**: Semaphore that raises if `release()` would exceed the initial count.
* **Use when**: You want safety against over-release bugs.

```py
sem = threading.BoundedSemaphore(3)
with sem:
    ...
```

# Event

* **What**: One-to-many flag you can `set()`/`clear()`; waiters block on it.
* **Use when**: Simple signalling—start/stop, “ready”, cancellation.

```py
stop = threading.Event()

def worker():
    while not stop.is_set():
        do_work()

# later:
stop.set()  # ask threads to stop
```

# Condition

* **What**: Lock + wait/notify with a predicate.
* **Use when**: Coordinating on state changes (producer/consumer, queues, thresholds).

```py
cond = threading.Condition()
items = []

def producer(x):
    with cond:
        items.append(x)
        cond.notify()          # signal a state change

def consumer():
    with cond:
        while not items:       # always use a loop
            cond.wait()
        x = items.pop()
```

# Barrier

* **What**: All threads wait until *parties* arrive, then all proceed.
* **Use when**: Phase/round synchronisation across a fixed group.

```py
bar = threading.Barrier(parties=4)
def phase():
    do_part()
    bar.wait()   # block until all 4 reached here
```

# Practical rules of thumb

* Prefer `Lock` for simple shared data; use `RLock` only if re-entry is genuinely needed.
* Use `Semaphore/BoundedSemaphore` to cap concurrency; pick `BoundedSemaphore` to catch logic errors.
* Use `Event` for simple signals; use `Condition` when waiting on a specific state/predicate.
* Use `Barrier` for phased algorithms where all threads must rendezvous.
* Always acquire via `with`, add timeouts where sensible, and keep critical sections tiny to avoid contention/deadlocks.
* For producer–consumer pipelines, the `queue.Queue` module is simpler and safer than rolling your own with `Condition`.
* For “run N functions in parallel”, prefer `concurrent.futures.ThreadPoolExecutor`.
* CPU-bound work: threads won’t beat the GIL—use `multiprocessing`; I/O-bound: threads (or `asyncio`) are fine.

If you want, I can tailor examples to your specific use case (e.g., limiting API calls, coordinating audio threads, etc.).
