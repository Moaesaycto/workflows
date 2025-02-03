# Flask Guide

## 1. Installing Flask

```sh
pip install flask
```

## 2. Creating a Basic Flask App

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
```

## 3. Routing and Dynamic URLs

```python
@app.route('/user/<name>')
def user(name):
    return f"Hello, {name}!"

@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f"Post ID: {post_id}"
```

### Query Parameters

```python
@app.route('/search')
def search():
    query = request.args.get('q')
    return f"Search results for: {query}"
```

## 4. Handling HTTP Methods

```python
from flask import request

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        data = request.form['data']
        return f"Received: {data}"
    return "Send a POST request."
```

## 5. Handling JSON Requests

```python
from flask import jsonify

@app.route('/api/data', methods=['POST'])
def api_data():
    data = request.get_json()
    return jsonify({"received": data})
```

## 6. Template Rendering (Jinja2)

```python
from flask import render_template

@app.route('/hello/<name>')
def hello(name):
    return render_template('hello.html', name=name)
```

**hello.html:**
```html
<!DOCTYPE html>
<html>
<body>
    <h1>Hello, {{ name }}!</h1>
</body>
</html>
```

## 7. Flask Blueprints (Modularization)

```python
from flask import Blueprint

example_bp = Blueprint('example', __name__)

@example_bp.route('/hello')
def example_hello():
    return "Hello from Blueprint!"

app.register_blueprint(example_bp, url_prefix='/example')
```

## 8. Handling CORS

```python
from flask_cors import CORS

CORS(app)  # Allow all origins
```

For specific origins:
```python
CORS(app, resources={r"/api/*": {"origins": "https://example.com"}})
```

## 9. Authentication & Security

### Using Flask-Login
```python
from flask_login import LoginManager

login_manager = LoginManager()
login_manager.init_app(app)
```

### Hashing Passwords
```python
from werkzeug.security import generate_password_hash, check_password_hash

hashed_pw = generate_password_hash("mypassword")
check_password_hash(hashed_pw, "mypassword")  # True
```

## 10. Database Integration (Flask-SQLAlchemy)

```python
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)

db.create_all()
```

## 11. Error Handling

```python
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404
```

## 12. Preparing for Production

### Running with Gunicorn
```sh
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

### Using Nginx as a Reverse Proxy
Example `nginx.conf`:
```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 13. Environment Variables

```sh
export FLASK_ENV=production
export SECRET_KEY="your-secret-key"
export FLASK_RUN_PORT=5000
export FLASK_RUN_HOST=0.0.0.0
```

## 14. Logging

```python
import logging

logging.basicConfig(level=logging.INFO)
logging.info("Flask app started!")
```
