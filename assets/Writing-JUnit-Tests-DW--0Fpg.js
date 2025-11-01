const r=`# Writing JUnit Test\r
\r
The testing is built in using JUnit5, so we can test:\r
\r
\`\`\`java\r
package com.example.service;\r
\r
import org.junit.jupiter.api.Test;\r
import static org.assertj.core.api.Assertions.assertThat;\r
\r
class CalculatorServiceTest {\r
\r
    private final CalculatorService service = new CalculatorService();\r
\r
    @Test\r
    void addsTwoNumbers() {\r
        int result = service.add(2, 3);\r
        assertThat(result).isEqualTo(5);\r
    }\r
}\r
\`\`\``;export{r as default};
