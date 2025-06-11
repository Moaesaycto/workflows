# Setting up a HTML File Correctly

I often forget how to set up a raw HTML file without looking it up. Here's the way to get started:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

If you want to add a CSS file, then you simply do it by adding the file to the `<head>`:

```html
<head>
    <link rel="stylesheet" href="style.css">
    <!-- Other stuff -->
</head>
```