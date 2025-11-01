const r=`# Testing with Simulated HTTP Requests in Spring Boot\r
\r
Begin by installing othe dependency:\r
\r
For Maven:\r
\r
\`\`\`xml\r
<dependency>\r
  <groupId>org.springframework.boot</groupId>\r
  <artifactId>spring-boot-starter-test</artifactId>\r
  <scope>test</scope>\r
</dependency>\r
\`\`\`\r
\r
Or Gradle/Kotlin DSL\r
\r
\`\`\`kotlin\r
testImplementation("org.springframework.boot:spring-boot-starter-test")\r
\`\`\`\r
\r
\r
\`spring-boot-starter-test\` includes JUnit 5, Mockito, MockMvc, TestRestTemplate, AssertJ, etc.\r
\r
\r
If you want to test MVC controllers without starting the whole server, prefer \`@WebMvcTest\` with \`MockMvc\`.\r
\r
Example controller:\r
\r
\`\`\`java\r
// src/main/java/com/example/web/GreetingController.java\r
package com.example.web;\r
\r
import org.springframework.web.bind.annotation.GetMapping;\r
import org.springframework.web.bind.annotation.RestController;\r
\r
@RestController\r
public class GreetingController {\r
    @GetMapping("/greet")\r
    public String greet() {\r
        return "hello";\r
    }\r
}\r
\`\`\`\r
\r
Test with \`@WebMvcTest\`:\r
\r
\`\`\`java\r
// src/test/java/com/example/web/GreetingControllerMvcTest.java\r
package com.example.web;\r
\r
import org.junit.jupiter.api.Test;\r
import org.springframework.beans.factory.annotation.Autowired;\r
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\r
import org.springframework.test.web.servlet.MockMvc;\r
\r
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\r
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;\r
\r
@WebMvcTest(GreetingController.class)\r
class GreetingControllerMvcTest {\r
\r
    @Autowired\r
    MockMvc mockMvc;\r
\r
    @Test\r
    void greetShouldReturnHello() throws Exception {\r
        mockMvc.perform(get("/greet"))\r
               .andExpect(status().isOk())\r
               .andExpect(content().string("hello"));\r
    }\r
}\r
\`\`\`\r
\r
\`@WebMvcTest\` will load only MVC-related beans (controllers, converters) — fast and focused.\r
\r
If your controller depends on services, mock them with \`@MockBean\`:\r
\r
\`\`\`java\r
@MockBean\r
MyService myService;\r
\`\`\`\r
\r
If you want to spin up the full Spring context and test real HTTP calls, use \`@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\` with \`TestRestTemplate\`.\r
\r
Example:\r
\r
\`\`\`java\r
// src/test/java/com/example/web/GreetingControllerIntegrationTest.java\r
package com.example.web;\r
\r
import org.junit.jupiter.api.Test;\r
import org.springframework.beans.factory.annotation.Autowired;\r
import org.springframework.boot.test.context.SpringBootTest;\r
import org.springframework.boot.test.web.client.TestRestTemplate;\r
import org.springframework.boot.test.web.server.LocalServerPort;\r
import static org.assertj.core.api.Assertions.assertThat;\r
\r
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r
class GreetingControllerIntegrationTest {\r
\r
    @LocalServerPort\r
    int port;\r
\r
    @Autowired\r
    TestRestTemplate restTemplate;\r
\r
    @Test\r
    void greetReturnsHello() {\r
        String url = "http://localhost:" + port + "/greet";\r
        String body = restTemplate.getForObject(url, String.class);\r
        assertThat(body).isEqualTo("hello");\r
    }\r
}\r
\`\`\`\r
\r
This starts the server on a random port and makes real HTTP requests. Good for end-to-end behavior.\r
\r
You can also auto-configure \`MockMvc\` in a \`@SpringBootTest\`:\r
\r
\`\`\`java\r
@SpringBootTest\r
@AutoConfigureMockMvc\r
class SomeFullContextTest {\r
    @Autowired MockMvc mockMvc;\r
    // use mockMvc to perform requests without opening a network port\r
}\r
\`\`\`\r
\r
\r
Controller returning JSON example and test:\r
\r
\`\`\`java\r
// Controller\r
@GetMapping("/api/person")\r
public Person person() { return new Person("Alice", 30); }\r
\r
// Test with MockMvc\r
mockMvc.perform(get("/api/person"))\r
       .andExpect(status().isOk())\r
       .andExpect(jsonPath("$.name").value("Alice"))\r
       .andExpect(jsonPath("$.age").value(30));\r
\`\`\`\r
`;export{r as default};
