const r=`# Web Scraping with Python\r
\r
## 1. Introduction to Web Scraping\r
Web scraping is the process of extracting data from websites. Python offers various libraries for this, including:\r
- \`requests\` (for making HTTP requests)\r
- \`BeautifulSoup\` (for parsing HTML and XML)\r
- \`Selenium\` (for interacting with dynamic websites)\r
- \`Scrapy\` (for large-scale scraping)\r
\r
**Important:** Always check a website’s \`robots.txt\` file before scraping to ensure compliance with its policies.\r
\r
---\r
\r
## 2. Installing Required Libraries\r
\`\`\`sh\r
pip install requests beautifulsoup4 selenium scrapy lxml\r
\`\`\`\r
\r
---\r
\r
## 3. Making HTTP Requests\r
Using \`requests\` to fetch a webpage:\r
\`\`\`python\r
import requests\r
\r
url = "https://example.com"\r
response = requests.get(url)\r
print(response.status_code)  # 200 means success\r
print(response.text)  # Raw HTML content\r
\`\`\`\r
\r
### Handling Headers & User-Agent\r
\`\`\`python\r
headers = {"User-Agent": "Mozilla/5.0"}\r
response = requests.get(url, headers=headers)\r
\`\`\`\r
\r
---\r
\r
## 4. Parsing HTML with BeautifulSoup\r
\`\`\`python\r
from bs4 import BeautifulSoup\r
\r
soup = BeautifulSoup(response.text, "html.parser")\r
title = soup.title.text  # Extract page title\r
links = [a['href'] for a in soup.find_all("a", href=True)]\r
\`\`\`\r
\r
### Extracting Specific Elements\r
\`\`\`python\r
paragraphs = soup.find_all("p")  # Find all paragraphs\r
first_heading = soup.find("h1").text  # Find first H1 tag\r
\`\`\`\r
\r
---\r
\r
## 5. Handling Dynamic Content with Selenium\r
Some websites use JavaScript to load data dynamically. Selenium can automate browser interaction.\r
\r
### Setting Up Selenium\r
\`\`\`python\r
from selenium import webdriver\r
\r
options = webdriver.ChromeOptions()\r
options.add_argument("--headless")  # Run without UI\r
\r
driver = webdriver.Chrome(options=options)\r
driver.get("https://example.com")\r
print(driver.page_source)  # Full rendered HTML\r
\`\`\`\r
\r
### Interacting with Elements\r
\`\`\`python\r
search_box = driver.find_element("name", "q")\r
search_box.send_keys("web scraping")\r
search_box.submit()\r
\`\`\`\r
\r
---\r
\r
## 6. Handling Pagination & Infinite Scrolling\r
\`\`\`python\r
while True:\r
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")\r
    more_button = driver.find_element_by_class_name("load-more")\r
    if more_button:\r
        more_button.click()\r
    else:\r
        break\r
\`\`\`\r
\r
---\r
\r
## 7. Scrapy: Large-Scale Scraping\r
Scrapy is a powerful framework for scraping large amounts of data efficiently.\r
\r
### Creating a Scrapy Project\r
\`\`\`sh\r
scrapy startproject my_scraper\r
\`\`\`\r
\r
### Writing a Scrapy Spider\r
\`\`\`python\r
import scrapy\r
\r
class MySpider(scrapy.Spider):\r
    name = "my_spider"\r
    start_urls = ["https://example.com"]\r
\r
    def parse(self, response):\r
        for item in response.css(".item"):\r
            yield {\r
                "title": item.css("h2::text").get(),\r
                "link": item.css("a::attr(href)").get()\r
            }\r
\`\`\`\r
\r
### Running the Scraper\r
\`\`\`sh\r
scrapy crawl my_spider -o output.json\r
\`\`\`\r
\r
---\r
\r
## 8. Handling Anti-Scraping Measures\r
### Using Proxies\r
\`\`\`python\r
proxies = {"http": "http://proxy-server:port", "https": "https://proxy-server:port"}\r
requests.get(url, proxies=proxies)\r
\`\`\`\r
\r
### Using Rotating User-Agents\r
\`\`\`python\r
from fake_useragent import UserAgent\r
\r
ua = UserAgent()\r
headers = {"User-Agent": ua.random}\r
\`\`\`\r
\r
### Using \`time.sleep()\` Between Requests\r
\`\`\`python\r
import time\r
\r
for i in range(5):\r
    response = requests.get(url)\r
    time.sleep(3)  # Wait 3 seconds between requests\r
\`\`\`\r
\r
---\r
\r
## 9. Handling Different Protocols\r
### Working with JSON APIs\r
\`\`\`python\r
json_response = requests.get("https://api.example.com/data").json()\r
\`\`\`\r
\r
### Extracting Data from XML\r
\`\`\`python\r
import xml.etree.ElementTree as ET\r
\r
data = """<root><item>Data</item></root>"""\r
root = ET.fromstring(data)\r
print(root.find("item").text)\r
\`\`\`\r
\r
---\r
\r
## 10. Storing Scraped Data\r
### Saving to CSV\r
\`\`\`python\r
import csv\r
\r
data = [["Title", "Link"], ["Example", "https://example.com"]]\r
with open("output.csv", "w", newline="") as file:\r
    writer = csv.writer(file)\r
    writer.writerows(data)\r
\`\`\`\r
\r
### Saving to JSON\r
\`\`\`python\r
import json\r
\r
with open("output.json", "w") as file:\r
    json.dump(data, file, indent=4)\r
\`\`\`\r
\r
### Saving to SQLite Database\r
\`\`\`python\r
import sqlite3\r
\r
conn = sqlite3.connect("scraped_data.db")\r
cursor = conn.cursor()\r
cursor.execute("CREATE TABLE IF NOT EXISTS data (title TEXT, link TEXT)")\r
cursor.execute("INSERT INTO data VALUES (?, ?)", ("Example", "https://example.com"))\r
conn.commit()\r
\`\`\`\r
\r
---\r
\r
## 11. Ethical and Legal Considerations\r
- Always check \`robots.txt\` before scraping: \`https://example.com/robots.txt\`\r
- Do not overload a server with excessive requests.\r
- Avoid scraping personal or sensitive data.\r
- Follow the website’s terms of service.\r
`;export{r as default};
