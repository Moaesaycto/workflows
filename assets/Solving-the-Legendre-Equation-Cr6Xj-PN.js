const n=`# The Legendre Equation\r
\r
The **Legendre equation** with the parameter $\\nu$ is:\r
\r
$$\r
    (1-z^2)u'' -2zu' + \\nu(\\nu+1)u=0.\r
$$\r
\r
This ODE is not [singular](/workflows/#/mathematics/differential_equations/Linear-Differential-Operators) at $z = 0,$ so the solution has an ordinary Taylor series expansion:\r
\r
$$\r
    u = \\sum_{k=0}^{\\infty} A_kz^k.\r
$$\r
\r
The coefficients $A_k$ must satisfy:\r
\r
$$\r
    (k+1)(k+2)A_{k+2} - [k(k+1)-\\nu(\\nu + 1)]A_k = 0, \\quad k \\geq 0.\r
$$\r
\r
Since:\r
\r
$$\r
    k(k+1) - \\nu(\\nu + 1) = (k - \\nu)(k + \\nu + 1),\r
$$\r
\r
the recurrence relation is:\r
\r
$$\r
    A_{k+2} = \\frac{(k + \\nu)(k + \\nu + 1)}{(k+1)(k+2)}A_k, \\quad k \\geq 0.\r
$$\r
\r
Generally, we have the solution:\r
\r
$$\r
    u(z) = A_0u_0(z) + A_1u_1(z),\r
$$\r
\r
where:\r
\r
$$\r
    u_0(z) = 1 - \\dfrac{\\nu(\\nu + 1)}{2!}z^2 + \\dfrac{(\\nu - 2)\\nu(\\nu + 1)(\\nu+3)}{4!}z^4 - \\dots\r
$$\r
\r
and:\r
\r
$$\r
    u_1(z) = z - \\dfrac{(\\nu - 1)(\\nu+2)}{3!}z^3 + \\dfrac{(\\nu-3)(\\nu - 1)(\\nu+2)(\\nu+4)}{5!}z^5 - \\dots.\r
$$\r
\r
Suppose now that $\\nu = n$ is a non-negative integer. If $n$ is even, then the series for $u_0(z)$ terminates, whereas $u_1(z)$ terminates for odd $n.$ The terminating solution is called the **Legendre polynomial** of degree $n$ and is denoted by $P_n(z)$ with the normalization $P_n(1)=1.$`;export{n as default};
