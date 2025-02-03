const r=`# Python Cybersecurity Guide\r
\r
## 1. Introduction\r
Python is widely used for cybersecurity tasks such as encryption, hashing, network security, and vulnerability assessment. This guide covers essential tools and techniques for secure programming and cybersecurity applications.\r
\r
---\r
\r
## 2. Secure Coding Practices\r
### Avoid Hardcoded Credentials\r
\`\`\`python\r
import os\r
DB_PASSWORD = os.getenv("DB_PASSWORD")  # Use environment variables\r
\`\`\`\r
\r
### Input Validation and Sanitization\r
\`\`\`python\r
def sanitize_input(user_input):\r
    return user_input.replace("<", "&lt;").replace(">", "&gt;")\r
\`\`\`\r
\r
### Using Secure File Handling\r
\`\`\`python\r
with open("secure_data.txt", "r", encoding="utf-8") as file:\r
    data = file.read()\r
\`\`\`\r
\r
---\r
\r
## 3. Hashing and Password Security\r
\r
### Using \`hashlib\` for Secure Hashing\r
\`\`\`python\r
import hashlib\r
\r
password = "securepassword"\r
hashed_password = hashlib.sha256(password.encode()).hexdigest()\r
\`\`\`\r
\r
### Salting and Hashing with \`bcrypt\`\r
\`\`\`python\r
import bcrypt\r
\r
password = b"mypassword"\r
salt = bcrypt.gensalt()\r
hashed = bcrypt.hashpw(password, salt)\r
\r
if bcrypt.checkpw(password, hashed):\r
    print("Password match!")\r
\`\`\`\r
\r
---\r
\r
## 4. Encryption and Decryption\r
\r
### AES Encryption with \`cryptography\`\r
\`\`\`python\r
from cryptography.fernet import Fernet\r
\r
key = Fernet.generate_key()\r
cipher = Fernet(key)\r
\r
message = b"Sensitive data"\r
encrypted = cipher.encrypt(message)\r
decrypted = cipher.decrypt(encrypted)\r
\`\`\`\r
\r
---\r
\r
## 5. Secure Network Communication\r
\r
### Secure HTTP Requests with \`requests\`\r
\`\`\`python\r
import requests\r
\r
response = requests.get("https://example.com", verify=True)\r
\`\`\`\r
\r
### Using \`ssl\` for Secure Sockets\r
\`\`\`python\r
import ssl\r
import socket\r
\r
context = ssl.create_default_context()\r
with socket.create_connection(("example.com", 443)) as sock:\r
    with context.wrap_socket(sock, server_hostname="example.com") as ssock:\r
        print(ssock.version())\r
\`\`\`\r
\r
---\r
\r
## 6. Web Security with Flask\r
\r
### Preventing SQL Injection\r
\`\`\`python\r
import sqlite3\r
\r
def get_user_safe(user_id):\r
    conn = sqlite3.connect("users.db")\r
    cursor = conn.cursor()\r
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))\r
    return cursor.fetchone()\r
\`\`\`\r
\r
### Preventing Cross-Site Scripting (XSS)\r
\`\`\`python\r
from flask import escape\r
\r
def safe_display(user_input):\r
    return escape(user_input)\r
\`\`\`\r
\r
---\r
\r
## 7. Scanning for Vulnerabilities\r
\r
### Using \`nmap\` for Network Scanning\r
\`\`\`python\r
import nmap\r
\r
nm = nmap.PortScanner()\r
nm.scan('127.0.0.1', '22-443')\r
print(nm.all_hosts())\r
\`\`\`\r
\r
### Detecting Open Ports with \`socket\`\r
\`\`\`python\r
def check_port(ip, port):\r
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\r
        return s.connect_ex((ip, port)) == 0\r
\`\`\`\r
\r
---\r
\r
## 8. Logging and Monitoring\r
\r
### Secure Logging with \`logging\`\r
\`\`\`python\r
import logging\r
logging.basicConfig(filename="security.log", level=logging.INFO)\r
logging.info("Security event logged")\r
\`\`\`\r
\r
### Monitoring System Processes\r
\`\`\`python\r
import psutil\r
for process in psutil.process_iter(['pid', 'name']):\r
    print(process.info)\r
\`\`\`\r
\r
---\r
\r
## 9. Automating Security Tasks\r
\r
### Automating Pentesting with \`scapy\`\r
\`\`\`python\r
from scapy.all import IP, ICMP, sr1\r
\r
packet = IP(dst="8.8.8.8")/ICMP()\r
response = sr1(packet, timeout=2)\r
if response:\r
    print("Host is alive")\r
\`\`\`\r
\r
### Automating Brute Force Attacks (Ethical Use Only)\r
\`\`\`python\r
from itertools import product\r
\r
def brute_force():\r
    chars = "abc123"\r
    for attempt in product(chars, repeat=4):\r
        print("Trying:", "".join(attempt))\r
\`\`\`\r
\r
---\r
\r
## 10. Best Practices for Secure Python Applications\r
- Keep software and dependencies updated.\r
- Use virtual environments for dependency isolation.\r
- Implement access controls and proper authentication mechanisms.\r
- Enable logging and monitoring for suspicious activities.\r
- Follow OWASP best practices for web security.`;export{r as default};
