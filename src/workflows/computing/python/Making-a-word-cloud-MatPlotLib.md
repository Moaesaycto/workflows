# Making a Word Cloud in Matplotlib

```py
pip install wordcloud
```

Suppose you have some string, which we will get from a CSV file:

```py
import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud

df = pd.read_csv("data.csv")
text = " ".join(df['column_name'].fillna("").astype(str)).lower()
wc = WordCloud(width=1200, height=800, background_color="white").generate(text)

plt.imshow(wc)
plt.axis("off")
plt.savefig("output.png")
```