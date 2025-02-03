# API Development in Python

## 1. Introduction
API (Application Programming Interface) development in Python is widely done using **Flask** and **FastAPI**. This guide will walk through building a secure, production-ready REST API.

---

## 2. Setting Up a Flask API
### Install Dependencies
```sh
pip install flask flask-restful flask-cors flask-jwt-extended flask-sqlalchemy
```

### Basic Flask API
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the API"})

if __name__ == "__main__":
    app.run(debug=True)
```

---

## 3. Adding API Endpoints with Flask-RESTful
```python
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {"message": "Hello, World!"}

api.add_resource(HelloWorld, "/hello")

if __name__ == "__main__":
    app.run(debug=True)
```

---

## 4. Database Integration with SQLAlchemy
```python
from flask_sqlalchemy import SQLAlchemy

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

db.create_all()
```

---

## 5. User Authentication with JWT
```python
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app.config["JWT_SECRET_KEY"] = "supersecretkey"
jwt = JWTManager(app)

@app.route("/login", methods=["POST"])
def login():
    username = "admin"
    token = create_access_token(identity=username)
    return jsonify({"access_token": token})

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    return jsonify({"message": "This is a protected route."})
```

---

## 6. Handling CORS for Cross-Origin Access
```python
from flask_cors import CORS
CORS(app)
```

For specific origins:
```python
CORS(app, resources={r"/api/*": {"origins": "https://example.com"}})
```

---

## 7. API Rate Limiting for Security
```python
from flask_limiter import Limiter

limiter = Limiter(app, key_func=lambda: request.remote_addr)

@app.route("/limited")
@limiter.limit("5 per minute")
def limited():
    return jsonify({"message": "Limited access route"})
```

---

## 8. Error Handling
```python
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Resource not found"}), 404
```

---

## 9. Logging Requests and Errors
```python
import logging

logging.basicConfig(filename="api.log", level=logging.INFO)

@app.before_request
def log_request():
    logging.info(f"Request: {request.method} {request.url}")
```

---

## 10. Running API in Production
### Running with Gunicorn
```sh
pip install gunicorn

gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Using Nginx as a Reverse Proxy
Example `nginx.conf`:
```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
    }
}
```

---

## 11. Deploying to the Cloud
### Dockerizing the API
Create `Dockerfile`:
```dockerfile
FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

Build and Run:
```sh
docker build -t flask-api .
docker run -p 5000:5000 flask-api
```

---

## 12. Best Security Practices
- Use **HTTPS** with SSL/TLS.
- Implement **JWT expiration** and **refresh tokens**.
- Restrict API access with **CORS and authentication**.
- Use **rate limiting** to prevent DDoS attacks.
- **Validate and sanitize** all user inputs.
- Store **secrets** in environment variables instead of code.
