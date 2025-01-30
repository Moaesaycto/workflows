const r=`# The Frobenius Normal Form\r
\r
The **Frobenius normal form** is given by:\r
\r
$$\r
    z^2u'' + zP(z)u' + Q(z)u = 0,\r
$$\r
\r
where $P(z)$ and $Q(z)$ are [analytic](https://en.wikipedia.org/wiki/Analytic_function) at $z = 0.$\r
\r
For $z$ near $0,$ we have $P(z) \\approx P_0$ and $Q(z) \\approx Q_0,$ so we might expect $u(z)$ to behave like a solution of:\r
\r
$$\r
    z^2u'' + P_0zu'+Q_0u = 0.\r
$$\r
\r
We consider the **indicial polynomial**:\r
\r
$$\r
    I(r) = r(r-1)+P_0r+Q_0 = (r-r_1)(r-r_2).\r
$$\r
\r
If $r_1 \\neq r_2,$ then the approximating Cauchy-Euler ODE has the general solution:\r
\r
$$\r
    u(z) = z^r\\sum_{k=0}^{\\infty} A_k z^k = \\sum_{k=0}^{\\infty} A_kz^{k+r}, \\quad |z| < \\rho, \\quad \\text{with } A_0 \\neq 0.\r
$$\r
\r
For analytic $P(z)$ and $Q(z)$ satisfying:\r
\r
$$\r
    P(z) = \\sum_{k=0}^{\\infty} P_kz^k, \\quad Q(z) = \\sum_{k=0}^{\\infty} Q_kz^k, \\quad |z| < \\rho,\r
$$\r
\r
we manipulate our equation $Lu(z)$ to get:\r
\r
$$\r
    Lu(z) = I(r)A_0z^r + \\sum_{k=1}^{\\infty} \\left(I(k+r)A_k + \\sum_{j=0}^{k-1} [(j+r)P_{k-j} + Q_{k-j}]A_j\\right)z^{k+r},\r
$$\r
\r
so we define $A_0(r) = 1$ and:\r
\r
$$\r
    A_k(r) = -\\frac{1}{I(k+r)} \\sum_{j=0}^{k-1}[(j+r)P_{k-j} + Q_{k-j}]A_j(r), \\quad k\\geq 1,\r
$$\r
\r
provided $I(k+r) \\neq 0$ for all $k \\geq 1.$\r
\r
---\r
\r
### Example Question\r
\r
Consider:\r
\r
$$\r
    Lu = 2z^2u'' + 7zu' - (z^2+3)u = 0.\r
$$\r
\r
We have:\r
\r
$$\r
    P(z) = \\frac{7}{2}, \\quad Q(z) = -\\frac{z^2 + 3}{2},\r
$$\r
\r
which are analytic at $z = 0.$ Thus:\r
\r
$$\r
    P_0 \\approx \\frac{7}{2}, \\quad Q_0 \\approx -\\frac{3}{2}.\r
$$\r
\r
The approximating Cauchy-Euler equation is:\r
\r
$$\r
    2z^2u'' + 7zu'-3u = 0.\r
$$\r
\r
Using:\r
\r
$$\r
    \\begin{aligned}\r
        u &= \\sum_{k=0}^{\\infty} A_kz^{k+r},\\\\\r
        u' &= \\sum_{k=0}^{\\infty} (k+r)A_kz^{k+r-1},\\\\\r
        u'' &= \\sum_{k=0}^{\\infty} (k+r)(k+r-1)A_kz^{k+r-2},\\\\\r
    \\end{aligned}\r
$$\r
\r
we find:\r
\r
$$\r
    \\begin{aligned}\r
        Lu &= (2z^2u'' + 7zu' - 3u) - z^2u\\\\\r
        &= \\sum_{k=0}^{\\infty}[2(k+r)(k+r-1)+7(k+r)-3]A_kz^{k+r} - \\sum_{k = 0}^{\\infty} A_kz^{k+r+2}\\\\\r
        &= (2r - 1)(r+3)A_0z^r + (2r+1)(r+4)A_1z^{r+1} + \\sum_{k=2}^{\\infty}[(2k+2r-1)(k+r+3)A_k - A_{k-2}]z^{k+r}.\r
    \\end{aligned}\r
$$\r
\r
Thus, $u$ is a solution if:\r
\r
$$\r
    r = \\left\\{\\frac{1}{2}, -3\\right\\},\r
$$\r
\r
with:\r
\r
$$\r
    A_1 = 0, \\quad A_k = \\frac{A_{k-2}}{(2k+2r-1)(k+r+3)}, \\quad \\text{for all } k \\geq 2.\r
$$\r
\r
For $r = \\frac{1}{2}$ we have:\r
\r
$$\r
    A_1 = 0, \\quad A_2 = \\frac{A_0}{22}, \\quad A_3 = 0, \\quad A_4 = \\frac{A_0}{1320}, \\dots,\r
$$\r
\r
which gives:\r
\r
$$\r
    u(z) = A_0z^{1/2}\\left(1 + \\frac{z^2}{22} + \\frac{z^4}{1320} + \\dots \\right).\r
$$\r
\r
Similarly, for $r = -3,$ we have:\r
\r
$$\r
    u(z) = A_0z^{-3}\\left(1 - \\frac{z^2}{6} + \\frac{z^4}{24} + \\dots\\right).\r
$$\r
\r
`;export{r as default};
