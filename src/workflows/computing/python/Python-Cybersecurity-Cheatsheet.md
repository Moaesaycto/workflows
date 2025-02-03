# Python Cybersecurity Guide

## 1. Introduction
Python is widely used for cybersecurity tasks such as encryption, hashing, network security, and vulnerability assessment. This guide covers essential tools and techniques for secure programming and cybersecurity applications.

---

## 2. Secure Coding Practices
### Avoid Hardcoded Credentials
```python
import os
DB_PASSWORD = os.getenv("DB_PASSWORD")  # Use environment variables
```

### Input Validation and Sanitization
```python
def sanitize_input(user_input):
    return user_input.replace("<", "&lt;").replace(">", "&gt;")
```

### Using Secure File Handling
```python
with open("secure_data.txt", "r", encoding="utf-8") as file:
    data = file.read()
```

---

## 3. Hashing and Password Security

### Using `hashlib` for Secure Hashing
```python
import hashlib

password = "securepassword"
hashed_password = hashlib.sha256(password.encode()).hexdigest()
```

### Salting and Hashing with `bcrypt`
```python
import bcrypt

password = b"mypassword"
salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(password, salt)

if bcrypt.checkpw(password, hashed):
    print("Password match!")
```

---

## 4. Encryption and Decryption

### AES Encryption with `cryptography`
```python
from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher = Fernet(key)

message = b"Sensitive data"
encrypted = cipher.encrypt(message)
decrypted = cipher.decrypt(encrypted)
```

---

## 5. Secure Network Communication

### Secure HTTP Requests with `requests`
```python
import requests

response = requests.get("https://example.com", verify=True)
```

### Using `ssl` for Secure Sockets
```python
import ssl
import socket

context = ssl.create_default_context()
with socket.create_connection(("example.com", 443)) as sock:
    with context.wrap_socket(sock, server_hostname="example.com") as ssock:
        print(ssock.version())
```

---

## 6. Web Security with Flask

### Preventing SQL Injection
```python
import sqlite3

def get_user_safe(user_id):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    return cursor.fetchone()
```

### Preventing Cross-Site Scripting (XSS)
```python
from flask import escape

def safe_display(user_input):
    return escape(user_input)
```

---

## 7. Scanning for Vulnerabilities

### Using `nmap` for Network Scanning
```python
import nmap

nm = nmap.PortScanner()
nm.scan('127.0.0.1', '22-443')
print(nm.all_hosts())
```

### Detecting Open Ports with `socket`
```python
def check_port(ip, port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex((ip, port)) == 0
```

---

## 8. Logging and Monitoring

### Secure Logging with `logging`
```python
import logging
logging.basicConfig(filename="security.log", level=logging.INFO)
logging.info("Security event logged")
```

### Monitoring System Processes
```python
import psutil
for process in psutil.process_iter(['pid', 'name']):
    print(process.info)
```

---

## 9. Automating Security Tasks

### Automating Pentesting with `scapy`
```python
from scapy.all import IP, ICMP, sr1

packet = IP(dst="8.8.8.8")/ICMP()
response = sr1(packet, timeout=2)
if response:
    print("Host is alive")
```

### Automating Brute Force Attacks (Ethical Use Only)
```python
from itertools import product

def brute_force():
    chars = "abc123"
    for attempt in product(chars, repeat=4):
        print("Trying:", "".join(attempt))
```

---

## 10. Best Practices for Secure Python Applications
- Keep software and dependencies updated.
- Use virtual environments for dependency isolation.
- Implement access controls and proper authentication mechanisms.
- Enable logging and monitoring for suspicious activities.
- Follow OWASP best practices for web security.