# Writing JUnit Test

The testing is built in using JUnit5, so we can test:

```java
package com.example.service;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class CalculatorServiceTest {

    private final CalculatorService service = new CalculatorService();

    @Test
    void addsTwoNumbers() {
        int result = service.add(2, 3);
        assertThat(result).isEqualTo(5);
    }
}
```