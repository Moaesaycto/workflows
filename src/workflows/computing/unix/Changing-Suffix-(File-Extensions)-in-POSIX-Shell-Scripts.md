# Changing Suffix (File Extensions) in POSIX Shell Scripts


| Syntax           | Meaning                         |
| ---------------- | ------------------------------- |
| `${var%suffix}`  | Remove shortest matching suffix |
| `${var%%suffix}` | Remove longest matching suffix  |
| `${var#prefix}`  | Remove shortest matching prefix |
| `${var##prefix}` | Remove longest matching prefix  |

This notation is great when converting between file types. For example:

```shell
output="${file%.jpg}.png"
```

This will strip away the `.jpg` and replace it with `.png`.