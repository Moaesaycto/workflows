const r=`# Locking and Basic Concurrency in Python\r
\r
All services in this are from the \`threading\` module, so make sure to import that at the top. It is a built in python module.\r
\r
# Lock\r
\r
* **What**: Mutual-exclusion (binary) lock.\r
* **Use when**: Protecting a single shared resource or critical section.\r
\r
\`\`\`py\r
lock = threading.Lock()\r
with lock:\r
    # update shared state\r
\`\`\`\r
\r
# RLock (re-entrant lock)\r
\r
* **What**: Lock the same thread can acquire multiple times.\r
* **Use when**: Functions that call other lock-using functions (nested/recursive).\r
\r
\`\`\`py\r
lock = threading.RLock()\r
def f():\r
    with lock:\r
        g()\r
def g():\r
    with lock:\r
        ...\r
\`\`\`\r
\r
# Semaphore\r
\r
* **What**: Counter-based permit; up to *N* concurrent holders.\r
* **Use when**: Limit parallel access (e.g., pool of 5 DB connections).\r
\r
\`\`\`py\r
sem = threading.Semaphore(5)\r
with sem:\r
    # do limited work\r
\`\`\`\r
\r
# BoundedSemaphore\r
\r
* **What**: Semaphore that raises if \`release()\` would exceed the initial count.\r
* **Use when**: You want safety against over-release bugs.\r
\r
\`\`\`py\r
sem = threading.BoundedSemaphore(3)\r
with sem:\r
    ...\r
\`\`\`\r
\r
# Event\r
\r
* **What**: One-to-many flag you can \`set()\`/\`clear()\`; waiters block on it.\r
* **Use when**: Simple signalling—start/stop, “ready”, cancellation.\r
\r
\`\`\`py\r
stop = threading.Event()\r
\r
def worker():\r
    while not stop.is_set():\r
        do_work()\r
\r
# later:\r
stop.set()  # ask threads to stop\r
\`\`\`\r
\r
# Condition\r
\r
* **What**: Lock + wait/notify with a predicate.\r
* **Use when**: Coordinating on state changes (producer/consumer, queues, thresholds).\r
\r
\`\`\`py\r
cond = threading.Condition()\r
items = []\r
\r
def producer(x):\r
    with cond:\r
        items.append(x)\r
        cond.notify()          # signal a state change\r
\r
def consumer():\r
    with cond:\r
        while not items:       # always use a loop\r
            cond.wait()\r
        x = items.pop()\r
\`\`\`\r
\r
# Barrier\r
\r
* **What**: All threads wait until *parties* arrive, then all proceed.\r
* **Use when**: Phase/round synchronisation across a fixed group.\r
\r
\`\`\`py\r
bar = threading.Barrier(parties=4)\r
def phase():\r
    do_part()\r
    bar.wait()   # block until all 4 reached here\r
\`\`\`\r
\r
# Practical rules of thumb\r
\r
* Prefer \`Lock\` for simple shared data; use \`RLock\` only if re-entry is genuinely needed.\r
* Use \`Semaphore/BoundedSemaphore\` to cap concurrency; pick \`BoundedSemaphore\` to catch logic errors.\r
* Use \`Event\` for simple signals; use \`Condition\` when waiting on a specific state/predicate.\r
* Use \`Barrier\` for phased algorithms where all threads must rendezvous.\r
* Always acquire via \`with\`, add timeouts where sensible, and keep critical sections tiny to avoid contention/deadlocks.\r
* For producer–consumer pipelines, the \`queue.Queue\` module is simpler and safer than rolling your own with \`Condition\`.\r
* For “run N functions in parallel”, prefer \`concurrent.futures.ThreadPoolExecutor\`.\r
* CPU-bound work: threads won’t beat the GIL—use \`multiprocessing\`; I/O-bound: threads (or \`asyncio\`) are fine.\r
\r
If you want, I can tailor examples to your specific use case (e.g., limiting API calls, coordinating audio threads, etc.).\r
`;export{r as default};
