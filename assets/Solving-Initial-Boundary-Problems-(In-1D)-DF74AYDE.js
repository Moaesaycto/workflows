const n=`# Initial-Boundary Value Problems in 1D\r
\r
## Linear Two-Point Boundary Value Problem\r
\r
We aim to solve a **linear two-point boundary value problem**:\r
\r
\\\\[\r
    Lu = f, \\\\quad \\\\text{for } a < x < b,\r
\\\\]\r
\r
with boundary conditions:\r
\r
\\\\[\r
    B_1 u = \\\\alpha_1, \\\\quad B_2 u = \\\\alpha_2,\r
\\\\]\r
\r
where:\r
\r
\\\\[\r
    Lu = a_2 u'' + a_1u' + a_0u.\r
\\\\]\r
\r
This is a second-order linear differential operator, and the **boundary operators** are given by:\r
\r
\\\\[\r
    \\\\begin{aligned}\r
        B_1 u &= b_{11}u'(a) + b_{10}u(a),\\\\\\\\\r
        B_2 u &= b_{21}u'(b) + b_{20}u(b).\r
    \\\\end{aligned}\r
\\\\]\r
\r
Since \\\\(L\\\\), \\\\(B_1\\\\), and \\\\(B_2\\\\) are all linear, the solutions of the homogeneous BVP:\r
\r
\\\\[\r
    Lu = 0, \\\\quad \\\\text{for } a < x < b,\r
\\\\]\r
\r
with boundary conditions:\r
\r
\\\\[\r
    B_1u=0, \\\\quad B_2u = 0,\r
\\\\]\r
\r
form a vector space: if \\\\(u_1\\\\) and \\\\(u_2\\\\) are solutions, then so is:\r
\r
\\\\[\r
    u = c_1u_1 + c_2u_2, \\\\quad \\\\text{for any constants } c_1, c_2.\r
\\\\]\r
\r
Any two solutions of the inhomogeneous problem differ by a solution of the homogeneous problem:\r
\r
- If \\\\(u_1\\\\) and \\\\(u_2\\\\) satisfy the inhomogeneous BVP, then \\\\(u = u_1 - u_2\\\\) satisfies the homogeneous equation.\r
- If \\\\(u_1\\\\) satisfies the homogeneous equation and \\\\(u_2\\\\) satisfies the inhomogeneous equation, then:\r
\r
\\\\[\r
    u = u_1 + c u_2\r
\\\\]\r
\r
satisfies the homogeneous equation for any constant \\\\(c.\\\\)\r
\r
---\r
\r
## Existence and Uniqueness\r
\r
The inhomogeneous BVP:\r
\r
\\\\[\r
    Lu = f, \\\\quad \\\\text{for } a < x < b,\r
\\\\]\r
\r
with boundary conditions:\r
\r
\\\\[\r
    B_1 u = \\\\alpha_1, \\\\quad B_2 u = \\\\alpha_2,\r
\\\\]\r
\r
has **at most** one solution **if and only if** the homogeneous BVP has only the **trivial solution** \\\\(u \\\\equiv 0.\\\\)\r
\r
### Solving the Inhomogeneous Problem\r
\r
Suppose the general solution of the homogeneous equation \\\\(Lu=0\\\\) is:\r
\r
\\\\[\r
    u_H = c_1u_1(x) + c_2u_2(x),\r
\\\\]\r
\r
and that \\\\(u_P(x)\\\\) is a particular solution of the inhomogeneous equation \\\\(Lu =f.\\\\) The general solution of \\\\(Lu=f\\\\) is then:\r
\r
\\\\[\r
    u(x) = u_H(x) + u_P(x) = c_1u_1(x) + c_2u_2(x) + u_P(x).\r
\\\\]\r
\r
To satisfy the boundary conditions, we must choose \\\\(c_1\\\\) and \\\\(c_2\\\\) such that:\r
\r
\\\\[\r
    \\\\begin{aligned}\r
        B_1 ( c_1u_1 + c_2u_2 + u_P) &= \\\\alpha_1,\\\\\\\\\r
        B_2 ( c_1u_1 + c_2u_2 + u_P) &= \\\\alpha_2.\r
    \\\\end{aligned}\r
\\\\]\r
\r
Since \\\\(B_1\\\\) and \\\\(B_2\\\\) are linear, the inhomogeneous BVP has **at least one solution** if and only if the \\\\(2 \\\\times 2\\\\) linear system:\r
\r
\\\\[\r
    \\\\begin{bmatrix}B_1u_1 & B_1u_2\\\\\\\\ B_2u_1 & B_2u_2\\\\end{bmatrix} \r
    \\\\begin{bmatrix}c_1\\\\\\\\c_2\\\\end{bmatrix} = \r
    \\\\begin{bmatrix}\\\\alpha_1 - B_1u_P\\\\\\\\ \\\\alpha_2 - B_2u_P\\\\end{bmatrix}\r
\\\\]\r
\r
has at least one solution \\\\([c_1, c_2]^T.\\\\)\r
\r
Similarly, the homogeneous problem \\\\(u(x) = c_1u_1(x) + c_2u_2(x)\\\\) is a solution if and only if \\\\(c_1\\\\) and \\\\(c_2\\\\) satisfy:\r
\r
\\\\[\r
    \\\\begin{bmatrix}B_1u_1 & B_1u_2\\\\\\\\ B_2u_1 & B_2u_2\\\\end{bmatrix}\r
    \\\\begin{bmatrix}c_1\\\\\\\\c_2\\\\end{bmatrix} = \r
    \\\\begin{bmatrix}0\\\\\\\\0\\\\end{bmatrix}.\r
\\\\]\r
\r
The \\\\(2 \\\\times 2\\\\) matrix on the left is **non-singular** if and only if this homogeneous linear system has only the trivial solution \\\\(c_1 = c_2 = 0.\\\\)\r
\r
### Conclusion\r
\r
If the homogeneous problem has only the trivial solution, then for every choice of \\\\(f\\\\), \\\\(\\\\alpha_1\\\\), and \\\\(\\\\alpha_2,\\\\) the inhomogeneous problem:\r
\r
\\\\[\r
    Lu = f, \\\\quad \\\\text{for } a < x < b, \\\\quad \\\\text{with } B_1u = \\\\alpha_1 \\\\text{ and } B_2 u = \\\\alpha_2,\r
\\\\]\r
\r
has a **unique solution**.`;export{n as default};
