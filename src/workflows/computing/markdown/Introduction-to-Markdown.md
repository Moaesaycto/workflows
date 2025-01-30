
# Markdown Guide for This Site
Markdown is a simple way to format text using plain text syntax. This guide will help you write and format articles for the site. Please note that all information on this is general to all Markdown files **except for equation rendering**, that is only for this site.

---

## Headings
Use `#` to create **headings**:
```md
# This is a H1 heading
## This is a H2 heading
### This is a H3 heading
```
• **Example Output:**
# This is a H1 heading  
## This is a H2 heading  
### This is a H3 heading  

---

## Bold, Italics, and Strikethrough
```md
**Bold text**
*Italic text*
~~Strikethrough~~
```
• **Example Output:**  
**Bold text**  
*Italic text*  
~~Strikethrough~~  

Funnily enough, Markdown does not have underlined text for some reason.

---

## Lists
### **Unordered Lists (Bullets)**
```md
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2
```
• **Example Output:**  
- Item 1  
- Item 2  
  - Sub-item 1  
  - Sub-item 2  

### **Ordered Lists (Numbered)**
```md
1. First item
2. Second item
3. Third item
```
• **Example Output:**  
1. First item  
2. Second item  
3. Third item  

---

## Code Blocks
Use **backticks** (`) for inline and block code.

### **Inline Code**
```md
Use `print("Hello, world!")` in Python.
```
• **Example Output:**  
Use `print("Hello, world!")` in Python.

### **Multi-line Code Blocks**
Use triple backticks for multi-line code:
```md
```python
def hello():
    print("Hello, world!")
```
```
• **Example Output:**
```python
def hello():
    print("Hello, world!")
```

---

## Links
Create links using this format:
```md
[Link Text](https://example.com)
```
• **Example Output:**  
[Visit Example](https://www.apple.com/)

---

## Blockquotes
Use `>` to create a **blockquote**:
```md
> This is a blockquote.
```
• **Example Output:**
> This is a blockquote.

---

## Tables
Use pipes (`|`) to create **tables**:

```plaintext
| Name  | Age | Country |
|-------|-----|---------|
| Alice | 25  | USA     |
| Bob   | 30  | Canada  |
```

• **Example Output:**

| Name  | Age | Country |
|-------|-----|---------|
| Alice | 25  | USA     |
| Bob   | 30  | Canada  |

---

## Images

If you intend on including any, send through the image(s) you have as files, and include it 

```plaintext
![Image Alt](path/to/image.png)
```

For example, I have uploaded a simple [GIF](https://www.tumblr.com/unstickyhunter/770228651213078528) to demonstrate. The file is already loaded into the media for the site as:

```plaintext
![Spinning Burger](./example.webp)
```

• **Example Output:**
![Spinning Burger](./example.webp)

I will mostly handle this, just make sure to name the file something unique and consistent with the image you send/reference in your file.


---

## Special Equation Formatting for This Site
**This site uses a custom equation format!**  
- **Inline equations** use **single `$`** like this:
  ```md
  The equation $E = mc^2$ describes mass-energy equivalence.
  ```
  • **Example Output:**  
  The equation $E = mc^2$ describes mass-energy equivalence.

- **Block equations** use **double `$$`**, with a blank line before and after:
  ```md
  $$  
      f(x) = x^2  
  $$
  ```
  • **Example Output:**
  $$
  f(x) = x^2
  $$

**Important Notes:**
- The `$` and `$$` notation **only applies to this site** and will not work in other Markdown applications.  
- Do **not** use standard LaTeX-style `\( ... \)` or `\[ ... \]` for equations.
