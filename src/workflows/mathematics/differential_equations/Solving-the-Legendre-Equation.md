# The Legendre Equation

The **Legendre equation** with the parameter $\nu$ is:

$$
    (1-z^2)u'' -2zu' + \nu(\nu+1)u=0.
$$

This ODE is not [singular](/workflows/#/mathematics/differential_equations/Linear-Differential-Operators) at $z = 0,$ so the solution has an ordinary Taylor series expansion:

$$
    u = \sum_{k=0}^{\infty} A_kz^k.
$$

The coefficients $A_k$ must satisfy:

$$
    (k+1)(k+2)A_{k+2} - [k(k+1)-\nu(\nu + 1)]A_k = 0, \quad k \geq 0.
$$

Since:

$$
    k(k+1) - \nu(\nu + 1) = (k - \nu)(k + \nu + 1),
$$

the recurrence relation is:

$$
    A_{k+2} = \frac{(k + \nu)(k + \nu + 1)}{(k+1)(k+2)}A_k, \quad k \geq 0.
$$

Generally, we have the solution:

$$
    u(z) = A_0u_0(z) + A_1u_1(z),
$$

where:

$$
    u_0(z) = 1 - \dfrac{\nu(\nu + 1)}{2!}z^2 + \dfrac{(\nu - 2)\nu(\nu + 1)(\nu+3)}{4!}z^4 - \dots
$$

and:

$$
    u_1(z) = z - \dfrac{(\nu - 1)(\nu+2)}{3!}z^3 + \dfrac{(\nu-3)(\nu - 1)(\nu+2)(\nu+4)}{5!}z^5 - \dots.
$$

Suppose now that $\nu = n$ is a non-negative integer. If $n$ is even, then the series for $u_0(z)$ terminates, whereas $u_1(z)$ terminates for odd $n.$ The terminating solution is called the **Legendre polynomial** of degree $n$ and is denoted by $P_n(z)$ with the normalization $P_n(1)=1.$