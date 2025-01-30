# Polynomial Solutions of a Linear ODE

Let \\(L = p(D)\\) be a linear differential operator of order \\(m\\) with constant coefficients. Assume that \\(a_0 = p(0) \\neq 0.\\) For any integer \\(r \\geq 0,\\) there exists a unique polynomial \\(u_P\\) of degree \\(r\\) such that \\(Lu_P = x^r.\\)

Separately, when \\(p(0) = p'(0) = \\cdots = p^{(k-1)}(0) = 0\\) but \\(p^{(k)}(0) \\neq 0\\) where \\(1 \\leq k \\leq m-1.\\) For any integer \\(r \\geq 0,\\) there exists a unique polynomial \\(v\\) of degree \\(r\\) such that \\(u_p(x) = x^kv(x)\\) satisfies \\(Lu_P = x^r.\\)

---

### Sample Questions

**Example Question:** Let \\(Lu = 3u'' - u' + 2u,\\) where \\(Lu = 8x^3.\\)

Our theorem ensures that \\(u_P(x) = C + Ex + Fx^2 + Gx^3\\) works for some \\(C,\\) \\(E,\\) \\(F,\\) and \\(G.\\) In fact:

\\[
    Lu_p = (2C - E + 6F) + (2E - 2F + 18G)x + (2F - 3G)x^2 + 2Gx^3 .
\\]

By comparing coefficients, we can solve this system to get \\(u_P = -33 - 30x + 6x^2 + 4x^3.\\)

**Example Question:** Let \\(Lu = u''' + 2u''.\\) Find the particular solution to \\(Lu=12x^2.\\)

The theorem ensures that \\(u_P = x^2(C + Ex + Fx^2) = Cx^2 + Ex^3 + Fx^4\\) works for some \\(C, E, F.\\) In fact,

\\[
    Lu_P = (4C + 6E) + (12E + 24F)x + 24x^2,
\\]

so comparing coefficients, we get \\(u_P = \\dfrac{x^2}{2}(3-2x+x^2).\\)

---

## Exponential Solutions of a Linear ODE

Let \\(L = p(D)\\) and \\(\\mu \\in \\mathbb{C}.\\) If \\(p(\\mu) \\neq 0,\\) then the function

\\[
    u_P(x) = \\dfrac{e^{\\mu x}}{p(\\mu)}
\\]

satisfies \\(Lu_p = e^{\\mu x}.\\) This follows at once since \\(p(D) e^{\\mu x} = p(\\mu)e^{\\mu x}.\\)

---

### Sample Question

**Example Question:** Consider the differential equation \\(u'' + 4u' - 3u = 3e^{2x}.\\)

From this theorem, it's clear that \\(\\mu = 2\\) and \\(p(\\mu) = 3,\\) so we have that a particular solution is

\\[
    u_P = \\dfrac{e^{2x}}{3}.
\\]

---

## Product of Polynomial and Exponential Solutions of a Linear ODE

Let \\(L = p(D)\\) and assume that \\(p(\\mu) \\neq 0.\\) For any integer \\(r \\geq 0,\\) there exists a unique polynomial \\(v\\) of degree \\(r\\) such that \\(u_P = v(x)e^{\\mu x}\\) satisfies \\(Lu_P = x^r e^{\\mu x}.\\)

Separately, if \\(u(x) = w(x)e^{\\mu x}\\) then \\(p(D)u = e^{\\mu x}q(D)w\\) where

\\[
    q(z) = \\sum_{j=0}^m p^{(j)}(\\mu) \\frac{z^j}{j!}.
\\]

Again, let \\(L = p(D)\\) and assume \\(p(\\mu) = p'(\\mu) = \\cdots = p^{(k-1)}(\\mu) = 0\\) but \\(p^{(k)}(\\mu) \\neq 0,\\) where \\(1 \\leq k \\leq m-1.\\) For any integer \\(r \\geq 0,\\) there exists a unique polynomial \\(v\\) of degree \\(r\\) such that

\\[
    u_P(x) = x^kv(x)e^{\\mu x}
\\]

satisfies \\(Lu_P = x^re^{\\mu x}.\\)

We can see this since \\(q^{(j)}(0) = p^{(j)}(\\mu)\\) for all \\(j,\\) there is a unique polynomial \\(v\\) of degree \\(r\\) such that \\(w(x) = x^kv(x)\\) satisfies \\(q(D)w = x^r\\) and hence \\(p(D)u_P = e^{\\mu x}q(D)w = e^{\\mu x}x^r.\\)

---

### Example Question

**Example Question:** Consider solving the equation \\(2u'' + u' - 3u = 9xe^{-2x}.\\)

Here, \\(p(z) = 2z^2 + z - 3,\\) so \\(p(-2) = 3 \\neq 0\\) and a particular solution \\(u_P = (Cx + E)e^{-2x}\\) exists. So, we find that

\\[
    p(D)u_P = (3Cx - 7C + 3E)e^{-2x}
\\]

so, by comparing coefficients, we have \\(3C = 9\\) and \\(-7C + 3E = 0.\\) This gives the solution \\(C = 3\\) and \\(E = 7,\\) so

\\[
    u_P = (3x + 7)e^{-2x}.
\\]

**Example Question:** Consider solving the ODE \\(Lu=12e^{2x}\\) where \\(Lu = u''' - 4u'' + 4u'.\\)

Here, \\(L=p(D)\\) for \\(p(z) = z^3 - 4z^2 + 4z = z(z-2)^2,\\) so \\(p(2) = p'(2) = 0\\) but \\(p''(2) \\neq 0.\\) Thus, we try \\(u_P = Cx^2e^{2x}\\) and find

\\[
    Lu_P = 4Ce^{2x}
\\]

and we require \\(4C = 12.\\) Therefore, a particular solution is

\\[
    u_P = 3x^2e^{2x}.
\\]

