import os
import re

def convert_to_mathjax(md_file: str):
    """Convert KaTeX ($$, $) to MathJax (\\[ \\], \\( \\)), with proper escaping."""
    
    with open(md_file, "r", encoding="utf-8") as file:
        content = file.read()

    # Step 1: Replace `\` with `\\` (double backslash)
    content = content.replace("\\", "\\\\")

    # Step 2: Replace block math delimiters: `$$ ... $$` → `\\[ ... \\]`
    content = re.sub(r"\$\$(.*?)\$\$", r"\\\\[\1\\\\]", content, flags=re.DOTALL)

    # Step 3: Replace inline math delimiters: `$ ... $` → `\\( ... \\)`
    content = re.sub(r"\$(.*?)\$", r"\\\\(\1\\\\)", content)

    # Write back to the same file
    with open(md_file, "w", encoding="utf-8") as file:
        file.write(content)

def process_all_md_files():
    """Finds and processes all Markdown (.md) files in the current directory."""
    
    md_files = [f for f in os.listdir() if f.endswith(".md")]
    
    for md_file in md_files:
        print(f"Converting: {md_file}")
        convert_to_mathjax(md_file)
    
    print("✅ All Markdown files have been converted to MathJax format.")

if __name__ == "__main__":
    process_all_md_files()
