const n=`# Solving Cauchy-Euler ODEs\r
\r
A second-order Cauchy-Euler ODE has the form:\r
\r
$$\r
    Lu = ax^2u'' + bxu' + cu = f(x)\r
$$\r
\r
where $a, b,$ and $c$ are constants, with $a \\neq 0.$ This ODE is singular at $x = 0,$ meaning the leading term vanishes. Noticing that:\r
\r
$$\r
    Lx^r = [ar(r-1) + br + c]x^r,\r
$$\r
\r
we see that $u = x^r$ is a solution of the homogeneous equation $f = 0$ if and only if:\r
\r
$$\r
    ar(r-1) + br + c = 0.\r
$$\r
\r
Suppose:\r
\r
$$\r
    ar(r-1) + br + c = a(r-r_1)(r-r_2).\r
$$\r
\r
If $r_1 \\neq r_2,$ then the general solution of the homogeneous equation $Lu = 0$ is:\r
\r
$$\r
    u(x) = C_1x^{r_1} + C_2x^{r_2}, \\quad x>0.\r
$$\r
\r
If $r_1 = r_2$ then the general solution of the homogeneous Cauchy-Euler equation $Lu = 0$ is:\r
\r
$$\r
    u(x) = C_1x^{r_1} + C_2x^{r_2}\\ln x, \\quad x>0.\r
$$\r
\r
For non-homogeneous equations, we follow these steps:\r
\r
1. Solve the associated homogeneous equation (this gives $u_H$).\r
2. Divide the equation by $ax^2$ to put the equation in standard form.\r
3. Use the [variation of parameters](/workflows/#/mathematics/differential_equations/Solving-Linear-First-Order-ODEs) method to find $u_P$.\r
4. The solution is then $u = u_H + u_P.$ Ensure all terms are linearly independent.\r
\r
---\r
\r
### Example Questions\r
\r
#### Example 1: Distinct Real Roots\r
**Solve** $x^2 u'' + 7xu' + 8u = 0.$\r
\r
The auxiliary equation is:\r
\r
$$\r
    m^2 + 6m + 8 = 0 \\Rightarrow (m+4)(m+2) = 0,\r
$$\r
\r
so $m = -2, -4.$\r
\r
Thus, the solution is:\r
\r
$$\r
    u = C_1x^{-2} + C_2x^{-4}.\r
$$\r
\r
#### Example 2: Repeated Real Roots\r
**Solve** $9x^2u'' + 2xu' + u = 0.$\r
\r
From the auxiliary equation:\r
\r
$$\r
    9m^2 - 6m + 1 = 0 \\Rightarrow m = \\frac{1}{3}.\r
$$\r
\r
Since the two solutions are not linearly independent, we introduce the extra $\\ln(x)$ term:\r
\r
$$\r
    u = C_1x^{1/3} + C_2x^{1/3}\\ln x.\r
$$\r
\r
#### Example 3: Complex Roots\r
**Solve** $x^2u'' - 9xu' + 28u = 0.$\r
\r
For complex roots $m = \\alpha \\pm \\beta i,$ the solution takes the form:\r
\r
$$\r
    u = x^\\alpha [C_1 \\cos (\\beta \\ln x ) + C_2\\sin(\\beta \\ln x)].\r
$$\r
\r
The auxiliary equation:\r
\r
$$\r
    m^2 - 10m + 28 = 0 \\Rightarrow m = 5 \\pm \\sqrt{3}i.\r
$$\r
\r
Thus, the solution is:\r
\r
$$\r
    u = x^5 \\left[C_1 \\cos(\\sqrt{3}\\ln x) + C_2 \\sin (\\sqrt{3}\\ln x)\\right].\r
$$`;export{n as default};
