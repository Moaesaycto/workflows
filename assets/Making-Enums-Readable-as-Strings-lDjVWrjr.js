const r=`# Making Enumerators Readable as Strings\r
\r
Normally when you do an \`enum\` object, you do something like this:\r
\r
\`\`\`java\r
private static enum State { \r
    WAITING_TO_START, \r
    GRACE_PERIOD,\r
    SCOUT_PERIOD,\r
    FFA_PERIOD,\r
    ENDED,\r
    PAUSED,\r
    LOADING,\r
}\r
  \`\`\`\r
\r
But, it is possible to make it have a clean string related to it if you wanted human-readable codes, such as:\r
\r
\`\`\`java\r
private static enum State {\r
    WAITING_TO_START("ready"),\r
    GRACE_PERIOD("grace"),\r
    SCOUT_PERIOD("scout"),\r
    FFA_PERIOD("ffa"),\r
    ENDED("ended"),\r
    PAUSED("paused"),\r
    LOADING("loading");\r
\r
    private final String readableName;\r
\r
    State(String readableName) {\r
        this.readableName = readableName;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return readableName;\r
    }\r
\r
    // You can add other getters if you want, like:\r
    public String getReadableName() {\r
        return readableName;\r
    }\r
}\r
\`\`\``;export{r as default};
