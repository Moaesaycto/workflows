# CRT Effect (Obsolete)

This doesn't support dynamic views, but it has the bulging of an old-timey CRT screen.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CRT Effect</title>
    <style>
        body {
            margin: 0;
            background: #222;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        canvas {
            display: block;
        }
    </style>
    <script src="https://evanw.github.io/glfx.js/glfx.js"></script>
</head>

<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const w = canvas.width, h = canvas.height;
        const hw = w / 2, hh = h / 2, w75 = w * 0.75;

        const scanlines = (() => {
            const c = document.createElement('canvas');
            c.width = w; c.height = h;
            const g = c.getContext('2d');
            g.fillStyle = 'rgba(0, 0, 0, 0.1)';
            for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 2);
            const img = new Image();
            img.src = c.toDataURL();
            return img;
        })();

        let glcanvas;
        try {
            glcanvas = fx.canvas();
        } catch (e) {
            alert('WebGL not supported');
        }

        const texture = glcanvas.texture(canvas);
        canvas.parentNode.insertBefore(glcanvas, canvas);
        canvas.style.display = 'none';

        // Add class/id swap (optional)
        glcanvas.className = canvas.className;
        glcanvas.id = canvas.id;
        canvas.id = 'old_' + canvas.id;

        function drawContent() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, w, h);

            // Centre text
            ctx.fillStyle = '#00ff00';
            ctx.font = '48px monospace';
            ctx.fillText('CRT EFFECT TEST', 150, 100);

            // Grid lines
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 1;
            for (let x = 0; x <= w; x += 100) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
            }
            for (let y = 0; y <= h; y += 100) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
            }

            // Rectangle box
            ctx.strokeStyle = '#f00';
            ctx.lineWidth = 3;
            ctx.strokeRect(200, 200, 400, 200);

            // Scanlines
            ctx.drawImage(scanlines, 0, 0, w, h);
        }

        setInterval(() => {
            drawContent();
            texture.loadContentsOf(canvas);
            glcanvas.draw(texture)
                .bulgePinch(hw, hh, w75, 0.12)
                .vignette(0.25, 0.75)
                .update();
        }, 25);
    </script>
</body>

</html>
```