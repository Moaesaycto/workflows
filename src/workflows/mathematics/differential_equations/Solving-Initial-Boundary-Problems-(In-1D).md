# Initial-Boundary Value Problems in 1D

## Linear Two-Point Boundary Value Problem

We aim to solve a **linear two-point boundary value problem**:

$$
    Lu = f, \quad \text{for } a < x < b,
$$

with boundary conditions:

$$
    B_1 u = \alpha_1, \quad B_2 u = \alpha_2,
$$

where:

$$
    Lu = a_2 u'' + a_1u' + a_0u.
$$

This is a second-order linear differential operator, and the **boundary operators** are given by:

$$
    \begin{aligned}
        B_1 u &= b_{11}u'(a) + b_{10}u(a),\\
        B_2 u &= b_{21}u'(b) + b_{20}u(b).
    \end{aligned}
$$

Since $L$, $B_1$, and $B_2$ are all linear, the solutions of the homogeneous BVP:

$$
    Lu = 0, \quad \text{for } a < x < b,
$$

with boundary conditions:

$$
    B_1u=0, \quad B_2u = 0,
$$

form a vector space: if $u_1$ and $u_2$ are solutions, then so is:

$$
    u = c_1u_1 + c_2u_2, \quad \text{for any constants } c_1, c_2.
$$

Any two solutions of the inhomogeneous problem differ by a solution of the homogeneous problem:

- If $u_1$ and $u_2$ satisfy the inhomogeneous BVP, then $u = u_1 - u_2$ satisfies the homogeneous equation.
- If $u_1$ satisfies the homogeneous equation and $u_2$ satisfies the inhomogeneous equation, then:

$$
    u = u_1 + c u_2
$$

satisfies the homogeneous equation for any constant $c.$

---

## Existence and Uniqueness

The inhomogeneous BVP:

$$
    Lu = f, \quad \text{for } a < x < b,
$$

with boundary conditions:

$$
    B_1 u = \alpha_1, \quad B_2 u = \alpha_2,
$$

has **at most** one solution **if and only if** the homogeneous BVP has only the **trivial solution** $u \equiv 0.$

### Solving the Inhomogeneous Problem

Suppose the general solution of the homogeneous equation $Lu=0$ is:

$$
    u_H = c_1u_1(x) + c_2u_2(x),
$$

and that $u_P(x)$ is a particular solution of the inhomogeneous equation $Lu =f.$ The general solution of $Lu=f$ is then:

$$
    u(x) = u_H(x) + u_P(x) = c_1u_1(x) + c_2u_2(x) + u_P(x).
$$

To satisfy the boundary conditions, we must choose $c_1$ and $c_2$ such that:

$$
    \begin{aligned}
        B_1 ( c_1u_1 + c_2u_2 + u_P) &= \alpha_1,\\
        B_2 ( c_1u_1 + c_2u_2 + u_P) &= \alpha_2.
    \end{aligned}
$$

Since $B_1$ and $B_2$ are linear, the inhomogeneous BVP has **at least one solution** if and only if the $2 \times 2$ linear system:

$$
    \begin{bmatrix}B_1u_1 & B_1u_2\\ B_2u_1 & B_2u_2\end{bmatrix} 
    \begin{bmatrix}c_1\\c_2\end{bmatrix} = 
    \begin{bmatrix}\alpha_1 - B_1u_P\\ \alpha_2 - B_2u_P\end{bmatrix}
$$

has at least one solution $[c_1, c_2]^T.$

Similarly, the homogeneous problem $u(x) = c_1u_1(x) + c_2u_2(x)$ is a solution if and only if $c_1$ and $c_2$ satisfy:

$$
    \begin{bmatrix}B_1u_1 & B_1u_2\\ B_2u_1 & B_2u_2\end{bmatrix}
    \begin{bmatrix}c_1\\c_2\end{bmatrix} = 
    \begin{bmatrix}0\\0\end{bmatrix}.
$$

The $2 \times 2$ matrix on the left is **non-singular** if and only if this homogeneous linear system has only the trivial solution $c_1 = c_2 = 0.$

### Conclusion

If the homogeneous problem has only the trivial solution, then for every choice of $f$, $\alpha_1$, and $\alpha_2,$ the inhomogeneous problem:

$$
    Lu = f, \quad \text{for } a < x < b, \quad \text{with } B_1u = \alpha_1 \text{ and } B_2 u = \alpha_2,
$$

has a **unique solution**.