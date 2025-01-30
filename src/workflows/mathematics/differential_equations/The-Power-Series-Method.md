# The Power Series Method

If \\(L\\) has variable coefficients, then we cannot expect in general that the solution of \\(Lu = 0\\) is expressible in terms of elementary functions. Power series provide a flexible way to represent \\(u\\) in this case. The best way to see how this can be accomplished is by considering an example.

Consider the initial-value problem

\\[
    Lu = (1-x^2) u'' - 5xu' - 4u = 0, \\quad u(0)=1, \\quad u'(0) = 2.
\\]

We aim to look for a solution in the form of a power series:

\\[
    u(x) = \\sum_{k=0}^{\\infty} A_kx^k.
\\]

From our original equation, we can arrive at

\\[
    Lu = \\sum_{k=0}^{\\infty} (k+2)[(k+1)A_{k+2} - (k+2)A_k]x^k.
\\]

It should be clear from the initial conditions that \\(A_0 = 1\\) and \\(A_1 = 2.\\)

If the coefficients equal zero for all \\(k,\\) we must satisfy the following recurrence relation:

\\[
    A_{k+2} = \\frac{k+2}{k+1}A_k, \\quad k = 0, 1, \\dots.
\\]

Since we have initial conditions from earlier, we can see that \\(A_0 = 1, A_1 = 2, A_2 = 2, A_3 = 3, \\dots,\\) so we obtain:

\\[
    u(x) = 1 + 2x + 2x^2 + 3x^3 + \\dots.
\\]

On further investigation, we may notice that:

\\[
    \\lim_{k \\to \\infty} \\frac{A_{k+2}x^{k+2}}{A_kx^k} = \\lim_{k \\to \\infty} \\frac{k+2}{k+1}x^2 = x^2.
\\]

The ratio test shows that

\\[
    \\sum_{j=0}^{\\infty} A_{2j}x^{2j} \\quad \\text{and} \\quad \\sum_{j=0}^{\\infty} A_{2j+1}x^{2j+1}
\\]

converge for \\(x^2 < 1\\) but diverge for \\(x^2 > 1.\\)

---

## General Case

Consider the general second-order, linear, homogeneous ODE:

\\[
    Lu = a_2(x)u'' + a_1(x)u' + a_0(x)u = 0.
\\]

Equivalently, we can rewrite:

\\[
    u'' + p(x)u' + q(x)u = 0,
\\]

where:

\\[
    p(x) = \\frac{a_1(x)}{a_2(x)}, \\quad q(x) = \\frac{a_0(x)}{a_2(x)}.
\\]

We will assume that \\(a_0, a_1, a_2\\) are [analytic](https://en.wikipedia.org/wiki/Analytic_function) at \\(0,\\) and that \\(a_2(0) \\neq 0.\\) Then \\(p\\) and \\(q\\) are analytic at \\(0,\\) that is, they admit power series expansions:

\\[
    p(z) = \\sum_{k=0}^{\\infty} p_kz^k, \\quad q(z) = \\sum_{k=0}^{\\infty} q_kz^k, \\quad |z| < \\rho,
\\]

for some \\(\\rho > 0.\\) If:

\\[
    u(z) = \\sum_{k=0}^{\\infty} A_k z^k,
\\]

then we find that:

\\[
    Lu(z) = (2A_2 + p_0A_1 + q_0A_0) + (6A_3 + 2p_0A_2 + p_1A_1 + q_0A_1 + q_1A_0) + \\dots,
\\]

where, on the RHS, the coefficient of \\(z^{n-1}\\) for a general \\(n \\geq 1\\) is:

\\[
    (n+1)nA_{n+1} + \\sum_{j=0}^{n-1}[(n-j)p_jA_{n-j}+q_jA_{n-1-j}].
\\]

Given \\(u(0)\\) and \\(u'(0),\\) we put \\(A_0 = u(0)\\) and \\(A_1 = u'(0),\\) and compute recursively:

\\[
    A_{n+1} = \\frac{-1}{n(n+1)}\\sum_{j=0}^{n-1}[(n-j)p_jA_{n-j} + q_jA_{n-1-j}], \\quad n \\geq 1.
\\]

---

## Convergence Theorem

If the coefficients \\(p(z)\\) and \\(q(z)\\) are analytic for \\(|z| \\leq \\rho,\\) then the formal power series for the solution \\(u(z),\\) in the above section, is also analytic for \\(|z| < \\rho.\\)

---

## Expansion About a Non-Zero Point

We've investigated the case of finding a power series about \\(c \\neq 0,\\) for instance because the initial conditions are given at \\(x = c.\\) A simple change of the independent variable allows us to write:

\\[
    u = \\sum_{k=0}^{\\infty} A_k(z-c)^k = \\sum_{k=0}^{\\infty} A_kZ^k \\quad \\text{where} \\quad Z = z-c.
\\]

Since:

\\[
    \\frac{du}{dz} = \\frac{du}{dZ}, \\quad \\frac{d^2u}{dz^2} = \\frac{d^2u}{dZ^2},
\\]

we obtain the translated equation:

\\[
    \\frac{d^2u}{dZ^2} + p(Z + c)\\frac{du}{dZ} + q(Z + c)u = 0.
\\]

Now compute the \\(A_k\\) using the series expansions of \\(p(Z + c)\\) and \\(q(Z+c)\\) in powers of \\(Z.\\)