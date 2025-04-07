const n=`# Boxed Title String Generator\r
\r
Below is sample code for generating a boxed title for printing:\r
\r
\`\`\`python\r
from textwrap import wrap\r
\r
def create_title(string, width=None):\r
    secs = wrap(string, width) if width else string.split("\\n")\r
\r
    px, py = 5, 1\r
    bx, by = 1, 1\r
    d = "#"\r
\r
    g = width if width else len(max(secs, key=len)) + 2 * px\r
    n = g + 2 * bx * len(d)\r
\r
    tb = [d * n] * by + [f"{' ' * g}".join([d * bx] * 2)] * py\r
    body = [f"{d * bx}{s.center(g)}{d * bx}" for s in secs]\r
\r
    return "\\n".join(tb + body + tb[::-1])\r
\`\`\`\r
\`width\` should be set to the maximum width for each line, which will automatically wrap words for you.\r
\r
\`px\` represents the horizontal padding size (number of chars), \`py\` represents the vertical padding size, \`bx\` represents the horizontal thickness of the border box and \`by\` represents the vertical thickness of the border box.\r
\r
## Example Usage:\r
\r
Running the following code:\r
\r
\`\`\`python\r
print(create_title("Line 1\\nLine 2\\nLine 3"))\r
\`\`\`\r
\r
Will return the following:\r
\r
\`\`\`plaintext\r
##################\r
#                #\r
#     Line 1     #\r
#     Line 2     #\r
#     Line 3     #\r
#                #\r
##################\r
\`\`\`\r
\r
Using the given \`width\` arugment, you can restrict the width to a certain number of characters:\r
\r
\`\`\`python\r
print(create_title("Aggressive wrapping on narrow width", width=10))\r
\`\`\`\r
\r
Will return the following:\r
\r
\`\`\`plaintext\r
##################\r
#                #\r
#  Aggressive    #\r
#   wrapping     #\r
#      on        #\r
#    narrow      #\r
#     width      #\r
#                #\r
##################\r
\`\`\``;export{n as default};
