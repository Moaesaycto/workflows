const l=`# Equilibrium Points\r
\r
An equilibrium point \\\\(\\\\boldsymbol{a} \\\\in \\\\mathbb{R}^N\\\\) for the dynamical system:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x})\r
\\\\]\r
\r
is a point where \\\\(\\\\boldsymbol{F}(\\\\boldsymbol{a}) = \\\\boldsymbol{0}.\\\\) Thus, the solution of:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}), \\\\quad \\\\boldsymbol{x}(0) = \\\\boldsymbol{a},\r
\\\\]\r
\r
is just the constant function \\\\(\\\\boldsymbol{x}(t) = \\\\boldsymbol{a}.\\\\)\r
\r
Consider the system:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = A\\\\boldsymbol{x} + \\\\boldsymbol{b}, \\\\quad \\\\boldsymbol{x}(0) = \\\\boldsymbol{x}_0,\r
\\\\]\r
\r
where \\\\(\\\\det(A) \\\\neq 0.\\\\) Since:\r
\r
\\\\[\r
    A\\\\boldsymbol{x} + \\\\boldsymbol{b} = \\\\boldsymbol{0} \\\\iff \\\\boldsymbol{x} = -A^{-1}\\\\boldsymbol{b},\r
\\\\]\r
\r
the only equilibrium point is:\r
\r
\\\\[\r
    \\\\boldsymbol{a} + e^{tA}(\\\\boldsymbol{x}_0 - \\\\boldsymbol{a}).\r
\\\\]\r
\r
Let \\\\(A\\\\) be a diagonalizable matrix with eigenvalues \\\\(\\\\lambda_1, \\\\lambda_2, \\\\dots, \\\\lambda_N.\\\\) The equilibrium point \\\\(\\\\boldsymbol{a} = -A^{-1}\\\\boldsymbol{b}\\\\) is:\r
\r
1. **Stable** if and only if \\\\(\\\\text{Re}(\\\\lambda_j) \\\\leq 0\\\\) for all \\\\(j.\\\\)\r
2. **Asymptotically stable** if and only if \\\\(\\\\text{Re}(\\\\lambda_j) < 0\\\\) for all \\\\(j.\\\\)\r
\r
In the second case, the **domain of attraction** is the whole of \\\\(\\\\mathbb{R}^N.\\\\)\r
\r
---\r
\r
## Stable Equilibrium\r
\r
An equilibrium point \\\\(\\\\boldsymbol{a}\\\\) is **stable** if for every \\\\(\\\\varepsilon > 0,\\\\) there exists \\\\(\\\\delta > 0\\\\) such that whenever \\\\(\\\\|\\\\boldsymbol{x}_0 - \\\\boldsymbol{a}\\\\| < \\\\delta,\\\\) the solution of:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}), \\\\quad \\\\boldsymbol{x}(0) = \\\\boldsymbol{x}_0,\r
\\\\]\r
\r
satisfies:\r
\r
\\\\[\r
    \\\\|\\\\boldsymbol{x}(t) - \\\\boldsymbol{a}\\\\| < \\\\varepsilon \\\\quad \\\\forall t > 0.\r
\\\\]\r
\r
A trajectory stays close to a stable equilibrium point if it starts sufficiently close to \\\\(\\\\boldsymbol{a}.\\\\)\r
\r
An equilibrium point \\\\(\\\\boldsymbol{a}\\\\) is **asymptotically stable** in a domain \\\\(D\\\\) if:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}), \\\\quad \\\\boldsymbol{x}(0) = \\\\boldsymbol{x}_0, \\\\quad \\\\boldsymbol{x}(t) \\\\to \\\\boldsymbol{a} \\\\text{ as } t \\\\to \\\\infty.\r
\\\\]\r
\r
In this case, \\\\(D\\\\) is called a **domain of attraction** for \\\\(\\\\boldsymbol{a}.\\\\)\r
\r
![stable_unstable](media/stable-and-unstable.png)\r
\r
### Summary of Stability Conditions\r
\r
For an equilibrium point \\\\(\\\\boldsymbol{a} = \\\\boldsymbol{0},\\\\) we classify stability as follows:\r
\r
- **Asymptotically stable** if \\\\(\\\\text{Re}(\\\\lambda_i) < 0\\\\) for all eigenvalues.\r
- **Stable (but not asymptotically)** if \\\\(\\\\text{Re}(\\\\lambda_i) \\\\leq 0\\\\) for all eigenvalues.\r
- **Unstable** if \\\\(\\\\text{Re}(\\\\lambda_i) > 0\\\\) for at least one eigenvalue.\r
\r
---\r
\r
## Classification of Equilibrium Points\r
\r
### Case 1: Real Eigenvalues \\\\(\\\\lambda_1\\\\) and \\\\(\\\\lambda_2\\\\) with Two Linearly Independent Eigenvectors\r
\r
**General solution:**\r
\r
\\\\[\r
    \\\\boldsymbol{x} = c_1e^{\\\\lambda_1 t}\\\\boldsymbol{v}_1 + c_2e^{\\\\lambda_2 t}\\\\boldsymbol{v}_2.\r
\\\\]\r
\r
**Canonical form:**\r
\r
\\\\[\r
    \\\\Lambda = \\\\begin{bmatrix}\\\\lambda_1 & 0\\\\\\\\0 & \\\\lambda_2\\\\end{bmatrix}.\r
\\\\]\r
\r
![stable_unstable](media/saddle-unstable.PNG)\r
\r
### Case 2: Complex Conjugate Eigenvalues \\\\(\\\\lambda_1 = \\\\bar{\\\\lambda_2} \\\\notin \\\\mathbb{R}\\\\)\r
\r
**General solution:**\r
\r
\\\\[\r
    \\\\boldsymbol{x} = c_1 \\\\text{Re}(e^{\\\\lambda_1 t}\\\\boldsymbol{v}_1) + c_2 \\\\text{Im}(e^{\\\\lambda_1t}\\\\boldsymbol{v}_1).\r
\\\\]\r
\r
**Canonical form:**\r
\r
\\\\[\r
    A = \\\\begin{bmatrix}\\\\alpha & \\\\beta \\\\\\\\ -\\\\beta & \\\\alpha \\\\end{bmatrix}, \\\\quad \\\\lambda_1 = \\\\alpha + i\\\\beta.\r
\\\\]\r
\r
We now focus on the canonical dynamical system:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\begin{bmatrix}\\\\alpha & \\\\beta \\\\\\\\ -\\\\beta & \\\\alpha\\\\end{bmatrix}\\\\boldsymbol{x}.\r
\\\\]\r
\r
**Eigenvector:**\r
\r
\\\\[\r
    \\\\boldsymbol{v}_1 = \\\\begin{bmatrix}1\\\\\\\\i\\\\end{bmatrix}.\r
\\\\]\r
\r
**Complex solution:**\r
\r
\\\\[\r
    e^{\\\\lambda_1 t}\\\\boldsymbol{v}_1 = e^{\\\\alpha t} (\\\\cos \\\\beta t + i \\\\sin \\\\beta t) \\\\begin{bmatrix}1 \\\\\\\\i\\\\end{bmatrix}.\r
\\\\]\r
\r
This can be interpreted as:\r
\r
\\\\[\r
    \\\\boldsymbol{x}(t) = e^{\\\\alpha t} R(t) \\\\boldsymbol{x}(0), \\\\quad R(t) = \\\\begin{bmatrix}\\\\cos \\\\beta t & \\\\sin \\\\beta t\\\\\\\\ -\\\\sin \\\\beta t & \\\\cos \\\\beta t \\\\end{bmatrix}.\r
\\\\]\r
\r
Thus, the initial vector \\\\(\\\\boldsymbol{x}(0)\\\\) is rotated by the rotation matrix \\\\(R(t)\\\\) and scaled by the factor \\\\(e^{\\\\alpha t}.\\\\)`;export{l as default};
