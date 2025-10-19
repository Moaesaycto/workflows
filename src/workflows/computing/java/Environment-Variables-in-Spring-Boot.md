# Environment Variables in Spring Boot

Create a file called `.env` in the project root directory with the variables you wish to store, such as:

```env
JWT_SECRET=super-secret-value
```

In `build.gradle`, include:

```gradle
dependencies {
  implementation "me.paulschwarz:spring-dotenv:4.+"   // loads .env into Spring's Environment
}
```

**Make sure to include the following in `.gitignore`!**

```gitignore
.env
.env.*
```

Also add it to `.dockerignore` so secrets don't leak through there.

Now, in `application.yaml`, change the secret key to:

```yaml
app:
  jwt:
    secret: ${JWT_SECRET}
```