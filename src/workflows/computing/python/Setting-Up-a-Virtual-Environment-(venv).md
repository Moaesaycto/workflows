# Setting up a Virtual Environment in Python

## 1. Create the Virtual Environment
Run the following inside your project directory:

```sh
python -m venv venv
```

## 2. Activate the Virtual Environment
- **Windows**:  
  ```sh
  venv\Scripts\activate
  ```
- **Mac/Linux**:  
  ```sh
  source venv/bin/activate
  ```

## 3. Install Dependencies
If you have a `requirements.txt` file, run:

```sh
pip install -r requirements.txt
```

Otherwise, install your required packages and generate one:

```sh
pip freeze > requirements.txt
```
