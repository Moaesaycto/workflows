# Importing Custom Fonts with CSS

You can import fonts by including the following in your `<head>` of your HTML file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="<font URL goes here>" rel="stylesheet">
```

Alternatively, if you want to import the font from a file, you can do so with this:

```css
@font-face {
    font-family: "Day Roman";
    src: url('/fonts/DayRoman.ttf') format('truetype');
}
```

Then, in your CSS class, you can use the fonts as you would normally:

```css
body {
    font-family: "Roboto", sans-serif;
}
```
