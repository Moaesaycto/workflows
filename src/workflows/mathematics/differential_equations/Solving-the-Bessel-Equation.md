# The Bessel Equation

The **Bessel equation** with parameter \\(\\nu\\) is:

\\[
    z^2u'' + zu' + (z^2 - \\nu^2)u = 0.
\\]

This ODE is in [Frobenius normal form](/workflows/#/mathematics/differential_equations/Solving-ODEs-in-the-Frobenious-Normal-Form) with indicial polynomial:

\\[
    I(r) = (r + \\nu)(r-\\nu),
\\]

and we seek a series solution:

\\[
    u(z) = \\sum_{k=0}^{\\infty} A_kz^{k+r}.
\\]

We assume that \\(\\text{Re}~\\nu \\geq 0,\\) so \\(r_1 = \\nu\\) and \\(r_2 = -\\nu.\\)

We can find that this solution is given by:

\\[
    J_\\nu = \\sum_{k=0}^{\\infty} \\frac{(-1)^k(z/2)^{2k+\\nu}}{k!\\Gamma(k+1+\\nu)}.
\\]

If \\(\\nu\\) is not an integer, then a second, linearly independent solution is:

\\[
    J_{-\\nu} = \\sum_{k=0}^{\\infty} \\frac{(-1)^k(z/2)^{2k-\\nu}}{k!\\Gamma(k+1-\\nu)}.
\\]

If \\(\\nu\\) is an integer, then these solutions are **linearly dependent**.

---

### The Neumann Function

The **Neumann function** (or Bessel function of the second kind) is:

\\[
    Y_\\nu(z) = \\frac{J_\\nu(z) \\cos \\nu \\pi - J_{-\\nu}(z)}{\\sin \\nu \\pi}, \\quad \\text{if } \\nu \\notin \\mathbb{Z}.
\\]

For \\(\\nu \\in \\mathbb{Z},\\) if \\(\\nu \\to n,\\) then \\(Y_\\nu\\) tends to a finite limit:

\\[
    Y_n (z) = \\lim_{\\nu \\to n}Y_\\nu(z).
\\]

The functions \\(J_\\nu\\) and \\(Y_\\nu\\) are linearly independent solutions of Bessel's equation for all complex \\(\\nu.\\) As \\(z \\to 0\\) with \\(\\nu\\) fixed,

\\[
    J_\\nu(z) \\sim \\dfrac{(z/2)^\\nu}{\\Gamma(\\nu + 1)}, \\quad \\nu \\notin \\mathbb{Z}^-.
\\]

Additionally,

\\[
    Y_0(z) \\sim \\frac{2}{\\pi}\\ln z, \\quad Y_\\nu(z) \\sim -\\dfrac{\\Gamma(\\nu)}{\\pi(z/2)^\\nu}, \\quad \\text{Re}\\nu > 0.
\\]

