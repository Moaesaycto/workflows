# Grep and Matching Regular Expressions on the Command Line

`grep` is used to search for patterns in text.
`-E` enables extended regex

Use the command as follows:

```bash
grep -E <expression> <filename>
```

For example:

```bash
grep -E '[0-9]{3}-[0-9]{3}-[0-9]{4}' file.txt
```

This page will have a list of the basics of the rules you should know:

- `|`: Alternation uses the pipe character, matching one OR another. For example:

```bash
grep -E 'cat|dog' file.txt
```

## Useful Keywords
| Option | Description                      |
| ------ | -------------------------------- |
| `-i`   | Ignore case                      |
| `-v`   | Invert match                     |
| `-E`   | Use extended regex               |
| `-r`   | Recursively search directories   |
| `-n`   | Show line numbers                |
| `-c`   | Show match count                 |
| `-o`   | Only print matching part of line |
| `-w`   | Match whole words only           |
| `-x`   | Match whole line only            |
| `-A N` | Show N lines **after** match     |
| `-B N` | Show N lines **before** match    |
| `-C N` | Show N lines **around** match    |


## Grouping

- `()`: Grouping uses parentheses for group patterns, such as `gr(a|e)y` to match `grey` and `gray`.

- `[]`: For lists of characters, you use brackets, so `[abc]` would be the letters `a`, `b` and `c`. `[a-z]` is the lowercase letters of the alphabet, `[A-Z]` is the uppercase letters, and `[a-zA-Z]` is both. Doing `[^abc]` is everything that isn't in the list (not `a`, `b` or `c`).

## Beginning and Ends

- `^`: At the start of a string, use caret, so for example, if you don't want words starting with a vowel, you use `^[^adieu]`. 
- `$`: Use a dollar sign at the end, so words that do not end with a vowel should be `[^aeiou]$`.

## Repetition

- `*`: Adding an asterisk means it's repeated indefinitely. So for example, a word that is only made from vowels would be `[aeiou]*`.
- `.`: Full stop (or period) is to represent any character, so typing `.*` basically means any character for an arbitrary amount.
- `?`: Question mark is for zero or one times (think of it as a single, optional character)
- `+`: Plus sign is for one or more
- `{}`: Using braces allows you to define how may times something is expected, for example, `{3}` means three times, `{2, 5}` means between two and five (inclusive), and `{2,}` means two or more.

## Perl-Compatible Regex (PCRE)

* **Lookaheads / Lookbehinds**

  * `(?=...)` – Match if followed by something
    · `\w+(?=\d)` → Matches `item` in `item1`
  * `(?<=...)` – Match if preceded by something
    · `(?<=@)\w+` → Matches `domain` in `user@domain`
  * `(?!...)` – Match if **not** followed by something
    · `foo(?!bar)` → Matches `foo` not followed by `bar`
  * `(?<!...)` – Match if **not** preceded by something
    · `(?<!\$)\d+` → Matches `30` in `$50 30`

* **Non-capturing groups**

  * `(?:...)` → group without saving a match
    · `(?:foo|bar)baz` → Matches `foobaz` and `barbaz`, no capture

* **Named capture groups**

  * `(?<name>...)` → assign a name to a captured group
    · `(?<area>\d{3})-(?<num>\d{3}-\d{4})` → Matches `123-456-7890` with named groups

* **Lazy quantifiers**

  * `*?`, `+?`, `??` → non-greedy matching
    · `<.*?>` → Matches `<b>` in `<b>bold</b>` instead of the whole tag pair

* **Unicode properties**

  * `\p{L}`, `\p{N}` → match letters, numbers, etc.
    · `\p{L}+` → Matches `café` including `é`
    · `\p{N}+` → Matches `١٢٣` (Arabic numerals)

* **Backreferences in lookaheads**

  * Use captured groups inside lookaheads
    · `\b(\w+)(?=.*\1\b)` → Matches `cat` in `cat dog cat` (appears again later)

* **Enhanced escape sequences**

  * `\R` → any line break (handles `\n`, `\r\n`, etc.)
    · `Line1\RLine2` → Matches across systems
  * `\K` → reset match start (ignore earlier part)
    · `foo\Kbar` → Matches only `bar` (ignores `foo` in result)

* **Conditional expressions**

  * `(?(1)yes|no)` → conditional match based on group 1
    · `(abc)?(?(1)123|456)`
    Matches `abc123` if `abc` is present, `456` if not

* **Recursive patterns**

  * `(?1)`, `(?&name)` → recursive call to a numbered or named group
    · `^(A(?1)?B)$` → Matches exactly `n` A’s followed by `n` B’s
    · Enables balanced or nested structures using pure regex
