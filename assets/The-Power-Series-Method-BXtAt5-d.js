const n=`# The Power Series Method\r
\r
If \\\\(L\\\\) has variable coefficients, then we cannot expect in general that the solution of \\\\(Lu = 0\\\\) is expressible in terms of elementary functions. Power series provide a flexible way to represent \\\\(u\\\\) in this case. The best way to see how this can be accomplished is by considering an example.\r
\r
Consider the initial-value problem\r
\r
\\\\[\r
    Lu = (1-x^2) u'' - 5xu' - 4u = 0, \\\\quad u(0)=1, \\\\quad u'(0) = 2.\r
\\\\]\r
\r
We aim to look for a solution in the form of a power series:\r
\r
\\\\[\r
    u(x) = \\\\sum_{k=0}^{\\\\infty} A_kx^k.\r
\\\\]\r
\r
From our original equation, we can arrive at\r
\r
\\\\[\r
    Lu = \\\\sum_{k=0}^{\\\\infty} (k+2)[(k+1)A_{k+2} - (k+2)A_k]x^k.\r
\\\\]\r
\r
It should be clear from the initial conditions that \\\\(A_0 = 1\\\\) and \\\\(A_1 = 2.\\\\)\r
\r
If the coefficients equal zero for all \\\\(k,\\\\) we must satisfy the following recurrence relation:\r
\r
\\\\[\r
    A_{k+2} = \\\\frac{k+2}{k+1}A_k, \\\\quad k = 0, 1, \\\\dots.\r
\\\\]\r
\r
Since we have initial conditions from earlier, we can see that \\\\(A_0 = 1, A_1 = 2, A_2 = 2, A_3 = 3, \\\\dots,\\\\) so we obtain:\r
\r
\\\\[\r
    u(x) = 1 + 2x + 2x^2 + 3x^3 + \\\\dots.\r
\\\\]\r
\r
On further investigation, we may notice that:\r
\r
\\\\[\r
    \\\\lim_{k \\\\to \\\\infty} \\\\frac{A_{k+2}x^{k+2}}{A_kx^k} = \\\\lim_{k \\\\to \\\\infty} \\\\frac{k+2}{k+1}x^2 = x^2.\r
\\\\]\r
\r
The ratio test shows that\r
\r
\\\\[\r
    \\\\sum_{j=0}^{\\\\infty} A_{2j}x^{2j} \\\\quad \\\\text{and} \\\\quad \\\\sum_{j=0}^{\\\\infty} A_{2j+1}x^{2j+1}\r
\\\\]\r
\r
converge for \\\\(x^2 < 1\\\\) but diverge for \\\\(x^2 > 1.\\\\)\r
\r
---\r
\r
## General Case\r
\r
Consider the general second-order, linear, homogeneous ODE:\r
\r
\\\\[\r
    Lu = a_2(x)u'' + a_1(x)u' + a_0(x)u = 0.\r
\\\\]\r
\r
Equivalently, we can rewrite:\r
\r
\\\\[\r
    u'' + p(x)u' + q(x)u = 0,\r
\\\\]\r
\r
where:\r
\r
\\\\[\r
    p(x) = \\\\frac{a_1(x)}{a_2(x)}, \\\\quad q(x) = \\\\frac{a_0(x)}{a_2(x)}.\r
\\\\]\r
\r
We will assume that \\\\(a_0, a_1, a_2\\\\) are [analytic](https://en.wikipedia.org/wiki/Analytic_function) at \\\\(0,\\\\) and that \\\\(a_2(0) \\\\neq 0.\\\\) Then \\\\(p\\\\) and \\\\(q\\\\) are analytic at \\\\(0,\\\\) that is, they admit power series expansions:\r
\r
\\\\[\r
    p(z) = \\\\sum_{k=0}^{\\\\infty} p_kz^k, \\\\quad q(z) = \\\\sum_{k=0}^{\\\\infty} q_kz^k, \\\\quad |z| < \\\\rho,\r
\\\\]\r
\r
for some \\\\(\\\\rho > 0.\\\\) If:\r
\r
\\\\[\r
    u(z) = \\\\sum_{k=0}^{\\\\infty} A_k z^k,\r
\\\\]\r
\r
then we find that:\r
\r
\\\\[\r
    Lu(z) = (2A_2 + p_0A_1 + q_0A_0) + (6A_3 + 2p_0A_2 + p_1A_1 + q_0A_1 + q_1A_0) + \\\\dots,\r
\\\\]\r
\r
where, on the RHS, the coefficient of \\\\(z^{n-1}\\\\) for a general \\\\(n \\\\geq 1\\\\) is:\r
\r
\\\\[\r
    (n+1)nA_{n+1} + \\\\sum_{j=0}^{n-1}[(n-j)p_jA_{n-j}+q_jA_{n-1-j}].\r
\\\\]\r
\r
Given \\\\(u(0)\\\\) and \\\\(u'(0),\\\\) we put \\\\(A_0 = u(0)\\\\) and \\\\(A_1 = u'(0),\\\\) and compute recursively:\r
\r
\\\\[\r
    A_{n+1} = \\\\frac{-1}{n(n+1)}\\\\sum_{j=0}^{n-1}[(n-j)p_jA_{n-j} + q_jA_{n-1-j}], \\\\quad n \\\\geq 1.\r
\\\\]\r
\r
---\r
\r
## Convergence Theorem\r
\r
If the coefficients \\\\(p(z)\\\\) and \\\\(q(z)\\\\) are analytic for \\\\(|z| \\\\leq \\\\rho,\\\\) then the formal power series for the solution \\\\(u(z),\\\\) in the above section, is also analytic for \\\\(|z| < \\\\rho.\\\\)\r
\r
---\r
\r
## Expansion About a Non-Zero Point\r
\r
We've investigated the case of finding a power series about \\\\(c \\\\neq 0,\\\\) for instance because the initial conditions are given at \\\\(x = c.\\\\) A simple change of the independent variable allows us to write:\r
\r
\\\\[\r
    u = \\\\sum_{k=0}^{\\\\infty} A_k(z-c)^k = \\\\sum_{k=0}^{\\\\infty} A_kZ^k \\\\quad \\\\text{where} \\\\quad Z = z-c.\r
\\\\]\r
\r
Since:\r
\r
\\\\[\r
    \\\\frac{du}{dz} = \\\\frac{du}{dZ}, \\\\quad \\\\frac{d^2u}{dz^2} = \\\\frac{d^2u}{dZ^2},\r
\\\\]\r
\r
we obtain the translated equation:\r
\r
\\\\[\r
    \\\\frac{d^2u}{dZ^2} + p(Z + c)\\\\frac{du}{dZ} + q(Z + c)u = 0.\r
\\\\]\r
\r
Now compute the \\\\(A_k\\\\) using the series expansions of \\\\(p(Z + c)\\\\) and \\\\(q(Z+c)\\\\) in powers of \\\\(Z.\\\\)`;export{n as default};
