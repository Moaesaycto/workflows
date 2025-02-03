const r=`# API Development in Python\r
\r
## 1. Introduction\r
API (Application Programming Interface) development in Python is widely done using **Flask** and **FastAPI**. This guide will walk through building a secure, production-ready REST API.\r
\r
---\r
\r
## 2. Setting Up a Flask API\r
### Install Dependencies\r
\`\`\`sh\r
pip install flask flask-restful flask-cors flask-jwt-extended flask-sqlalchemy\r
\`\`\`\r
\r
### Basic Flask API\r
\`\`\`python\r
from flask import Flask, jsonify\r
\r
app = Flask(__name__)\r
\r
@app.route("/")\r
def home():\r
    return jsonify({"message": "Welcome to the API"})\r
\r
if __name__ == "__main__":\r
    app.run(debug=True)\r
\`\`\`\r
\r
---\r
\r
## 3. Adding API Endpoints with Flask-RESTful\r
\`\`\`python\r
from flask_restful import Api, Resource\r
\r
app = Flask(__name__)\r
api = Api(app)\r
\r
class HelloWorld(Resource):\r
    def get(self):\r
        return {"message": "Hello, World!"}\r
\r
api.add_resource(HelloWorld, "/hello")\r
\r
if __name__ == "__main__":\r
    app.run(debug=True)\r
\`\`\`\r
\r
---\r
\r
## 4. Database Integration with SQLAlchemy\r
\`\`\`python\r
from flask_sqlalchemy import SQLAlchemy\r
\r
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"\r
db = SQLAlchemy(app)\r
\r
class User(db.Model):\r
    id = db.Column(db.Integer, primary_key=True)\r
    name = db.Column(db.String(100), nullable=False)\r
\r
db.create_all()\r
\`\`\`\r
\r
---\r
\r
## 5. User Authentication with JWT\r
\`\`\`python\r
from flask_jwt_extended import JWTManager, create_access_token, jwt_required\r
\r
app.config["JWT_SECRET_KEY"] = "supersecretkey"\r
jwt = JWTManager(app)\r
\r
@app.route("/login", methods=["POST"])\r
def login():\r
    username = "admin"\r
    token = create_access_token(identity=username)\r
    return jsonify({"access_token": token})\r
\r
@app.route("/protected", methods=["GET"])\r
@jwt_required()\r
def protected():\r
    return jsonify({"message": "This is a protected route."})\r
\`\`\`\r
\r
---\r
\r
## 6. Handling CORS for Cross-Origin Access\r
\`\`\`python\r
from flask_cors import CORS\r
CORS(app)\r
\`\`\`\r
\r
For specific origins:\r
\`\`\`python\r
CORS(app, resources={r"/api/*": {"origins": "https://example.com"}})\r
\`\`\`\r
\r
---\r
\r
## 7. API Rate Limiting for Security\r
\`\`\`python\r
from flask_limiter import Limiter\r
\r
limiter = Limiter(app, key_func=lambda: request.remote_addr)\r
\r
@app.route("/limited")\r
@limiter.limit("5 per minute")\r
def limited():\r
    return jsonify({"message": "Limited access route"})\r
\`\`\`\r
\r
---\r
\r
## 8. Error Handling\r
\`\`\`python\r
@app.errorhandler(404)\r
def not_found(error):\r
    return jsonify({"error": "Resource not found"}), 404\r
\`\`\`\r
\r
---\r
\r
## 9. Logging Requests and Errors\r
\`\`\`python\r
import logging\r
\r
logging.basicConfig(filename="api.log", level=logging.INFO)\r
\r
@app.before_request\r
def log_request():\r
    logging.info(f"Request: {request.method} {request.url}")\r
\`\`\`\r
\r
---\r
\r
## 10. Running API in Production\r
### Running with Gunicorn\r
\`\`\`sh\r
pip install gunicorn\r
\r
gunicorn -w 4 -b 0.0.0.0:5000 app:app\r
\`\`\`\r
\r
### Using Nginx as a Reverse Proxy\r
Example \`nginx.conf\`:\r
\`\`\`nginx\r
server {\r
    listen 80;\r
    server_name api.example.com;\r
\r
    location / {\r
        proxy_pass http://127.0.0.1:5000;\r
        proxy_set_header Host $host;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
## 11. Deploying to the Cloud\r
### Dockerizing the API\r
Create \`Dockerfile\`:\r
\`\`\`dockerfile\r
FROM python:3.9\r
WORKDIR /app\r
COPY . .\r
RUN pip install -r requirements.txt\r
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]\r
\`\`\`\r
\r
Build and Run:\r
\`\`\`sh\r
docker build -t flask-api .\r
docker run -p 5000:5000 flask-api\r
\`\`\`\r
\r
---\r
\r
## 12. Best Security Practices\r
- Use **HTTPS** with SSL/TLS.\r
- Implement **JWT expiration** and **refresh tokens**.\r
- Restrict API access with **CORS and authentication**.\r
- Use **rate limiting** to prevent DDoS attacks.\r
- **Validate and sanitize** all user inputs.\r
- Store **secrets** in environment variables instead of code.\r
`;export{r as default};
