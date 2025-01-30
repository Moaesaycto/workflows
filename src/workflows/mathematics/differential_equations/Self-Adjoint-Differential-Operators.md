# Self-Adjoint Differential Operators

## Definition of the Formal Adjoint

We define the **formal adjoint** of a differential operator as:

$$
    L^*v = (a_2 v)'' - (a_1v)' + a_0v
$$

Expanding:

$$
    L^*v = a_2v'' + (2a_2' - a_1)v' + (a_2'' -a_1' + a_0)v.
$$

The **bilinear concomitant** is given by:

$$
    P(u,v) = u'(a_2v) - u(a_2 v)' + u(a_1v).
$$

From this, we obtain the **Lagrange identity**:

$$
    \langle Lu, v\rangle = \langle u, L^*v \rangle + [P(u,v)]_a^b.
$$

A differentiated version of the Lagrange identity is:

$$
    (Lu)v = u L^*v + \frac{d}{dx}P(u,v).
$$

### Formal Self-Adjointness

An operator $L$ is **formally self-adjoint** if $L^* = L$. A second-order, linear differential operator $L$ is formally self-adjoint if and only if it can be written in the form:

$$
    Lu = -(pu')' + qu = -pu'' - p'u' + qu.
$$

In this case, the Lagrange identity simplifies to:

$$
    (Lu)v - u(Lv) = -(p(x)(u'v - uv'))',
$$

which means the bilinear concomitant is:

$$
    P(u,v) = -p(x)(u'v - uv').
$$

---

## Example Questions

### Bessel Equation

Consider the **Bessel equation**:

$$
    x^2u'' + xy' + (x^2 - \nu^2)u = f(x).
$$

Dividing by $x$ gives $Lu = -x^{-1}f(x)$ where:

$$
    Lu = -(xu')' + (\nu^2x^{-1}-x)u.
$$

Thus, this differential operator is **formally self-adjoint**.

### Legendre Equation

The **Legendre equation**:

$$
    (1-x^2)u'' - 2xu' + \nu(\nu + 1)u = f(x)
$$

has the form $Lu = -f(x)$ with:

$$
    Lu = -[(1-x^2)u']' - \nu(\nu+1)u.
$$

This shows that the **Legendre differential operator is also formally self-adjoint**.

---

## Transforming to Self-Adjoint Form

To transform an equation:

$$
    a_2u'' + a_1u' + a_0u = f(x)
$$

into self-adjoint form, we introduce an **integrating factor**:

$$
    p(x) = \exp\left(\int \frac{a_1(x)}{a_2(x)}dx\right).
$$

Then, the equation transforms into:

$$
    -(pu')' + qu = \bar{f}(x),
$$

where:

$$
    q = -\frac{pa_0}{a_2}, \quad \bar{f} = -\frac{pf}{a_2}.
$$

A self-adjoint operator satisfies the **Lagrange identity**:

$$
    \langle Lu,v \rangle - \langle u, Lv \rangle = \sum_{i=1}^2(B_iuR_iv - R_iuB_iv),
$$

for all $u$ and $v$, where:

$$
    R_1u = \frac{p(a)u(a)}{b_{11}}, \quad R_1u = -\frac{p(a)u'(a)}{b_{10}}.
$$

Similarly:

$$
    R_2u = -\frac{p(b)u(b)}{b_{21}}, \quad R_2 u = \frac{p(b)u'(b)}{b_{20}}.
$$

---

## Necessary Condition for Existence

If $u$ is a solution of an inhomogeneous BVP and $v$ is a solution of the homogeneous problem:

$$
    \begin{aligned}
        Lv &= 0, & \text{for } a < x < b,\\
        B_1v &= 0, & \text{at } x=a,\\
        B_2v &= 0, & x = b,
    \end{aligned}
$$

then:

$$
    \langle f, v \rangle = \alpha_1 R_1v + \alpha_2 R_2 v.
$$

This condition is both **necessary and sufficient** for the existence of $u$.

### Example: Two-Point BVP

For the problem:

$$
    \begin{aligned}
        u'' + u &= f, & 0 < x < \pi,\\
        u &= \alpha_1, & x = 0,\\
        u &= \alpha_2, & x = \pi,
    \end{aligned}
$$

there exists a solution if and only if:

$$
    \int_0^\pi f(x) \sin(x)dx = \alpha_1 + \alpha_2.
$$

Any other solution takes the form:

$$
    u + C \sin x.
$$

---

## Fredholm Alternative

One of the following must hold:

1. The **homogeneous BVP** has only the trivial solution $v \equiv 0$, meaning the **inhomogeneous BVP has a unique solution** for any choice of $f, \alpha_1, \alpha_2$.
2. The **homogeneous BVP admits non-trivial solutions**, and the inhomogeneous BVP has a solution **only if**:

   $$
       \langle f, v \rangle = \alpha_1 R_1v + \alpha_2 R_2 v
   $$

   for every solution $v$ of the homogeneous BVP. In this case, every solution of the inhomogeneous BVP takes the form:

   $$
       u + C v.
   $$

---

## Domain of a Self-Adjoint Operator

Let $\mathcal{D}$ be a subspace of a vector space $V$ with inner product $\langle \cdot, \cdot \rangle$. A linear operator $L$ is **self-adjoint** if:

$$
    \langle Lu, v \rangle = \langle u, Lv \rangle \quad \forall u, v \in \mathcal{D}.
$$

From the Lagrange identity, $L$ is self-adjoint **if and only if** its domain consists of $C^2$ functions satisfying the homogeneous boundary conditions:

$$
    B_1u=0 \quad \text{at } x=a, \quad B_2u=0 \quad \text{at } x=b.
$$

### Example: Bessel Operator

For the Bessel operator:

$$
    Lu = -(xu')' + (\nu^2 x^{-1}-x)u, \quad 1 \leq x \leq 2,
$$

with boundary conditions:

$$
    B_1u = u', \quad B_2u = 2u' - u,
$$

the Lagrange identity confirms that this operator is **self-adjoint** on the space of functions satisfying these boundary conditions.