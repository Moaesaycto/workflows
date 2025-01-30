# Linearisation

Suppose that $\boldsymbol{x}_0$ is close to an equilibrium point $\boldsymbol{a}.$ If:

$$
    \frac{d\boldsymbol{x}}{dt} = \boldsymbol{F}(\boldsymbol{x})
$$

for all $t$ with $\boldsymbol{x}(0) = \boldsymbol{x}_0,$ then for small $t$ the difference:

$$
    \boldsymbol{y} = \boldsymbol{x} - \boldsymbol{a}
$$

is small and satisfies:

$$
    \frac{d\boldsymbol{y}}{dt} = \frac{d\boldsymbol{x}}{dt} = \boldsymbol{F}(\boldsymbol{x}) = \boldsymbol{F}(\boldsymbol{a} + \boldsymbol{y}) \approx \boldsymbol{F}(\boldsymbol{a}) + \boldsymbol{F}'(\boldsymbol{a})\boldsymbol{y}.
$$

This suggests that if $\boldsymbol{y}_0 = \boldsymbol{x}_0 - \boldsymbol{a}$ and $\boldsymbol{y}$ is the solution of the linear dynamical system:

$$
    \frac{d\boldsymbol{y}}{dt} = \boldsymbol{F}(\boldsymbol{a}) + \boldsymbol{F}'(\boldsymbol{a})\boldsymbol{y}, \quad \text{for all } t, \quad \text{with } \boldsymbol{y}(0) = \boldsymbol{y}_0,
$$

then:

$$
    \boldsymbol{x}(t) \approx \boldsymbol{a} + \boldsymbol{y}(t)
$$

for small $t.$ In particular, we can infer stability properties of our differential equation at an equilibrium point $\boldsymbol{a}$ from the eigenvalues of:

$$
    A = \boldsymbol{F}'(\boldsymbol{a}).
$$

