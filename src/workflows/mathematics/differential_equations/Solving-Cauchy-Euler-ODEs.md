# Solving Cauchy-Euler ODEs

A second-order Cauchy-Euler ODE has the form:

\\[
    Lu = ax^2u'' + bxu' + cu = f(x)
\\]

where \\(a, b,\\) and \\(c\\) are constants, with \\(a \\neq 0.\\) This ODE is singular at \\(x = 0,\\) meaning the leading term vanishes. Noticing that:

\\[
    Lx^r = [ar(r-1) + br + c]x^r,
\\]

we see that \\(u = x^r\\) is a solution of the homogeneous equation \\(f = 0\\) if and only if:

\\[
    ar(r-1) + br + c = 0.
\\]

Suppose:

\\[
    ar(r-1) + br + c = a(r-r_1)(r-r_2).
\\]

If \\(r_1 \\neq r_2,\\) then the general solution of the homogeneous equation \\(Lu = 0\\) is:

\\[
    u(x) = C_1x^{r_1} + C_2x^{r_2}, \\quad x>0.
\\]

If \\(r_1 = r_2\\) then the general solution of the homogeneous Cauchy-Euler equation \\(Lu = 0\\) is:

\\[
    u(x) = C_1x^{r_1} + C_2x^{r_2}\\ln x, \\quad x>0.
\\]

For non-homogeneous equations, we follow these steps:

1. Solve the associated homogeneous equation (this gives \\(u_H\\)).
2. Divide the equation by \\(ax^2\\) to put the equation in standard form.
3. Use the [variation of parameters](/workflows/#/mathematics/differential_equations/Solving-Linear-First-Order-ODEs) method to find \\(u_P\\).
4. The solution is then \\(u = u_H + u_P.\\) Ensure all terms are linearly independent.

---

### Example Questions

#### Example 1: Distinct Real Roots
**Solve** \\(x^2 u'' + 7xu' + 8u = 0.\\)

The auxiliary equation is:

\\[
    m^2 + 6m + 8 = 0 \\Rightarrow (m+4)(m+2) = 0,
\\]

so \\(m = -2, -4.\\)

Thus, the solution is:

\\[
    u = C_1x^{-2} + C_2x^{-4}.
\\]

#### Example 2: Repeated Real Roots
**Solve** \\(9x^2u'' + 2xu' + u = 0.\\)

From the auxiliary equation:

\\[
    9m^2 - 6m + 1 = 0 \\Rightarrow m = \\frac{1}{3}.
\\]

Since the two solutions are not linearly independent, we introduce the extra \\(\\ln(x)\\) term:

\\[
    u = C_1x^{1/3} + C_2x^{1/3}\\ln x.
\\]

#### Example 3: Complex Roots
**Solve** \\(x^2u'' - 9xu' + 28u = 0.\\)

For complex roots \\(m = \\alpha \\pm \\beta i,\\) the solution takes the form:

\\[
    u = x^\\alpha [C_1 \\cos (\\beta \\ln x ) + C_2\\sin(\\beta \\ln x)].
\\]

The auxiliary equation:

\\[
    m^2 - 10m + 28 = 0 \\Rightarrow m = 5 \\pm \\sqrt{3}i.
\\]

Thus, the solution is:

\\[
    u = x^5 \\left[C_1 \\cos(\\sqrt{3}\\ln x) + C_2 \\sin (\\sqrt{3}\\ln x)\\right].
\\]