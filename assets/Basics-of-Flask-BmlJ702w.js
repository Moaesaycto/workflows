const r=`# Flask Guide\r
\r
## 1. Installing Flask\r
\r
\`\`\`sh\r
pip install flask\r
\`\`\`\r
\r
## 2. Creating a Basic Flask App\r
\r
\`\`\`python\r
from flask import Flask\r
\r
app = Flask(__name__)\r
\r
@app.route('/')\r
def home():\r
    return "Hello, Flask!"\r
\r
if __name__ == "__main__":\r
    app.run(host='0.0.0.0', port=5000, debug=True)\r
\`\`\`\r
\r
## 3. Routing and Dynamic URLs\r
\r
\`\`\`python\r
@app.route('/user/<name>')\r
def user(name):\r
    return f"Hello, {name}!"\r
\r
@app.route('/post/<int:post_id>')\r
def show_post(post_id):\r
    return f"Post ID: {post_id}"\r
\`\`\`\r
\r
### Query Parameters\r
\r
\`\`\`python\r
@app.route('/search')\r
def search():\r
    query = request.args.get('q')\r
    return f"Search results for: {query}"\r
\`\`\`\r
\r
## 4. Handling HTTP Methods\r
\r
\`\`\`python\r
from flask import request\r
\r
@app.route('/submit', methods=['GET', 'POST'])\r
def submit():\r
    if request.method == 'POST':\r
        data = request.form['data']\r
        return f"Received: {data}"\r
    return "Send a POST request."\r
\`\`\`\r
\r
## 5. Handling JSON Requests\r
\r
\`\`\`python\r
from flask import jsonify\r
\r
@app.route('/api/data', methods=['POST'])\r
def api_data():\r
    data = request.get_json()\r
    return jsonify({"received": data})\r
\`\`\`\r
\r
## 6. Template Rendering (Jinja2)\r
\r
\`\`\`python\r
from flask import render_template\r
\r
@app.route('/hello/<name>')\r
def hello(name):\r
    return render_template('hello.html', name=name)\r
\`\`\`\r
\r
**hello.html:**\r
\`\`\`html\r
<!DOCTYPE html>\r
<html>\r
<body>\r
    <h1>Hello, {{ name }}!</h1>\r
</body>\r
</html>\r
\`\`\`\r
\r
## 7. Flask Blueprints (Modularization)\r
\r
\`\`\`python\r
from flask import Blueprint\r
\r
example_bp = Blueprint('example', __name__)\r
\r
@example_bp.route('/hello')\r
def example_hello():\r
    return "Hello from Blueprint!"\r
\r
app.register_blueprint(example_bp, url_prefix='/example')\r
\`\`\`\r
\r
## 8. Handling CORS\r
\r
\`\`\`python\r
from flask_cors import CORS\r
\r
CORS(app)  # Allow all origins\r
\`\`\`\r
\r
For specific origins:\r
\`\`\`python\r
CORS(app, resources={r"/api/*": {"origins": "https://example.com"}})\r
\`\`\`\r
\r
## 9. Authentication & Security\r
\r
### Using Flask-Login\r
\`\`\`python\r
from flask_login import LoginManager\r
\r
login_manager = LoginManager()\r
login_manager.init_app(app)\r
\`\`\`\r
\r
### Hashing Passwords\r
\`\`\`python\r
from werkzeug.security import generate_password_hash, check_password_hash\r
\r
hashed_pw = generate_password_hash("mypassword")\r
check_password_hash(hashed_pw, "mypassword")  # True\r
\`\`\`\r
\r
## 10. Database Integration (Flask-SQLAlchemy)\r
\r
\`\`\`python\r
from flask_sqlalchemy import SQLAlchemy\r
\r
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'\r
db = SQLAlchemy(app)\r
\r
class User(db.Model):\r
    id = db.Column(db.Integer, primary_key=True)\r
    name = db.Column(db.String(80), nullable=False)\r
\r
db.create_all()\r
\`\`\`\r
\r
## 11. Error Handling\r
\r
\`\`\`python\r
@app.errorhandler(404)\r
def not_found(error):\r
    return jsonify({"error": "Not found"}), 404\r
\`\`\`\r
\r
## 12. Preparing for Production\r
\r
### Running with Gunicorn\r
\`\`\`sh\r
pip install gunicorn\r
gunicorn -w 4 -b 0.0.0.0:8000 app:app\r
\`\`\`\r
\r
### Using Nginx as a Reverse Proxy\r
Example \`nginx.conf\`:\r
\`\`\`nginx\r
server {\r
    listen 80;\r
    server_name example.com;\r
\r
    location / {\r
        proxy_pass http://127.0.0.1:8000;\r
        proxy_set_header Host $host;\r
        proxy_set_header X-Real-IP $remote_addr;\r
    }\r
}\r
\`\`\`\r
\r
## 13. Environment Variables\r
\r
\`\`\`sh\r
export FLASK_ENV=production\r
export SECRET_KEY="your-secret-key"\r
export FLASK_RUN_PORT=5000\r
export FLASK_RUN_HOST=0.0.0.0\r
\`\`\`\r
\r
## 14. Logging\r
\r
\`\`\`python\r
import logging\r
\r
logging.basicConfig(level=logging.INFO)\r
logging.info("Flask app started!")\r
\`\`\`\r
`;export{r as default};
