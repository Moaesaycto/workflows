const r=`# Making a Word Cloud in Matplotlib\r
\r
\`\`\`py\r
pip install wordcloud\r
\`\`\`\r
\r
Suppose you have some string, which we will get from a CSV file:\r
\r
\`\`\`py\r
import pandas as pd\r
import matplotlib.pyplot as plt\r
from wordcloud import WordCloud\r
\r
df = pd.read_csv("data.csv")\r
text = " ".join(df['column_name'].fillna("").astype(str)).lower()\r
wc = WordCloud(width=1200, height=800, background_color="white").generate(text)\r
\r
plt.imshow(wc)\r
plt.axis("off")\r
plt.savefig("output.png")\r
\`\`\``;export{r as default};
