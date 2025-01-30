const o=`# Dynamical Systems\r
\r
A (first-order) **dynamical system** is formulated as:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}).\r
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
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}), \\\\quad \\\\boldsymbol{x}(0) = \\\\boldsymbol{x}_0.\r
\\\\]\r
\r
The system of ODEs is determined by the **vector field** \\\\(\\\\boldsymbol{F}:\\\\mathbb{R}^N \\\\to \\\\mathbb{R}^N.\\\\)\r
\r
Our system is said to be **autonomous** if it is in the form:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}).\r
\\\\]\r
\r
In a **non-autonomous** system, \\\\(\\\\boldsymbol{F}\\\\) will depend explicitly on \\\\(t\\\\):\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}, t).\r
\\\\]\r
\r
Given a non-autonomous system:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}, t),\r
\\\\]\r
\r
let:\r
\r
\\\\[\r
    \\\\boldsymbol{y} = \\\\begin{bmatrix}\\\\boldsymbol{x} \\\\\\\\ t \\\\end{bmatrix}, \\\\quad \\\\boldsymbol{G}(\\\\boldsymbol{y}) = \\\\begin{bmatrix}\\\\boldsymbol{F}(\\\\boldsymbol{x}, t)\\\\\\\\1\\\\end{bmatrix}.\r
\\\\]\r
\r
If \\\\(\\\\boldsymbol{x} = \\\\boldsymbol{x}(t)\\\\) is a solution of this system, then \\\\(\\\\boldsymbol{y} = \\\\boldsymbol{y}(t)\\\\) is a solution of the autonomous system:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{y}}{dt} = \\\\begin{bmatrix} d\\\\boldsymbol{x}/dt\\\\\\\\dt/dt\\\\end{bmatrix} = \\\\begin{bmatrix}\\\\boldsymbol{F}(\\\\boldsymbol{x}, t)\\\\\\\\1\\\\end{bmatrix},\r
\\\\]\r
\r
and vice versa.\r
\r
`;export{o as default};
