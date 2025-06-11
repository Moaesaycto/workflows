# cut

The `cut` command extracts specific **columns or character ranges** from each line of input.


## Basic Function

* `cut` selects sections of each line from a file or `stdin`.

## Key Options

* `-f N`: select **field N** (use with `-d`).
* `-d X`: set **field delimiter** to `X` (default is TAB).
* `-c N`: select **character position N** (fixed-width).
* `--complement`: **invert** the selection (everything *except* specified fields/chars).
* `-s`: suppress lines **without the delimiter** (used with `-d`).

## Examples

* `cut -f1 file`: print first **TAB-separated** field.
* `cut -d',' -f2 file`: print second **CSV** field.
* `cut -c1-5 file`: print first 5 characters of each line.
* `cut -c4- file`: print from character 4 to the end of each line.
* `echo "abc:def:ghi" | cut -d':' -f2`: prints `def`.

## Notes

* Use `-f` for **structured** (delimited) data.
* Use `-c` for **fixed-width** data.
* Fields are **1-based**, not 0-based.
