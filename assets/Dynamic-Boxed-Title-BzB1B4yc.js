const n=`# Dynamic Boxed Title String Generation\r
\r
Let's define a few values:\r
\r
\`\`\`python\r
TITLE_PADDING = [3, 1]\r
TITLE_BORDER = [3, 1]\r
TITLE_DELIMITER = "#"\r
\`\`\`\r
\r
The padding represents the spaces between the text and the outside, where \`TITLE_PADDING = [xPadding, yPadding]\`, \`TITLE_BORDER = [xBorderThickness, yBorderThickness]\` and \`TITLE_DELIMITER\` is the character or string the boundary is made from.\r
\r
Creating it manually looks like this:\r
\r
\`\`\`python\r
def create_title(string, width=None):\r
    words = string.split() if width else []\r
    secs, line = [], ""\r
    for word in words:\r
        if "\\n" in word:\r
            pre, post = word.split("\\n", 1)\r
            line += (" " if line else "") + pre\r
            secs += [line, post]\r
            line = ""\r
        elif len(line) + len(word) + bool(line) <= width:\r
            line += (" " if line else "") + word\r
        else:\r
            secs.append(line)\r
            line = word\r
    if line: secs.append(line)\r
    if not secs: secs = string.split("\\n")\r
\r
    px, py = TITLE_PADDING\r
    bx, by = TITLE_BORDER\r
    d = TITLE_DELIMITER\r
    g = len(max(secs, key=len)) + 2*px\r
    n = g + 2*bx*len(d)\r
\r
    tb = [d*n]*by + [f"{' '*(g)}".join([d*bx]*2)]*py\r
    body = [f"{d*bx}{s.center(g)}{d*bx}" for s in secs]\r
\r
    return "\\n".join(tb + body + tb[::-1])\r
\`\`\`\r
\r
For a more pythonic approach, you can use \`textwrap\`:\r
\r
\`\`\`py\r
import textwrap\r
\r
def create_title(string, width=None):\r
    from textwrap import wrap\r
\r
    px, py = TITLE_PADDING\r
    bx, by = TITLE_BORDER\r
    d = TITLE_DELIMITER\r
\r
    secs = wrap(string, width) if width else string.split("\\n")\r
    g = len(max(secs, key=len)) + 2 * px\r
    n = g + 2 * bx * len(d)\r
\r
    tb = [d * n] * by + [f"{' ' * (g + 1)}".join([d * bx] * 2)] * py\r
    body = [f"{d * bx}{s.center(g)}{d * bx}" for s in secs]\r
\r
    return "\\n".join(tb + body + tb[::-1])\r
\`\`\``;export{n as default};
