# Setting Up a Flask Server


## **1. Install Flask**
Ensure you have Python installed, then install Flask:

```sh
pip install flask
```


## **2. Create a Basic Flask Server**
Create a file called `app.py` and add:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__':
    app.run(debug=True)
```

Run it with:

```sh
python app.py
```

By default, this starts a server at `http://127.0.0.1:5000/`.


## **3. Enable Cross-Origin Resource Sharing (CORS)**
If your frontend is separate (React, Vue, etc.), enable **CORS** to allow requests from different origins.

Install the CORS package:

```sh
pip install flask-cors
```

Modify `app.py`:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes
```

To restrict CORS to specific origins:

```python
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
```


## **4. Using Blueprints for Modular Code**
For larger apps, **Blueprints** help organize routes.

Create a folder **`routes/`** and inside it, a file `hello.py`:

```python
from flask import Blueprint

hello_bp = Blueprint('hello', __name__)

@hello_bp.route('/hello')
def hello():
    return "Hello from Blueprint!"
```

Now, update `app.py`:

```python
from flask import Flask
from routes.hello import hello_bp

app = Flask(__name__)
app.register_blueprint(hello_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
```

Now, `/api/hello` will return `"Hello from Blueprint!"`.


## **5. Basic Security Measures**
Flask provides built-in security features, but some best practices include:

### **Use `Flask-Talisman` for Security Headers**
```sh
pip install flask-talisman
```

Modify `app.py`:

```python
from flask_talisman import Talisman

app = Flask(__name__)
Talisman(app)  # Enforces security headers like Content Security Policy
```


### **Use Environment Variables for Secrets**
Instead of hardcoding secrets, store them in an `.env` file:

```sh
FLASK_SECRET_KEY=your-secret-key
```

Then, load it in `app.py`:

```python
import os
from dotenv import load_dotenv

load_dotenv()
app.secret_key = os.getenv("FLASK_SECRET_KEY")
```

Install the dotenv package if needed:

```sh
pip install python-dotenv
```


## **6. Deploying Your Flask App**
For production, use **Gunicorn**:

```sh
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

Or deploy with **Docker**:

```dockerfile
FROM python:3.10
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```
