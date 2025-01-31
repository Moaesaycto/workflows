const t=`# Dynamical Systems\r
\r
A (first-order) **dynamical system** is formulated as:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x}).\r
\\\\]\r
\r
Any first-order system of \\\\(N\\\\) ODEs in the form:\r
\r
\\\\[\r
    \\\\begin{aligned}\r
        \\\\frac{dx}{dt} &= F_1(x, y, \\\\dots, x_N),~~~x(0) = x_{10},\\\\\\\\\r
        \\\\frac{dy}{dt} &= F_2(x, y, \\\\dots, x_N),~~~y(0) = x_{20},\\\\\\\\\r
        &\\\\vdots\\\\\\\\\r
        \\\\frac{dx_N}{dt} &= F_N(x, y, \\\\dots, x_N), ~~~ x_N(0) = x_{N0},\r
    \\\\end{aligned}\r
\\\\]\r
\r
can be written in vector notation as:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x}), \\\\quad \\\\mathbf{x}(0) = \\\\mathbf{x}_0.\r
\\\\]\r
\r
The system of ODEs is determined by the **vector field** \\\\(\\\\mathbf{F}:\\\\mathbb{R}^N \\\\to \\\\mathbb{R}^N.\\\\)\r
\r
Our system is said to be **autonomous** if it is in the form:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x}).\r
\\\\]\r
\r
In a **non-autonomous** system, \\\\(\\\\mathbf{F}\\\\) will depend explicitly on \\\\(t\\\\):\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x}, t).\r
\\\\]\r
\r
Given a non-autonomous system:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x}, t),\r
\\\\]\r
\r
let:\r
\r
\\\\[\r
    \\\\mathbf{y} = \\\\begin{bmatrix}\\\\mathbf{x} \\\\\\\\ t \\\\end{bmatrix}, \\\\quad \\\\mathbf{G}(\\\\mathbf{y}) = \\\\begin{bmatrix}\\\\mathbf{F}(\\\\mathbf{x}, t)\\\\\\\\1\\\\end{bmatrix}.\r
\\\\]\r
\r
If \\\\(\\\\mathbf{x} = \\\\mathbf{x}(t)\\\\) is a solution of this system, then \\\\(\\\\mathbf{y} = \\\\mathbf{y}(t)\\\\) is a solution of the autonomous system:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{y}}{dt} = \\\\begin{bmatrix} d\\\\mathbf{x}/dt\\\\\\\\dt/dt\\\\end{bmatrix} = \\\\begin{bmatrix}\\\\mathbf{F}(\\\\mathbf{x}, t)\\\\\\\\1\\\\end{bmatrix},\r
\\\\]\r
\r
and vice versa.\r
\r
`;export{t as default};
