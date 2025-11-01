# Testing with Simulated HTTP Requests in Spring Boot

Begin by installing othe dependency:

For Maven:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-test</artifactId>
  <scope>test</scope>
</dependency>
```

Or Gradle/Kotlin DSL

```kotlin
testImplementation("org.springframework.boot:spring-boot-starter-test")
```


`spring-boot-starter-test` includes JUnit 5, Mockito, MockMvc, TestRestTemplate, AssertJ, etc.


If you want to test MVC controllers without starting the whole server, prefer `@WebMvcTest` with `MockMvc`.

Example controller:

```java
// src/main/java/com/example/web/GreetingController.java
package com.example.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
    @GetMapping("/greet")
    public String greet() {
        return "hello";
    }
}
```

Test with `@WebMvcTest`:

```java
// src/test/java/com/example/web/GreetingControllerMvcTest.java
package com.example.web;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(GreetingController.class)
class GreetingControllerMvcTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void greetShouldReturnHello() throws Exception {
        mockMvc.perform(get("/greet"))
               .andExpect(status().isOk())
               .andExpect(content().string("hello"));
    }
}
```

`@WebMvcTest` will load only MVC-related beans (controllers, converters) — fast and focused.

If your controller depends on services, mock them with `@MockBean`:

```java
@MockBean
MyService myService;
```

If you want to spin up the full Spring context and test real HTTP calls, use `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)` with `TestRestTemplate`.

Example:

```java
// src/test/java/com/example/web/GreetingControllerIntegrationTest.java
package com.example.web;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class GreetingControllerIntegrationTest {

    @LocalServerPort
    int port;

    @Autowired
    TestRestTemplate restTemplate;

    @Test
    void greetReturnsHello() {
        String url = "http://localhost:" + port + "/greet";
        String body = restTemplate.getForObject(url, String.class);
        assertThat(body).isEqualTo("hello");
    }
}
```

This starts the server on a random port and makes real HTTP requests. Good for end-to-end behavior.

You can also auto-configure `MockMvc` in a `@SpringBootTest`:

```java
@SpringBootTest
@AutoConfigureMockMvc
class SomeFullContextTest {
    @Autowired MockMvc mockMvc;
    // use mockMvc to perform requests without opening a network port
}
```


Controller returning JSON example and test:

```java
// Controller
@GetMapping("/api/person")
public Person person() { return new Person("Alice", 30); }

// Test with MockMvc
mockMvc.perform(get("/api/person"))
       .andExpect(status().isOk())
       .andExpect(jsonPath("$.name").value("Alice"))
       .andExpect(jsonPath("$.age").value(30));
```
