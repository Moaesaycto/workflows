# The Lipschitz Constant

A (first-order) **dynamical system** is formulated as:

$$
    \frac{d\boldsymbol{x}}{dt} = \boldsymbol{F}(\boldsymbol{x}).
$$

Any first-order system of $N$ ODEs in the form:

$$
    \begin{aligned}
        \frac{dx}{dt} &= F_1(x, y, \dots, x_N),~~~x(0) = x_{10},\\
        \frac{dy}{dt} &= F_2(x, y, \dots, x_N),~~~y(0) = x_{20},\\
        &\vdots\\
        \frac{dx_N}{dt} &= F_N(x, y, \dots, x_N), ~~~ x_N(0) = x_{N0},
    \end{aligned}
$$

can be written in vector notation as:

$$
    \frac{d\boldsymbol{x}}{dt} = \boldsymbol{F}(\boldsymbol{x}), \quad \boldsymbol{x}(0) = \boldsymbol{x}_0.
$$

The system of ODEs is determined by the **vector field** $\boldsymbol{F}:\mathbb{R}^N \to \mathbb{R}^N.$

Our system is said to be **autonomous** if it is in the form:

$$
    \frac{d\boldsymbol{x}}{dt} = \boldsymbol{F}(\boldsymbol{x}).
$$

In a **non-autonomous** system, $\boldsymbol{F}$ will depend explicitly on $t$:

$$
    \frac{d\boldsymbol{x}}{dt} = \boldsymbol{F}(\boldsymbol{x}, t).
$$

Given a non-autonomous system:

$$
    \frac{d\boldsymbol{x}}{dt} = \boldsymbol{F}(\boldsymbol{x}, t),
$$

let:

$$
    \boldsymbol{y} = \begin{bmatrix}\boldsymbol{x} \\ t \end{bmatrix}, \quad \boldsymbol{G}(\boldsymbol{y}) = \begin{bmatrix}\boldsymbol{F}(\boldsymbol{x}, t)\\1\end{bmatrix}.
$$

If $\boldsymbol{x} = \boldsymbol{x}(t)$ is a solution of this system, then $\boldsymbol{y} = \boldsymbol{y}(t)$ is a solution of the autonomous system:

$$
    \frac{d\boldsymbol{y}}{dt} = \begin{bmatrix} d\boldsymbol{x}/dt\\dt/dt\end{bmatrix} = \begin{bmatrix}\boldsymbol{F}(\boldsymbol{x}, t)\\1\end{bmatrix},
$$

and vice versa.

---

## Lipschitz Constant

The number $L$ is a **Lipschitz constant** for a function $f:[a,b] \to \mathbb{R}$ if:

$$
    |f(x) - f(y)| \leq L|x-y|, \quad \text{for all } x,y \in [a,b].
$$

We say that the function $f:[a,b] \to \mathbb{R}$ is **Lipschitz** if a Lipschitz constant for $f$ exists.

If $f$ is Lipschitz, then $f$ is (uniformly) continuous. However, the converse is not necessarily true.

For any closed and bounded interval $I = [a,b],$ if $f$ is $C^1$ on $I$ then:

$$
    L = \max_{x \in I}|f'(x)|
$$

is a Lipschitz constant for $f$ on $I.$ Note that $f \in C^k$ implies that $f$ is $k$ times differentiable.

More generally, a vector field $\boldsymbol{F}: S \to \mathbb{R}^N$ is Lipschitz on $S \in \mathbb{R}^N$ if:

$$
    \|\boldsymbol{F}(\boldsymbol{x}) - \boldsymbol{F}(\boldsymbol{y})\| \leq L \|\boldsymbol{x} - \boldsymbol{y}\|.
$$

Here, our norm is the **Euclidean norm** on $\mathbb{R}^N.$

