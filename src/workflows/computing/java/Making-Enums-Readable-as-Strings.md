# Making Enumerators Readable as Strings

Normally when you do an `enum` object, you do something like this:

```java
private static enum State { 
    WAITING_TO_START, 
    GRACE_PERIOD,
    SCOUT_PERIOD,
    FFA_PERIOD,
    ENDED,
    PAUSED,
    LOADING,
}
  ```

But, it is possible to make it have a clean string related to it if you wanted human-readable codes, such as:

```java
private static enum State {
    WAITING_TO_START("ready"),
    GRACE_PERIOD("grace"),
    SCOUT_PERIOD("scout"),
    FFA_PERIOD("ffa"),
    ENDED("ended"),
    PAUSED("paused"),
    LOADING("loading");

    private final String readableName;

    State(String readableName) {
        this.readableName = readableName;
    }

    @Override
    public String toString() {
        return readableName;
    }

    // You can add other getters if you want, like:
    public String getReadableName() {
        return readableName;
    }
}
```