# Wordcount (wc)

## Basic Function

* `wc file`: prints number of lines, words, and bytes in the file.
* Input: file or `stdin`; Output: `stdout`.

## Key Options

* `-l`: count **lines** (newline characters).
* `-w`: count **words** (whitespace-separated).
* `-c`: count **bytes**.
* `-m`: count **characters** (useful with UTF-8).
* `-L`: length of the **longest line**.

## Examples

* `wc -l file`: number of lines in `file`.
* `cat file | wc -w`: word count via `stdin`.
* `find . -type f | wc -l`: count files in current dir and subdirs.
* `wc -m file`: total characters, including whitespace.

## Notes

* Outputs counts followed by filename (or nothing if from `stdin`).
* Line count is based on **newlines**, not visual lines.
* Use multiple flags together: `wc -lw file`.
* If you do `wc -l < file`, it will only print the number.