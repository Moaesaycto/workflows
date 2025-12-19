const n=`# Configuration Files in Python\r
\r
Configuration files are stored as \`config.ini\` (using \`.ini\` files). These files are incredibly simple, and do not support lists of nested entries.\r
\r
This is the basic INI file struction:\r
\r
\`\`\`ini\r
# config.ini\r
[database]\r
host = localhost\r
port = 5432\r
use_ssl = true\r
timeout = 30.5\r
\r
[api]\r
endpoints = https://api1.com, https://api2.com, https://api3.com\r
api_key = secret123\r
\r
[features]\r
debug_mode = false\r
max_retries = 3\r
\`\`\`\r
\r
You can read it by using \`configparser\`:\r
\r
\`\`\`py\r
import configparser\r
\r
config = configparser.ConfigParser()\r
config.read('config.ini')\r
\`\`\`\r
\r
### Strings (default)\r
\`\`\`py\r
host = config['database']['host']  # 'localhost'\r
api_key = config.get('api', 'api_key')  # 'secret123'\r
\`\`\`\r
\r
### Integers\r
\`\`\`py\r
port = config.getint('database', 'port')  # 5432\r
retries = config.getint('features', 'max_retries')  # 3\r
\`\`\`\r
\r
### Floats\r
\`\`\`py\r
timeout = config.getfloat('database', 'timeout')  # 30.5\r
\`\`\`\r
\r
### Booleans\r
Booleans are recognised as \`true\`/\`false\`, \`yes\`/\`no\`, \`1\`/\`0\` or \`on\`/\`off\`.\r
\r
\`\`\`py\r
use_ssl = config.getboolean('database', 'use_ssl')  # True\r
debug = config.getboolean('features', 'debug_mode')  # False\r
\`\`\`\r
\r
### Lists and Nestings\r
You _can_ somewhat simulate nesting by doing this:\r
\`\`\`ini\r
[server.production]\r
host = prod.example.com\r
port = 443\r
\r
[server.development]\r
host = localhost\r
port = 8000\r
\`\`\`\r
\r
\`\`\`py\r
prod_host = config['server.production']['host']\r
dev_port = config.getint('server.development', 'port')\r
\`\`\`\r
\r
Lists are also easy to simulate, as you can just manually split strings:\r
\r
\`\`\`py\r
endpoints = config.get('api', 'endpoints').split(', ')\r
\`\`\``;export{n as default};
