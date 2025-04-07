# Sending Emails with Python

Sending emails with python can be simple strings or formatted HTML files. First, you need to set up your email to be able to send an email to begin with. This tutorial will set this up with Gmail access, but others are possible.

## Preparing an Email Address

Gmail no longer allows "less secure apps", so you'll need to enable 2-Step Verification and use an App Password.
1. Go to: https://myaccount.google.com/security
2. Look for "2-Step Verification" and set that up.
3. Create an App Password by first visiting: https://myaccount.google.com/apppasswords
4. Select "Mail" as the app, and "Other" or your platform.
5. Google will give you a 16-character app password.

Use that app password in your Python script instead of your Gmail password. It is recommended to use a `.env` file to use this information as it is dangerous to be left unsecured. In your `.env` file, put your information in as follows:

```dotenv
EMAIL_ADDRESS=youremail@example.com
EMAIL_PASSWORD=aaaa bbbb cccc dddd
```

We will be able to obtain these in our script by using:

```python
import os
from dotenv import load_dotenv

load_dotenv()
email_address = os.getenv('EMAIL_ADDRESS')
email_password = os.getenv('EMAIL_PASSWORD')
```

Since we are using Gmail, we will use the following settings:

| Setting        | Value                         |
| -------------- | ----------------------------- |
| SMTP server    | `smtp.gmail.com`              |
| Port (SSL)     | `465`                         |
| Port (TLS)     | `587` (use with `starttls()`) |
| Requires auth? | Yes                           |

## Sending a Basic Email

You can send a basic email with the following:

```python
import smtplib # Should be built in
from email.message import EmailMessage

# Email content
msg = EmailMessage()
msg['Subject'] = 'Sample Subject'
msg['From'] = email_address # 'youremail@example.com' gotten from .env
msg['To'] = 'recipient@example.com'
msg.set_content('This is a test email. This will send a basic string.')

# Send email
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(email_address, email_password) # pw: 'aaaa bbbb cccc dddd' gotten from .env
    smtp.send_message(msg)
```

It may take a while to send, but this should work for basic cases.

## Using a Custom HTML Email

Create a simple HTML file you would like to use as your email. For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; }
      .button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>This is a custom HTML email for {{NAME}}.</p>
    <a href="https://example.com" class="button">Visit Site</a>
  </body>
</html>
```

We can get this by running:

```python
with open('path/to/email_template.html', 'r', encoding='utf-8') as f:
    html_content = f.read()
```

This file will be imported as a string, which will allow you to edit in certain variabels before being sent. Notice that in the above example there is a block that says `{{NAME}}`. We can run the following to implement our own variables:

```python
html_content = html_content.replace('{{NAME}}', "Moae")
```

Or more generally, we can define our replacements as a list, and implement them all at once:

```python
from datetime import date, datetime
import uuid

REPLACEMENTS = {
    "NAME": "Name",
    "TODAY": date.today().strftime("%A, %x"),
    "NOW": datetime.now().isoformat(),
    "YEAR": date.today().strftime('%Y'),
    "UUID": str(uuid.uuid4()),
}

# ... Get your HTML file as before

for key, value in REPLACEMENTS.items():
    html_content = html_content.replace(f"{{{{{key}}}}}", value)
```

Sending the message is the same as before, just with an additional fallback in case something goes wrong:

```python
msg = EmailMessage()

msg.set_content("This text is fallback")
msg.add_alternative(html_content, subtype='html') # The actual HTML being added
```

## Adding Images to HTML Template
Adding images can be a bit of a pain, but it is possible. Firstly, define the image in your HTML file:

```html
<img src="cid:example_img" alt="Example Image">
```

Now, in your Python script, you can import the image as follows:

```python
from email.mime.image import MIMEImage

# ... Prepare your EmailMessage as before

with open('path/to/example.png', 'rb') as img:
    image_data = img.read()
    image = MIMEImage(image_data)
    image.add_header('Content-ID', '<example_img>')
    image.add_header('Content-Disposition', 'inline', filename='example.png')

    for part in msg.iter_parts():
        if part.get_content_type() == 'text/html':
            part.add_related(image)
            break
```

## Adding Attachments (From Path)

Adding attachments is rather simple if you are taking it from a given path.

### For a Plain Text File
```python
# ... Prepare your EmailMessage as before

with open('path/to/example_file.txt', 'rb') as f:
    msg.add_attachment(f.read(), maintype='text', subtype='plain', filename='example_file.txt')
```


### For a PDF File
```python
# ... Prepare your EmailMessage as before

with open("path/to/example_file.pdf", "rb") as f:
    msg.add_attachment(f.read(), maintype='application', subtype='pdf', filename="example_report.pdf")

```

## Adding Attachments (From Within the Application)

In some cases, you may not want to exit the application to seek a file. Instead, you can generate your own file and immediately attach it as needed by finding the relevant storage of the file. 

For a plain text file, you can directly extract the bytes:

```python
# ... Prepare your EmailMessage as before
txt_bytes = message.encode('utf-8')
msg.add_attachment(
    txt_bytes,
    maintype='text',
    subtype='plain',
    filename=f'example.txt'
)
```

For a PDF example, we could send it as follows:

```python
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

def create_pdf() -> bytes:
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=letter)
    
    # ... Create your PDF here

    c.save()
    buffer.seek(0)
    return buffer.read()
```

We can send this with the following:

```python
# ... Prepare your EmailMessage as before

pdf_bytes = create_pdf() # Defined above

msg.add_attachment(
    pdf_bytes,
    maintype='application',
    subtype='pdf',
    filename=f'example.pdf'
)