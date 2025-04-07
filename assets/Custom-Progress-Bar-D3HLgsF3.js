const r=`# Custom Progress Bar Implementation\r
\r
Below is the function that can be used to generate a progress bar string.\r
\r
\`\`\`python\r
def render_progress_bar(\r
    progress,\r
    total,\r
    length=30,\r
    filled_char="█",\r
    partial_chars="▓▒", # OR  "▉▊▋▌▍▎▏"\r
    empty_char="░",\r
    show_percent=True,\r
    prefix="",\r
    suffix=""\r
) -> str:\r
    if total <= 0:\r
        raise ValueError("Total must be greater than 0")\r
\r
    # Clamp progress to [0, total]\r
    progress = max(0, min(progress, total))\r
    ratio = progress / total\r
\r
    # Calculate bar segments\r
    full_blocks = int(length * ratio)\r
    partial_fill = (length * ratio) - full_blocks\r
    partial_index = int(partial_fill * len(partial_chars))\r
\r
    # Build the bar\r
    partial_char = (\r
        partial_chars[partial_index - 1]\r
        if 0 < partial_index <= len(partial_chars)\r
        else ""\r
    )\r
\r
    empty_blocks = length - full_blocks - (1 if partial_char else 0)\r
    bar = filled_char * full_blocks + partial_char + empty_char * empty_blocks\r
\r
    percent = f" {int(ratio * 100)}%" if show_percent else ""\r
\r
    return f"{prefix}[{bar}]{percent}{suffix}"\r
\`\`\`\r
\r
For a robust example implementation:\r
\r
\`\`\`python\r
progress = 17\r
total = 40\r
\r
bar = render_progress_bar(\r
    progress,\r
    total,\r
    length=20,\r
    filled_char="█",\r
    partial_chars="▓▒",\r
    empty_char="░",\r
    show_percent=True,\r
    prefix="Downloading ",\r
    suffix="..."\r
)\r
\r
print(bar)\r
\`\`\`\r
\r
\`\`\`plaintext\r
Downloading [███████▓░░░░░░░░░░] 42%...\r
\`\`\`\r
\r
## Replaceable Text Example\r
\r
\`\`\`python\r
# Example usage\r
total_steps = 100\r
\r
for i in range(total_steps + 1):\r
    bar = render_progress_bar(i, total_steps, prefix="Progress: ", suffix=" Complete")\r
    print(f"\\r{bar}", end="", flush=True)\r
    time.sleep(0.03)\r
\r
print("\\nDone.")\r
\`\`\``;export{r as default};
