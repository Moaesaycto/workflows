# Making a Spring Boot Server

## Setting Up
- Create a new Java project with Gradle (Groovy).
- Make a file in `src/main/resources` called `application.yml` and paste the following inside:

```yaml
server:
  port: 8080
logging:
  level:
    root: INFO
```

- Inside `build.gradle`, install the dependencies by doing:

```gradle
plugins {
    # ...
    id 'org.springframework.boot' version '3.3.4' # Add this (with the correct version)
    id 'io.spring.dependency-management' version '1.1.6'
}


dependencies {
    // ...
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

- Create a class to run the server by setting it up as follows:

```java
package dev.moae; // FIXME

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class App {
  @GetMapping("/")
  public String health() { return "Success"; }

  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }
}
```

## Methods

### `GET` Method

If you want to use a query parameter, such as `/greet?name=Moae`, you can do so using the following:

```java
@GetMapping("/greet")
public String greet(@RequestParam(defaultValue = "friend") String name) {
  return "Hello, " + name;
}
```

Alternatively, you can use a path parameter, such as `/greet/42` by using:
```java
@GetMapping("/user/{id}")
public String getUser(@PathVariable int id) {
  return "Requested user id = " + id;
}
```

### `POST` Method
If you were to send a curl request with a simple JSON body, such as this:

```bash
curl -X POST http://localhost:8080/demo/echo -H "Content-Type: application/json" -d "{\"msg\":\"hi\"}"
```

You can extract the request JSON object as follows:

```java
// Make sure to import java.util.Map;

@PostMapping("/echo")
public Map<String, String> echo(@RequestBody Map<String, String> body) {
  return Map.of("youSent", body.get("msg"));
}
```


### `PUT`, `PATCH` and `DELETE` Methods

These methods use the same general structure as the rest of the examples, this time applying more for their purposes. For example:

```java
// Make sure to import java.util.Map;

// PUT example (update)
@PutMapping("/update/{id}")
public Map<String, Object> update(@PathVariable int id, @RequestBody Map<String, String> body) {
  return Map.of("updatedId", id, "newValue", body.get("text"));
}

// PATCH example (partial update)
@PatchMapping("/note/{id}")
public Map<String, Object> patch(@PathVariable int id, @RequestBody Map<String, Object> fields) {
  return Map.of("patchedId", id, "changes", fields);
}

// DELETE example
@DeleteMapping("/delete/{id}")
public Map<String, String> delete(@PathVariable int id) {
  return Map.of("deletedId", String.valueOf(id));
}
```

## Errors

If you are required to send an error, you simply throw a new response error as follows:

```java
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@GetMapping("/user/{id}")
public Map<String, Object> getUser(@PathVariable int id) {
  throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
}
```

In order to see the message from the error, you will need to include the following in the `application.yml` file:

```yaml
server:
  error:
    include-message: always
```

## Request Mappings (Blueprints)

Just like blueprints in Flask, we can set up a specific route for a class. For example,

```java
@RestController
@RequestMapping("/auth")
public class AuthController {
  // Normal implementation of routes...
}
```

For example, if there was a method with the route `/login`, then the full request route would be `/auth/login`.

