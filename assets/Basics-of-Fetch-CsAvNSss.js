const r=`# Basics of Fetch\r
\r
\`fetch\` is a built-in API for making HTTP requests (e.g. GET, POST). TypeScript just adds type safety.\r
\r
## Basic Usage\r
\r
\`\`\`typescript\r
async function getData() {\r
  const res = await fetch('https://api.example.com/data');\r
  if (!res.ok) throw new Error('Network response error');\r
  const data = await res.json();\r
  console.log(data);\r
}\r
\`\`\`\r
\r
You can catch errors using the following:\r
\r
\`\`\`typescript\r
getData().catch(err => console.error('Fetch failed:', err));\r
\`\`\`\r
\r
For TypeScript, you can use generics for type safety:\r
\r
\`\`\`typescript\r
interface User { id: number; name: string; }\r
async function getUser(): Promise<User> {\r
  const res = await fetch('/user/1');\r
  if (!res.ok) throw new Error('Fetch error');\r
  return res.json() as Promise<User>;\r
}\r
\`\`\`\r
\r
### Promise Chaining\r
\r
In a lot of cases, you can simply chain these responses rather than dealing with the logic in different areas.\r
\r
\`\`\`typescript\r
fetch('https://api.example.com/data')\r
  .then(res => {\r
    if (!res.ok) throw new Error('Network error');\r
    return res.json(); // parse JSON\r
  })\r
  .then(data => {\r
    console.log('Received:', data);\r
  })\r
  .catch(err => {\r
    console.error('Fetch failed:', err);\r
  })\r
  .finally(() => {\r
    console.log('Fetch attempt finished');\r
  });\r
\`\`\`\r
\r
### Multiple Promises\r
\r
Some times, it's important to get all information from separate routes and only then handle the result. You can use \`Promise.all\` to handle that. For example:\r
\r
\`\`\` typescript\r
async function getMultiple() {\r
  const urls = ['/user', '/posts', '/comments'];\r
  const [user, posts, comments] = await Promise.all(\r
    urls.map(url => fetch(url).then(r => r.json()))\r
  );\r
  console.log(user, posts, comments);\r
}\r
\`\`\`\r
\r
## API Call Function\r
\r
In a lot of cases, it's better to create an async function to handle the API calls for you. A simple function would look like this:\r
\r
\`\`\`typescript\r
async function apiCall<T>(\r
  route: string,\r
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',\r
  data?: unknown\r
): Promise<T> {\r
  const options: RequestInit = {\r
    method,\r
    headers: { 'Content-Type': 'application/json' },\r
    body: data ? JSON.stringify(data) : undefined,\r
  };\r
\r
  try {\r
    const res = await fetch(route, options);\r
    if (!res.ok) throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);\r
    return await res.json() as T;\r
  } catch (err) {\r
    console.error('API call failed:', err);\r
    throw err;\r
  }\r
}\r
\r
// Usage:\r
interface User { id: number; name: string; }\r
\r
const user = await apiCall<User>('/api/user/1'); // GET\r
const newUser = await apiCall<User>('/api/user', 'POST', {name: 'Moae'}); // POST\r
\`\`\`\r
\r
You can combine calls neatly like this:\r
\r
\`\`\`typescript\r
async function getDashboardData() {\r
  const [user, posts, comments] = await Promise.all([\r
    apiCall<User>('/api/user/1'),\r
    apiCall<Post[]>('/api/posts'),\r
    apiCall<Comment[]>('/api/comments')\r
  ]);\r
  \r
  console.log({ user, posts, comments });\r
}\r
\`\`\`\r
\r
Or if you prefer the chaining method, you can use:\r
\r
\`\`\`typescript\r
Promise.all([\r
  apiCall<User>('/api/user/1'),\r
  apiCall<Post[]>('/api/posts'),\r
  apiCall<Comment[]>('/api/comments')\r
])\r
  .then(([user, posts, comments]) => {\r
    console.log(user, posts, comments);\r
  })\r
  .catch(err => console.error('One of the calls failed:', err))\r
  .finally(() => console.log('All requests complete'));\r
\`\`\``;export{r as default};
