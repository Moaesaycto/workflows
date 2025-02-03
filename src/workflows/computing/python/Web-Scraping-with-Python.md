# Web Scraping with Python

## 1. Introduction to Web Scraping
Web scraping is the process of extracting data from websites. Python offers various libraries for this, including:
- `requests` (for making HTTP requests)
- `BeautifulSoup` (for parsing HTML and XML)
- `Selenium` (for interacting with dynamic websites)
- `Scrapy` (for large-scale scraping)

**Important:** Always check a website’s `robots.txt` file before scraping to ensure compliance with its policies.

---

## 2. Installing Required Libraries
```sh
pip install requests beautifulsoup4 selenium scrapy lxml
```

---

## 3. Making HTTP Requests
Using `requests` to fetch a webpage:
```python
import requests

url = "https://example.com"
response = requests.get(url)
print(response.status_code)  # 200 means success
print(response.text)  # Raw HTML content
```

### Handling Headers & User-Agent
```python
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(url, headers=headers)
```

---

## 4. Parsing HTML with BeautifulSoup
```python
from bs4 import BeautifulSoup

soup = BeautifulSoup(response.text, "html.parser")
title = soup.title.text  # Extract page title
links = [a['href'] for a in soup.find_all("a", href=True)]
```

### Extracting Specific Elements
```python
paragraphs = soup.find_all("p")  # Find all paragraphs
first_heading = soup.find("h1").text  # Find first H1 tag
```

---

## 5. Handling Dynamic Content with Selenium
Some websites use JavaScript to load data dynamically. Selenium can automate browser interaction.

### Setting Up Selenium
```python
from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run without UI

driver = webdriver.Chrome(options=options)
driver.get("https://example.com")
print(driver.page_source)  # Full rendered HTML
```

### Interacting with Elements
```python
search_box = driver.find_element("name", "q")
search_box.send_keys("web scraping")
search_box.submit()
```

---

## 6. Handling Pagination & Infinite Scrolling
```python
while True:
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    more_button = driver.find_element_by_class_name("load-more")
    if more_button:
        more_button.click()
    else:
        break
```

---

## 7. Scrapy: Large-Scale Scraping
Scrapy is a powerful framework for scraping large amounts of data efficiently.

### Creating a Scrapy Project
```sh
scrapy startproject my_scraper
```

### Writing a Scrapy Spider
```python
import scrapy

class MySpider(scrapy.Spider):
    name = "my_spider"
    start_urls = ["https://example.com"]

    def parse(self, response):
        for item in response.css(".item"):
            yield {
                "title": item.css("h2::text").get(),
                "link": item.css("a::attr(href)").get()
            }
```

### Running the Scraper
```sh
scrapy crawl my_spider -o output.json
```

---

## 8. Handling Anti-Scraping Measures
### Using Proxies
```python
proxies = {"http": "http://proxy-server:port", "https": "https://proxy-server:port"}
requests.get(url, proxies=proxies)
```

### Using Rotating User-Agents
```python
from fake_useragent import UserAgent

ua = UserAgent()
headers = {"User-Agent": ua.random}
```

### Using `time.sleep()` Between Requests
```python
import time

for i in range(5):
    response = requests.get(url)
    time.sleep(3)  # Wait 3 seconds between requests
```

---

## 9. Handling Different Protocols
### Working with JSON APIs
```python
json_response = requests.get("https://api.example.com/data").json()
```

### Extracting Data from XML
```python
import xml.etree.ElementTree as ET

data = """<root><item>Data</item></root>"""
root = ET.fromstring(data)
print(root.find("item").text)
```

---

## 10. Storing Scraped Data
### Saving to CSV
```python
import csv

data = [["Title", "Link"], ["Example", "https://example.com"]]
with open("output.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)
```

### Saving to JSON
```python
import json

with open("output.json", "w") as file:
    json.dump(data, file, indent=4)
```

### Saving to SQLite Database
```python
import sqlite3

conn = sqlite3.connect("scraped_data.db")
cursor = conn.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS data (title TEXT, link TEXT)")
cursor.execute("INSERT INTO data VALUES (?, ?)", ("Example", "https://example.com"))
conn.commit()
```

---

## 11. Ethical and Legal Considerations
- Always check `robots.txt` before scraping: `https://example.com/robots.txt`
- Do not overload a server with excessive requests.
- Avoid scraping personal or sensitive data.
- Follow the website’s terms of service.
