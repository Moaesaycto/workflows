const e=`# Sending Emails with Python\r
\r
Sending emails with python can be simple strings or formatted HTML files. First, you need to set up your email to be able to send an email to begin with. This tutorial will set this up with Gmail access, but others are possible.\r
\r
## Preparing an Email Address\r
\r
Gmail no longer allows "less secure apps", so you'll need to enable 2-Step Verification and use an App Password.\r
1. Go to: https://myaccount.google.com/security\r
2. Look for "2-Step Verification" and set that up.\r
3. Create an App Password by first visiting: https://myaccount.google.com/apppasswords\r
4. Select "Mail" as the app, and "Other" or your platform.\r
5. Google will give you a 16-character app password.\r
\r
Use that app password in your Python script instead of your Gmail password. It is recommended to use a \`.env\` file to use this information as it is dangerous to be left unsecured. In your \`.env\` file, put your information in as follows:\r
\r
\`\`\`dotenv\r
EMAIL_ADDRESS=youremail@example.com\r
EMAIL_PASSWORD=aaaa bbbb cccc dddd\r
\`\`\`\r
\r
We will be able to obtain these in our script by using:\r
\r
\`\`\`python\r
import os\r
from dotenv import load_dotenv\r
\r
load_dotenv()\r
email_address = os.getenv('EMAIL_ADDRESS')\r
email_password = os.getenv('EMAIL_PASSWORD')\r
\`\`\`\r
\r
Since we are using Gmail, we will use the following settings:\r
\r
| Setting        | Value                         |\r
| -------------- | ----------------------------- |\r
| SMTP server    | \`smtp.gmail.com\`              |\r
| Port (SSL)     | \`465\`                         |\r
| Port (TLS)     | \`587\` (use with \`starttls()\`) |\r
| Requires auth? | Yes                           |\r
\r
## Sending a Basic Email\r
\r
You can send a basic email with the following:\r
\r
\`\`\`python\r
import smtplib # Should be built in\r
from email.message import EmailMessage\r
\r
# Email content\r
msg = EmailMessage()\r
msg['Subject'] = 'Sample Subject'\r
msg['From'] = email_address # 'youremail@example.com' gotten from .env\r
msg['To'] = 'recipient@example.com'\r
msg.set_content('This is a test email. This will send a basic string.')\r
\r
# Send email\r
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:\r
    smtp.login(email_address, email_password) # pw: 'aaaa bbbb cccc dddd' gotten from .env\r
    smtp.send_message(msg)\r
\`\`\`\r
\r
It may take a while to send, but this should work for basic cases.\r
\r
## Using a Custom HTML Email\r
\r
Create a simple HTML file you would like to use as your email. For example:\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html>\r
  <head>\r
    <style>\r
      body { font-family: Arial, sans-serif; }\r
      .button {\r
        background-color: #4CAF50;\r
        color: white;\r
        padding: 10px 20px;\r
        text-decoration: none;\r
      }\r
    </style>\r
  </head>\r
  <body>\r
    <h1>Hello!</h1>\r
    <p>This is a custom HTML email for {{NAME}}.</p>\r
    <a href="https://example.com" class="button">Visit Site</a>\r
  </body>\r
</html>\r
\`\`\`\r
\r
We can get this by running:\r
\r
\`\`\`python\r
with open('path/to/email_template.html', 'r', encoding='utf-8') as f:\r
    html_content = f.read()\r
\`\`\`\r
\r
This file will be imported as a string, which will allow you to edit in certain variabels before being sent. Notice that in the above example there is a block that says \`{{NAME}}\`. We can run the following to implement our own variables:\r
\r
\`\`\`python\r
html_content = html_content.replace('{{NAME}}', "Moae")\r
\`\`\`\r
\r
Or more generally, we can define our replacements as a list, and implement them all at once:\r
\r
\`\`\`python\r
from datetime import date, datetime\r
import uuid\r
\r
REPLACEMENTS = {\r
    "NAME": "Name",\r
    "TODAY": date.today().strftime("%A, %x"),\r
    "NOW": datetime.now().isoformat(),\r
    "YEAR": date.today().strftime('%Y'),\r
    "UUID": str(uuid.uuid4()),\r
}\r
\r
# ... Get your HTML file as before\r
\r
for key, value in REPLACEMENTS.items():\r
    html_content = html_content.replace(f"{{{{{key}}}}}", value)\r
\`\`\`\r
\r
Sending the message is the same as before, just with an additional fallback in case something goes wrong:\r
\r
\`\`\`python\r
msg = EmailMessage()\r
\r
msg.set_content("This text is fallback")\r
msg.add_alternative(html_content, subtype='html') # The actual HTML being added\r
\`\`\`\r
\r
## Adding Images to HTML Template\r
Adding images can be a bit of a pain, but it is possible. Firstly, define the image in your HTML file:\r
\r
\`\`\`html\r
<img src="cid:example_img" alt="Example Image">\r
\`\`\`\r
\r
Now, in your Python script, you can import the image as follows:\r
\r
\`\`\`python\r
from email.mime.image import MIMEImage\r
\r
# ... Prepare your EmailMessage as before\r
\r
with open('path/to/example.png', 'rb') as img:\r
    image_data = img.read()\r
    image = MIMEImage(image_data)\r
    image.add_header('Content-ID', '<example_img>')\r
    image.add_header('Content-Disposition', 'inline', filename='example.png')\r
\r
    for part in msg.iter_parts():\r
        if part.get_content_type() == 'text/html':\r
            part.add_related(image)\r
            break\r
\`\`\`\r
\r
## Adding Attachments (From Path)\r
\r
Adding attachments is rather simple if you are taking it from a given path.\r
\r
### For a Plain Text File\r
\`\`\`python\r
# ... Prepare your EmailMessage as before\r
\r
with open('path/to/example_file.txt', 'rb') as f:\r
    msg.add_attachment(f.read(), maintype='text', subtype='plain', filename='example_file.txt')\r
\`\`\`\r
\r
\r
### For a PDF File\r
\`\`\`python\r
# ... Prepare your EmailMessage as before\r
\r
with open("path/to/example_file.pdf", "rb") as f:\r
    msg.add_attachment(f.read(), maintype='application', subtype='pdf', filename="example_report.pdf")\r
\r
\`\`\`\r
\r
## Adding Attachments (From Within the Application)\r
\r
In some cases, you may not want to exit the application to seek a file. Instead, you can generate your own file and immediately attach it as needed by finding the relevant storage of the file. \r
\r
For a plain text file, you can directly extract the bytes:\r
\r
\`\`\`python\r
# ... Prepare your EmailMessage as before\r
txt_bytes = message.encode('utf-8')\r
msg.add_attachment(\r
    txt_bytes,\r
    maintype='text',\r
    subtype='plain',\r
    filename=f'example.txt'\r
)\r
\`\`\`\r
\r
For a PDF example, we could send it as follows:\r
\r
\`\`\`python\r
from reportlab.pdfgen import canvas\r
from reportlab.lib.pagesizes import letter\r
\r
def create_pdf() -> bytes:\r
    buffer = io.BytesIO()\r
    c = canvas.Canvas(buffer, pagesize=letter)\r
    \r
    # ... Create your PDF here\r
\r
    c.save()\r
    buffer.seek(0)\r
    return buffer.read()\r
\`\`\`\r
\r
We can send this with the following:\r
\r
\`\`\`python\r
# ... Prepare your EmailMessage as before\r
\r
pdf_bytes = create_pdf() # Defined above\r
\r
msg.add_attachment(\r
    pdf_bytes,\r
    maintype='application',\r
    subtype='pdf',\r
    filename=f'example.pdf'\r
)`;export{e as default};
