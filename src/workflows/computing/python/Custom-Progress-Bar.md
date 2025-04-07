# Custom Progress Bar Implementation

Below is the function that can be used to generate a progress bar string.

```python
def render_progress_bar(
    progress,
    total,
    length=30,
    filled_char="█",
    partial_chars="▓▒", # OR  "▉▊▋▌▍▎▏"
    empty_char="░",
    show_percent=True,
    prefix="",
    suffix=""
) -> str:
    if total <= 0:
        raise ValueError("Total must be greater than 0")

    # Clamp progress to [0, total]
    progress = max(0, min(progress, total))
    ratio = progress / total

    # Calculate bar segments
    full_blocks = int(length * ratio)
    partial_fill = (length * ratio) - full_blocks
    partial_index = int(partial_fill * len(partial_chars))

    # Build the bar
    partial_char = (
        partial_chars[partial_index - 1]
        if 0 < partial_index <= len(partial_chars)
        else ""
    )

    empty_blocks = length - full_blocks - (1 if partial_char else 0)
    bar = filled_char * full_blocks + partial_char + empty_char * empty_blocks

    percent = f" {int(ratio * 100)}%" if show_percent else ""

    return f"{prefix}[{bar}]{percent}{suffix}"
```

For a robust example implementation:

```python
progress = 17
total = 40

bar = render_progress_bar(
    progress,
    total,
    length=20,
    filled_char="█",
    partial_chars="▓▒",
    empty_char="░",
    show_percent=True,
    prefix="Downloading ",
    suffix="..."
)

print(bar)
```

```plaintext
Downloading [███████▓░░░░░░░░░░] 42%...
```

## Replaceable Text Example

```python
# Example usage
total_steps = 100

for i in range(total_steps + 1):
    bar = render_progress_bar(i, total_steps, prefix="Progress: ", suffix=" Complete")
    print(f"\r{bar}", end="", flush=True)
    time.sleep(0.03)

print("\nDone.")
```