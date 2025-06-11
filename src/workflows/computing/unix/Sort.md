# Sort

## Basic Function

* `sort file`: sorts lines lexicographically (ASCII-based).
* Input: file or `stdin`; Output: `stdout`.

## Key Options

* `-n`: numeric sort.
* `-h`: human-readable numbers (e.g. 1K, 1M).
* `-r`: reverse order.
* `-k N`: sort by Nth field.
* `-k M.N`: sort starting from character N of field M.
* `-t X`: use X as field delimiter.
* `-s`: stable sort (preserve original order of equal keys).
* `-u`: unique lines only.
* `-f`: ignore case.

## Examples

* `sort -n file`: sort numbers.
* `sort -t ':' -k2 file`: sort by 2nd field, colon-delimited.
* `sort -k2r -k3n file`: reverse by 2nd field, then numeric by 3rd.
* `sort -t '|' -k6.5nr file`: sort numerically by the decimal part (after the dot) of field 6, in **reverse**.
* `sort -t '|' -k6.5nr -k2 -k1 file`: multi-key sort: decimal part of field 6 (desc), then zID (asc), then Course Code (asc).

## Internals & Performance

* Uses merge sort (external sort if needed).
* Efficient with large files.
* `--buffer-size` and `-T` control memory/temp location.

## Tricks

* `-kM.N` lets you sort starting at the Nth character in field M. Useful for decimal parts (e.g. `.5` in `072.093`).
* `-kM.N,M'.N'` extends the above functionality by starting from the Nth character of field M and ending at the N'th character of field M'. (inclusive of the start AND the end)
