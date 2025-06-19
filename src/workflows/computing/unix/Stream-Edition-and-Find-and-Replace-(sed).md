# Stream Editing (sed)

## Basic Function

* `sed` performs **text transformations** on each input line.
* Input: file or `stdin`; Output: modified text to `stdout`.

## Key Options

* `-E`: enable **extended regular expressions** (like `+`, `?`, `|`, `()`).
* `-n`: suppress automatic printing (used with `p` command).
* `-i`: edit files **in-place** (use with caution).

## Common Commands

* `s/old/new/`: replace first occurrence of `old` with `new`.
* `s/old/new/g`: replace **all** occurrences on the line.
* `s/old/new/i`: case-insensitive replace.
* `/pattern/d`: delete lines matching pattern.
* `/pattern/p`: print lines matching pattern (used with `-n`).

## Examples

* `sed 's/dog/cat/' file`: replace first `dog` with `cat` on each line.
* `sed 's/dog/cat/g' file`: replace **all** `dog`s with `cat`.
* `sed -E 's/[0-9]+/NUM/g'`: replace all numbers with `NUM`.
* `sed '/^#/d' file`: delete all comment lines (starting with `#`).
* `sed -n '/error/p' file`: print only lines containing `error`.

## Notes

* `sed` operates line-by-line by default.
* Use `-E` for readable regex (instead of escaping `()` or `+`).
* Combining `sed` with `cut`, `sort`, `uniq` gives powerful pipelines.
* Use `-i` for in-place edits, but **always back up** first.
Absolutely — here’s the expanded section on **successive commands, conditionals, and more**, in the same concise format:

## Advanced Usage

### Multiple Commands

* Use `-e` for each command:

  * `sed -e 's/foo/bar/' -e 's/baz/qux/' file`
* Or separate with `;` inside one script:

  * `sed 's/foo/bar/; s/baz/qux/' file`

### Conditional Execution

* Run commands **only if a pattern matches**:

  * `sed '/pattern/ { cmd1; cmd2 }' file`
* Example:

  * `sed '/#include/ { s/"/</; s/">/>/ }'` → replace quotes only in `#include` lines

### Apply to Specific Lines

* Line number instead of pattern:

  * `sed '3d' file`: delete line 3
  * `sed '1,5s/foo/bar/' file`: replace in lines 1–5 only

### Address Ranges

* Match between patterns:

  * `sed '/BEGIN/,/END/d' file`: delete everything from `BEGIN` to `END`
  * Note that the `^` and `$` anchors are line specific, even though this command spans over multiple lines.

### Looping and Labels (advanced)

* Use `:label`, `b`, and `t` for loops and branching (rare in basic usage)

  * Example:

    ```bash
    sed ':a; /pattern/ { N; ba }'  # Slurp lines until pattern disappears
    ```

### Tips

* Always test multiline or complex scripts without `-i` first.
* Use `{ ... }` to group multiple commands under a condition.
* With `-n`, use `p` to explicitly print what you want.


Let me know if you want a printable cheat sheet version or `awk` covered next.
