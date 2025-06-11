# Finding Unique Lines (uniq)

## Basic Function

* `uniq` filters out **repeated consecutive lines** from input.
* Input: sorted file or `stdin`; Output: `stdout`.

## Key Options

* `-c`: prefix each line with its **count**.
* `-d`: print only **duplicate** lines.
* `-u`: print only **unique** lines (no duplicates at all).
* `-f N`: ignore first **N fields** when comparing.
* `-s N`: ignore first **N characters** when comparing.
* `-i`: ignore case when comparing.

## Examples

* `uniq file`: remove consecutive duplicates.
* `sort file | uniq`: remove **all** duplicates.
* `sort file | uniq -c`: show counts for each unique line.
* `uniq -d file`: show only lines that appear **more than once**.
* `uniq -u file`: show only lines that appear **once**.

## Notes

* `uniq` only removes **adjacent** duplicates → use `sort` first for full effect.
* Can be used with `sort -u` as an alternative.
* Case-insensitive comparison needs `-i`.