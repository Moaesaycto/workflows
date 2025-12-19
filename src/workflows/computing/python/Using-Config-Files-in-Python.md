# Configuration Files in Python

Configuration files are stored as `config.ini` (using `.ini` files). These files are incredibly simple, and do not support lists of nested entries.

This is the basic INI file struction:

```ini
# config.ini
[database]
host = localhost
port = 5432
use_ssl = true
timeout = 30.5

[api]
endpoints = https://api1.com, https://api2.com, https://api3.com
api_key = secret123

[features]
debug_mode = false
max_retries = 3
```

You can read it by using `configparser`:

```py
import configparser

config = configparser.ConfigParser()
config.read('config.ini')
```

### Strings (default)
```py
host = config['database']['host']  # 'localhost'
api_key = config.get('api', 'api_key')  # 'secret123'
```

### Integers
```py
port = config.getint('database', 'port')  # 5432
retries = config.getint('features', 'max_retries')  # 3
```

### Floats
```py
timeout = config.getfloat('database', 'timeout')  # 30.5
```

### Booleans
Booleans are recognised as `true`/`false`, `yes`/`no`, `1`/`0` or `on`/`off`.

```py
use_ssl = config.getboolean('database', 'use_ssl')  # True
debug = config.getboolean('features', 'debug_mode')  # False
```

### Lists and Nestings
You _can_ somewhat simulate nesting by doing this:
```ini
[server.production]
host = prod.example.com
port = 443

[server.development]
host = localhost
port = 8000
```

```py
prod_host = config['server.production']['host']
dev_port = config.getint('server.development', 'port')
```

Lists are also easy to simulate, as you can just manually split strings:

```py
endpoints = config.get('api', 'endpoints').split(', ')
```