const n=`# CRT Effect (Obsolete)\r
\r
This doesn't support dynamic views, but it has the bulging of an old-timey CRT screen.\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>CRT Effect</title>\r
    <style>\r
        body {\r
            margin: 0;\r
            background: #222;\r
            display: flex;\r
            justify-content: center;\r
            align-items: center;\r
            height: 100vh;\r
        }\r
\r
        canvas {\r
            display: block;\r
        }\r
    </style>\r
    <script src="https://evanw.github.io/glfx.js/glfx.js"><\/script>\r
</head>\r
\r
<body>\r
    <canvas id="gameCanvas" width="800" height="600"></canvas>\r
\r
    <script>\r
        const canvas = document.getElementById('gameCanvas');\r
        const ctx = canvas.getContext('2d');\r
        const w = canvas.width, h = canvas.height;\r
        const hw = w / 2, hh = h / 2, w75 = w * 0.75;\r
\r
        const scanlines = (() => {\r
            const c = document.createElement('canvas');\r
            c.width = w; c.height = h;\r
            const g = c.getContext('2d');\r
            g.fillStyle = 'rgba(0, 0, 0, 0.1)';\r
            for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 2);\r
            const img = new Image();\r
            img.src = c.toDataURL();\r
            return img;\r
        })();\r
\r
        let glcanvas;\r
        try {\r
            glcanvas = fx.canvas();\r
        } catch (e) {\r
            alert('WebGL not supported');\r
        }\r
\r
        const texture = glcanvas.texture(canvas);\r
        canvas.parentNode.insertBefore(glcanvas, canvas);\r
        canvas.style.display = 'none';\r
\r
        // Add class/id swap (optional)\r
        glcanvas.className = canvas.className;\r
        glcanvas.id = canvas.id;\r
        canvas.id = 'old_' + canvas.id;\r
\r
        function drawContent() {\r
            ctx.fillStyle = 'black';\r
            ctx.fillRect(0, 0, w, h);\r
\r
            // Centre text\r
            ctx.fillStyle = '#00ff00';\r
            ctx.font = '48px monospace';\r
            ctx.fillText('CRT EFFECT TEST', 150, 100);\r
\r
            // Grid lines\r
            ctx.strokeStyle = '#555';\r
            ctx.lineWidth = 1;\r
            for (let x = 0; x <= w; x += 100) {\r
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();\r
            }\r
            for (let y = 0; y <= h; y += 100) {\r
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();\r
            }\r
\r
            // Rectangle box\r
            ctx.strokeStyle = '#f00';\r
            ctx.lineWidth = 3;\r
            ctx.strokeRect(200, 200, 400, 200);\r
\r
            // Scanlines\r
            ctx.drawImage(scanlines, 0, 0, w, h);\r
        }\r
\r
        setInterval(() => {\r
            drawContent();\r
            texture.loadContentsOf(canvas);\r
            glcanvas.draw(texture)\r
                .bulgePinch(hw, hh, w75, 0.12)\r
                .vignette(0.25, 0.75)\r
                .update();\r
        }, 25);\r
    <\/script>\r
</body>\r
\r
</html>\r
\`\`\``;export{n as default};
