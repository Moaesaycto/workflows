const n=`# The Lipschitz Constant\r
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
---\r
\r
## Lipschitz Constant\r
\r
The number \\\\(L\\\\) is a **Lipschitz constant** for a function \\\\(f:[a,b] \\\\to \\\\mathbb{R}\\\\) if:\r
\r
\\\\[\r
    |f(x) - f(y)| \\\\leq L|x-y|, \\\\quad \\\\text{for all } x,y \\\\in [a,b].\r
\\\\]\r
\r
We say that the function \\\\(f:[a,b] \\\\to \\\\mathbb{R}\\\\) is **Lipschitz** if a Lipschitz constant for \\\\(f\\\\) exists.\r
\r
If \\\\(f\\\\) is Lipschitz, then \\\\(f\\\\) is (uniformly) continuous. However, the converse is not necessarily true.\r
\r
For any closed and bounded interval \\\\(I = [a,b],\\\\) if \\\\(f\\\\) is \\\\(C^1\\\\) on \\\\(I\\\\) then:\r
\r
\\\\[\r
    L = \\\\max_{x \\\\in I}|f'(x)|\r
\\\\]\r
\r
is a Lipschitz constant for \\\\(f\\\\) on \\\\(I.\\\\) Note that \\\\(f \\\\in C^k\\\\) implies that \\\\(f\\\\) is \\\\(k\\\\) times differentiable.\r
\r
More generally, a vector field \\\\(\\\\mathbf{F}: S \\\\to \\\\mathbb{R}^N\\\\) is Lipschitz on \\\\(S \\\\in \\\\mathbb{R}^N\\\\) if:\r
\r
\\\\[\r
    \\\\|\\\\mathbf{F}(\\\\mathbf{x}) - \\\\mathbf{F}(\\\\mathbf{y})\\\\| \\\\leq L \\\\|\\\\mathbf{x} - \\\\mathbf{y}\\\\|.\r
\\\\]\r
\r
Here, our norm is the **Euclidean norm** on \\\\(\\\\mathbb{R}^N.\\\\)\r
\r
`;export{n as default};
