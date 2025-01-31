const n=`# First Integrals\r
\r
A function \\\\(G:\\\\mathbb{R}^N \\\\to \\\\mathbb{R}\\\\) is a **first integral** (or constant of the motion) for the system of ODEs:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x})\r
\\\\]\r
\r
if \\\\(G(\\\\mathbf{x}(t))\\\\) is constant for every solution \\\\(\\\\mathbf{x}(t).\\\\)\r
\r
By the chain rule:\r
\r
\\\\[\r
    \\\\frac{d}{dt}G(\\\\mathbf{x}(t)) = \\\\sum_{j = 1}^N \\\\frac{\\\\partial G}{\\\\partial x_j} \\\\frac{dx_j}{dt} = \\\\nabla G(\\\\mathbf{x}) \\\\cdot \\\\frac{d\\\\mathbf{x}}{dt} = \\\\nabla G(\\\\mathbf{x}) \\\\cdot \\\\mathbf{F}(\\\\mathbf{x}).\r
\\\\]\r
\r
Geometrically, this means that \\\\(G\\\\) is a first integral if and only if:\r
\r
\\\\[\r
    \\\\nabla G(\\\\mathbf{x}) \\\\perp \\\\mathbf{F}(\\\\mathbf{x}) \\\\quad \\\\text{for all } \\\\mathbf{x}.\r
\\\\]\r
\r
---\r
\r
## Simple Example\r
\r
Consider the linear system:\r
\r
\\\\[\r
    \\\\begin{aligned}\r
        \\\\frac{dx}{dt} &= -y,\\\\\\\\\r
        \\\\frac{dy}{dt} &= x.\r
    \\\\end{aligned}\r
\\\\]\r
\r
with the first integral function \\\\(G(x,y) = x^2 + y^2.\\\\)\r
\r
Let:\r
\r
\\\\[\r
    \\\\mathbf{F}(x,y) = \\\\begin{bmatrix}-y\\\\\\\\x\\\\end{bmatrix}.\r
\\\\]\r
\r
We can see that:\r
\r
\\\\[\r
    \\\\nabla G \\\\cdot \\\\mathbf{F} = \\\\begin{bmatrix}2x\\\\\\\\2y\\\\end{bmatrix} \\\\cdot \\\\begin{bmatrix}-y\\\\\\\\x\\\\end{bmatrix} = 0.\r
\\\\]\r
\r
Equivalently:\r
\r
\\\\[\r
    \\\\frac{dG}{dt} = \\\\frac{\\\\partial G}{\\\\partial x} \\\\frac{dx}{dt} + \\\\frac{\\\\partial G}{\\\\partial y} \\\\frac{dy}{dt} = (2x)(-y) + (2y)(x) = 0.\r
\\\\]\r
\r
---\r
\r
## Partial Solutions\r
\r
A first integral provides a **partial solution** of the ODE. Setting \\\\(C = G(\\\\mathbf{x}_0),\\\\) we know that \\\\(\\\\mathbf{x}(t)\\\\) is confined to the surface \\\\(G(\\\\mathbf{x}) = C.\\\\)\r
\r
If \\\\(N=2,\\\\) the equation \\\\(G(x,y) = C\\\\) implicitly gives \\\\(y = g(x),\\\\) so:\r
\r
\\\\[\r
    \\\\frac{dx}{dt} = F_1(x,y) = F_1(x, g(x))\r
\\\\]\r
\r
and \\\\(F_1\\\\) becomes a known function of \\\\(x\\\\) alone. If we can evaluate:\r
\r
\\\\[\r
    t = \\\\int \\\\frac{dx}{F_1},\r
\\\\]\r
\r
to obtain \\\\(t=t(x),\\\\) then implicitly we know \\\\(x = x(t)\\\\) and finally \\\\(y = g(x(t)).\\\\)\r
\r
Now, suppose \\\\(N > 2\\\\) and we know several (functionally independent) first integrals \\\\(G_1, G_2, \\\\dots, G_k.\\\\) Then the solution \\\\(\\\\mathbf{x}(t)\\\\) must lie on the intersection of the surfaces:\r
\r
\\\\[\r
    G_j(\\\\mathbf{x}) = C_j, \\\\quad 1 \\\\leq j \\\\leq k,\r
\\\\]\r
\r
where \\\\(C_j = G_j(\\\\mathbf{x}_0).\\\\) We necessarily have \\\\(k \\\\leq N-1.\\\\) If \\\\(k = N-1,\\\\) then the **implicit function theorem** gives \\\\(x_j = g_j(x_1)\\\\) for \\\\(2 \\\\leq j \\\\leq N,\\\\) and thus \\\\(F_1(\\\\mathbf{x})\\\\) becomes a known function of \\\\(x_1.\\\\)\r
\r
As before:\r
\r
\\\\[\r
    t = \\\\int \\\\frac{dx_1}{F_1}.\r
\\\\]\r
\r
In principle, we then know \\\\(x_1 = x_1(t)\\\\) and hence:\r
\r
\\\\[\r
    x_j = g_j(x_1(t)) \\\\quad \\\\text{for } 2 \\\\leq j \\\\leq N.\r
\\\\]\r
\r
**Note that a system might not have any first integrals.**\r
\r
`;export{n as default};
