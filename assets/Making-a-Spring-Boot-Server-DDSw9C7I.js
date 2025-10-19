const r=`# Making a Spring Boot Server\r
\r
## Setting Up\r
- Create a new Java project with Gradle (Groovy).\r
- Make a file in \`src/main/resources\` called \`application.yml\` and paste the following inside:\r
\r
\`\`\`yaml\r
server:\r
  port: 8080\r
logging:\r
  level:\r
    root: INFO\r
\`\`\`\r
\r
- Inside \`build.gradle\`, install the dependencies by doing:\r
\r
\`\`\`gradle\r
plugins {\r
    # ...\r
    id 'org.springframework.boot' version '3.3.4' # Add this (with the correct version)\r
    id 'io.spring.dependency-management' version '1.1.6'\r
}\r
\r
\r
dependencies {\r
    // ...\r
    implementation 'org.springframework.boot:spring-boot-starter-web'\r
    testImplementation 'org.springframework.boot:spring-boot-starter-test'\r
}\r
\`\`\`\r
\r
- Create a class to run the server by setting it up as follows:\r
\r
\`\`\`java\r
package dev.moae; // FIXME\r
\r
import org.springframework.boot.autoconfigure.SpringBootApplication;\r
import org.springframework.boot.SpringApplication;\r
import org.springframework.web.bind.annotation.*;\r
\r
@SpringBootApplication\r
@RestController\r
public class App {\r
  @GetMapping("/")\r
  public String health() { return "Success"; }\r
\r
  public static void main(String[] args) {\r
    SpringApplication.run(App.class, args);\r
  }\r
}\r
\`\`\`\r
\r
## Methods\r
\r
### \`GET\` Method\r
\r
If you want to use a query parameter, such as \`/greet?name=Moae\`, you can do so using the following:\r
\r
\`\`\`java\r
@GetMapping("/greet")\r
public String greet(@RequestParam(defaultValue = "friend") String name) {\r
  return "Hello, " + name;\r
}\r
\`\`\`\r
\r
Alternatively, you can use a path parameter, such as \`/greet/42\` by using:\r
\`\`\`java\r
@GetMapping("/user/{id}")\r
public String getUser(@PathVariable int id) {\r
  return "Requested user id = " + id;\r
}\r
\`\`\`\r
\r
### \`POST\` Method\r
If you were to send a curl request with a simple JSON body, such as this:\r
\r
\`\`\`bash\r
curl -X POST http://localhost:8080/demo/echo -H "Content-Type: application/json" -d "{\\"msg\\":\\"hi\\"}"\r
\`\`\`\r
\r
You can extract the request JSON object as follows:\r
\r
\`\`\`java\r
// Make sure to import java.util.Map;\r
\r
@PostMapping("/echo")\r
public Map<String, String> echo(@RequestBody Map<String, String> body) {\r
  return Map.of("youSent", body.get("msg"));\r
}\r
\`\`\`\r
\r
\r
### \`PUT\`, \`PATCH\` and \`DELETE\` Methods\r
\r
These methods use the same general structure as the rest of the examples, this time applying more for their purposes. For example:\r
\r
\`\`\`java\r
// Make sure to import java.util.Map;\r
\r
// PUT example (update)\r
@PutMapping("/update/{id}")\r
public Map<String, Object> update(@PathVariable int id, @RequestBody Map<String, String> body) {\r
  return Map.of("updatedId", id, "newValue", body.get("text"));\r
}\r
\r
// PATCH example (partial update)\r
@PatchMapping("/note/{id}")\r
public Map<String, Object> patch(@PathVariable int id, @RequestBody Map<String, Object> fields) {\r
  return Map.of("patchedId", id, "changes", fields);\r
}\r
\r
// DELETE example\r
@DeleteMapping("/delete/{id}")\r
public Map<String, String> delete(@PathVariable int id) {\r
  return Map.of("deletedId", String.valueOf(id));\r
}\r
\`\`\`\r
\r
## Errors\r
\r
If you are required to send an error, you simply throw a new response error as follows:\r
\r
\`\`\`java\r
import org.springframework.http.HttpStatus;\r
import org.springframework.web.server.ResponseStatusException;\r
\r
@GetMapping("/user/{id}")\r
public Map<String, Object> getUser(@PathVariable int id) {\r
  throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");\r
}\r
\`\`\`\r
\r
## Request Mappings (Blueprints)\r
\r
Just like blueprints in Flask, we can set up a specific route for a class. For example,\r
\r
\`\`\`java\r
@RestController\r
@RequestMapping("/auth")\r
public class AuthController {\r
  // Normal implementation of routes...\r
}\r
\`\`\`\r
\r
For example, if there was a method with the route \`/login\`, then the full request route would be \`/auth/login\`.\r
\r
`;export{r as default};
