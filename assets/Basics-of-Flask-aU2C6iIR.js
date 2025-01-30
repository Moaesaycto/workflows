const r=`# Setting Up a Flask Server\r
\r
\r
## **1. Install Flask**\r
Ensure you have Python installed, then install Flask:\r
\r
\`\`\`sh\r
pip install flask\r
\`\`\`\r
\r
\r
## **2. Create a Basic Flask Server**\r
Create a file called \`app.py\` and add:\r
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
if __name__ == '__main__':\r
    app.run(debug=True)\r
\`\`\`\r
\r
Run it with:\r
\r
\`\`\`sh\r
python app.py\r
\`\`\`\r
\r
By default, this starts a server at \`http://127.0.0.1:5000/\`.\r
\r
\r
## **3. Enable Cross-Origin Resource Sharing (CORS)**\r
If your frontend is separate (React, Vue, etc.), enable **CORS** to allow requests from different origins.\r
\r
Install the CORS package:\r
\r
\`\`\`sh\r
pip install flask-cors\r
\`\`\`\r
\r
Modify \`app.py\`:\r
\r
\`\`\`python\r
from flask_cors import CORS\r
\r
app = Flask(__name__)\r
CORS(app)  # Enables CORS for all routes\r
\`\`\`\r
\r
To restrict CORS to specific origins:\r
\r
\`\`\`python\r
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})\r
\`\`\`\r
\r
\r
## **4. Using Blueprints for Modular Code**\r
For larger apps, **Blueprints** help organize routes.\r
\r
Create a folder **\`routes/\`** and inside it, a file \`hello.py\`:\r
\r
\`\`\`python\r
from flask import Blueprint\r
\r
hello_bp = Blueprint('hello', __name__)\r
\r
@hello_bp.route('/hello')\r
def hello():\r
    return "Hello from Blueprint!"\r
\`\`\`\r
\r
Now, update \`app.py\`:\r
\r
\`\`\`python\r
from flask import Flask\r
from routes.hello import hello_bp\r
\r
app = Flask(__name__)\r
app.register_blueprint(hello_bp, url_prefix='/api')\r
\r
if __name__ == '__main__':\r
    app.run(debug=True)\r
\`\`\`\r
\r
Now, \`/api/hello\` will return \`"Hello from Blueprint!"\`.\r
\r
\r
## **5. Basic Security Measures**\r
Flask provides built-in security features, but some best practices include:\r
\r
### **Use \`Flask-Talisman\` for Security Headers**\r
\`\`\`sh\r
pip install flask-talisman\r
\`\`\`\r
\r
Modify \`app.py\`:\r
\r
\`\`\`python\r
from flask_talisman import Talisman\r
\r
app = Flask(__name__)\r
Talisman(app)  # Enforces security headers like Content Security Policy\r
\`\`\`\r
\r
\r
### **Use Environment Variables for Secrets**\r
Instead of hardcoding secrets, store them in an \`.env\` file:\r
\r
\`\`\`sh\r
FLASK_SECRET_KEY=your-secret-key\r
\`\`\`\r
\r
Then, load it in \`app.py\`:\r
\r
\`\`\`python\r
import os\r
from dotenv import load_dotenv\r
\r
load_dotenv()\r
app.secret_key = os.getenv("FLASK_SECRET_KEY")\r
\`\`\`\r
\r
Install the dotenv package if needed:\r
\r
\`\`\`sh\r
pip install python-dotenv\r
\`\`\`\r
\r
\r
## **6. Deploying Your Flask App**\r
For production, use **Gunicorn**:\r
\r
\`\`\`sh\r
pip install gunicorn\r
gunicorn -w 4 -b 0.0.0.0:5000 app:app\r
\`\`\`\r
\r
Or deploy with **Docker**:\r
\r
\`\`\`dockerfile\r
FROM python:3.10\r
WORKDIR /app\r
COPY . .\r
RUN pip install -r requirements.txt\r
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]\r
\`\`\`\r
`;export{r as default};
