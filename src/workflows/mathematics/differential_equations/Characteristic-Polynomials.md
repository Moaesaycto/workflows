# The Characteristic Polynomial of a Linear ODE

If $L$ has constant coefficients (see [here](/workflows/#/mathematics/differential_equations/Linear-Differential-Operators) for the definition of $L$), then the problem of solving $Lu = 0$ reduces to that of factorizing the polynomial having the same coefficients. Some complications occur if the polynomial has any repeated roots.

More formally, suppose that $a_j$ is constant for $0 \leq j \leq m,$ with $a_m \neq 0.$ We define the associated polynomial of degree $m,$

$$
    p(z) = \sum_{j=0}^m a_jz^j
$$

so that, even more formally, $L = p(D).$

---

## Properties of the Characteristic Polynomial

Since $D^je^{\lambda x} = \lambda^je^{\lambda x},$ we have:

$$
    \begin{align*}
        p(D)e^{\lambda x} &= \sum_{j=0}^m a_j\lambda^j\\
        &= p(\lambda) e^{\lambda x}.
    \end{align*}
$$

And so we have $p(D)e^{\lambda x} = 0 \Leftrightarrow p(\lambda) = 0.$

By the [fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra),

$$
    p(z) = a_m\prod_{j=1}^r(z-\lambda_j)^{k_j}
$$

where $\lambda_1, \lambda_2, \dots, \lambda_r$ are the distinct roots of $p,$ with corresponding **multiplicities** $k_1, k_2, \dots, k_r$ satisfying

$$
    \sum_{j=1}^r k_j=m.
$$

### Some Important Properties

1. $(D - \lambda)x^j e^{\lambda x} = jx^{j-1}e^{\lambda x}$ for $j \geq 0$.
2. $(D-\lambda)^kx^je^{\lambda x} = 0$ for $j = 0, 1, \dots, k-1.$

To prove these features, we first perform an elementary calculation:

$$
    \begin{align*}
        (D - \lambda)x^j e^{\lambda x} &= jx^{j-1}e^{\lambda x} + x^j\lambda e^{\lambda x} - \lambda x^j e^{\lambda x}\\
        &= jx^{j-1}e^{\lambda x},
    \end{align*}
$$

as claimed, and then we have

$$
    \begin{align*}
        (D - \lambda)^2x^j e^{\lambda x} &= (D- \lambda)jx^{j-1}e^{\lambda x}\\
        &= j(j-1)x^{j-2}e^{\lambda x}.
    \end{align*}
$$

Continuing this process, we see the following pattern:

$$
    \begin{align*}
        (D - \lambda)^jx^j e^{\lambda x} &= j!e^{\lambda x}\\
        (D - \lambda)^{j+1}x^j e^{\lambda x} &= j!(D -\lambda)e^{\lambda x}\\
        &= 0.
    \end{align*}
$$