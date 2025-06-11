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
