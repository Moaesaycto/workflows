# Basics of Fetch

`fetch` is a built-in API for making HTTP requests (e.g. GET, POST). TypeScript just adds type safety.

## Basic Usage

```typescript
async function getData() {
  const res = await fetch('https://api.example.com/data');
  if (!res.ok) throw new Error('Network response error');
  const data = await res.json();
  console.log(data);
}
```

You can catch errors using the following:

```typescript
getData().catch(err => console.error('Fetch failed:', err));
```

For TypeScript, you can use generics for type safety:

```typescript
interface User { id: number; name: string; }
async function getUser(): Promise<User> {
  const res = await fetch('/user/1');
  if (!res.ok) throw new Error('Fetch error');
  return res.json() as Promise<User>;
}
```

### Promise Chaining

In a lot of cases, you can simply chain these responses rather than dealing with the logic in different areas.

```typescript
fetch('https://api.example.com/data')
  .then(res => {
    if (!res.ok) throw new Error('Network error');
    return res.json(); // parse JSON
  })
  .then(data => {
    console.log('Received:', data);
  })
  .catch(err => {
    console.error('Fetch failed:', err);
  })
  .finally(() => {
    console.log('Fetch attempt finished');
  });
```

### Multiple Promises

Some times, it's important to get all information from separate routes and only then handle the result. You can use `Promise.all` to handle that. For example:

``` typescript
async function getMultiple() {
  const urls = ['/user', '/posts', '/comments'];
  const [user, posts, comments] = await Promise.all(
    urls.map(url => fetch(url).then(r => r.json()))
  );
  console.log(user, posts, comments);
}
```

## API Call Function

In a lot of cases, it's better to create an async function to handle the API calls for you. A simple function would look like this:

```typescript
async function apiCall<T>(
  route: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: unknown
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const res = await fetch(route, options);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return await res.json() as T;
  } catch (err) {
    console.error('API call failed:', err);
    throw err;
  }
}

// Usage:
interface User { id: number; name: string; }

const user = await apiCall<User>('/api/user/1'); // GET
const newUser = await apiCall<User>('/api/user', 'POST', {name: 'Moae'}); // POST
```

You can combine calls neatly like this:

```typescript
async function getDashboardData() {
  const [user, posts, comments] = await Promise.all([
    apiCall<User>('/api/user/1'),
    apiCall<Post[]>('/api/posts'),
    apiCall<Comment[]>('/api/comments')
  ]);
  
  console.log({ user, posts, comments });
}
```

Or if you prefer the chaining method, you can use:

```typescript
Promise.all([
  apiCall<User>('/api/user/1'),
  apiCall<Post[]>('/api/posts'),
  apiCall<Comment[]>('/api/comments')
])
  .then(([user, posts, comments]) => {
    console.log(user, posts, comments);
  })
  .catch(err => console.error('One of the calls failed:', err))
  .finally(() => console.log('All requests complete'));
```