const n=`# Self-Adjoint Differential Operators\r
\r
## Definition of the Formal Adjoint\r
\r
We define the **formal adjoint** of a differential operator as:\r
\r
$$\r
    L^*v = (a_2 v)'' - (a_1v)' + a_0v\r
$$\r
\r
Expanding:\r
\r
$$\r
    L^*v = a_2v'' + (2a_2' - a_1)v' + (a_2'' -a_1' + a_0)v.\r
$$\r
\r
The **bilinear concomitant** is given by:\r
\r
$$\r
    P(u,v) = u'(a_2v) - u(a_2 v)' + u(a_1v).\r
$$\r
\r
From this, we obtain the **Lagrange identity**:\r
\r
$$\r
    \\langle Lu, v\\rangle = \\langle u, L^*v \\rangle + [P(u,v)]_a^b.\r
$$\r
\r
A differentiated version of the Lagrange identity is:\r
\r
$$\r
    (Lu)v = u L^*v + \\frac{d}{dx}P(u,v).\r
$$\r
\r
### Formal Self-Adjointness\r
\r
An operator $L$ is **formally self-adjoint** if $L^* = L$. A second-order, linear differential operator $L$ is formally self-adjoint if and only if it can be written in the form:\r
\r
$$\r
    Lu = -(pu')' + qu = -pu'' - p'u' + qu.\r
$$\r
\r
In this case, the Lagrange identity simplifies to:\r
\r
$$\r
    (Lu)v - u(Lv) = -(p(x)(u'v - uv'))',\r
$$\r
\r
which means the bilinear concomitant is:\r
\r
$$\r
    P(u,v) = -p(x)(u'v - uv').\r
$$\r
\r
---\r
\r
## Example Questions\r
\r
### Bessel Equation\r
\r
Consider the **Bessel equation**:\r
\r
$$\r
    x^2u'' + xy' + (x^2 - \\nu^2)u = f(x).\r
$$\r
\r
Dividing by $x$ gives $Lu = -x^{-1}f(x)$ where:\r
\r
$$\r
    Lu = -(xu')' + (\\nu^2x^{-1}-x)u.\r
$$\r
\r
Thus, this differential operator is **formally self-adjoint**.\r
\r
### Legendre Equation\r
\r
The **Legendre equation**:\r
\r
$$\r
    (1-x^2)u'' - 2xu' + \\nu(\\nu + 1)u = f(x)\r
$$\r
\r
has the form $Lu = -f(x)$ with:\r
\r
$$\r
    Lu = -[(1-x^2)u']' - \\nu(\\nu+1)u.\r
$$\r
\r
This shows that the **Legendre differential operator is also formally self-adjoint**.\r
\r
---\r
\r
## Transforming to Self-Adjoint Form\r
\r
To transform an equation:\r
\r
$$\r
    a_2u'' + a_1u' + a_0u = f(x)\r
$$\r
\r
into self-adjoint form, we introduce an **integrating factor**:\r
\r
$$\r
    p(x) = \\exp\\left(\\int \\frac{a_1(x)}{a_2(x)}dx\\right).\r
$$\r
\r
Then, the equation transforms into:\r
\r
$$\r
    -(pu')' + qu = \\bar{f}(x),\r
$$\r
\r
where:\r
\r
$$\r
    q = -\\frac{pa_0}{a_2}, \\quad \\bar{f} = -\\frac{pf}{a_2}.\r
$$\r
\r
A self-adjoint operator satisfies the **Lagrange identity**:\r
\r
$$\r
    \\langle Lu,v \\rangle - \\langle u, Lv \\rangle = \\sum_{i=1}^2(B_iuR_iv - R_iuB_iv),\r
$$\r
\r
for all $u$ and $v$, where:\r
\r
$$\r
    R_1u = \\frac{p(a)u(a)}{b_{11}}, \\quad R_1u = -\\frac{p(a)u'(a)}{b_{10}}.\r
$$\r
\r
Similarly:\r
\r
$$\r
    R_2u = -\\frac{p(b)u(b)}{b_{21}}, \\quad R_2 u = \\frac{p(b)u'(b)}{b_{20}}.\r
$$\r
\r
---\r
\r
## Necessary Condition for Existence\r
\r
If $u$ is a solution of an inhomogeneous BVP and $v$ is a solution of the homogeneous problem:\r
\r
$$\r
    \\begin{aligned}\r
        Lv &= 0, & \\text{for } a < x < b,\\\\\r
        B_1v &= 0, & \\text{at } x=a,\\\\\r
        B_2v &= 0, & x = b,\r
    \\end{aligned}\r
$$\r
\r
then:\r
\r
$$\r
    \\langle f, v \\rangle = \\alpha_1 R_1v + \\alpha_2 R_2 v.\r
$$\r
\r
This condition is both **necessary and sufficient** for the existence of $u$.\r
\r
### Example: Two-Point BVP\r
\r
For the problem:\r
\r
$$\r
    \\begin{aligned}\r
        u'' + u &= f, & 0 < x < \\pi,\\\\\r
        u &= \\alpha_1, & x = 0,\\\\\r
        u &= \\alpha_2, & x = \\pi,\r
    \\end{aligned}\r
$$\r
\r
there exists a solution if and only if:\r
\r
$$\r
    \\int_0^\\pi f(x) \\sin(x)dx = \\alpha_1 + \\alpha_2.\r
$$\r
\r
Any other solution takes the form:\r
\r
$$\r
    u + C \\sin x.\r
$$\r
\r
---\r
\r
## Fredholm Alternative\r
\r
One of the following must hold:\r
\r
1. The **homogeneous BVP** has only the trivial solution $v \\equiv 0$, meaning the **inhomogeneous BVP has a unique solution** for any choice of $f, \\alpha_1, \\alpha_2$.\r
2. The **homogeneous BVP admits non-trivial solutions**, and the inhomogeneous BVP has a solution **only if**:\r
\r
   $$\r
       \\langle f, v \\rangle = \\alpha_1 R_1v + \\alpha_2 R_2 v\r
   $$\r
\r
   for every solution $v$ of the homogeneous BVP. In this case, every solution of the inhomogeneous BVP takes the form:\r
\r
   $$\r
       u + C v.\r
   $$\r
\r
---\r
\r
## Domain of a Self-Adjoint Operator\r
\r
Let $\\mathcal{D}$ be a subspace of a vector space $V$ with inner product $\\langle \\cdot, \\cdot \\rangle$. A linear operator $L$ is **self-adjoint** if:\r
\r
$$\r
    \\langle Lu, v \\rangle = \\langle u, Lv \\rangle \\quad \\forall u, v \\in \\mathcal{D}.\r
$$\r
\r
From the Lagrange identity, $L$ is self-adjoint **if and only if** its domain consists of $C^2$ functions satisfying the homogeneous boundary conditions:\r
\r
$$\r
    B_1u=0 \\quad \\text{at } x=a, \\quad B_2u=0 \\quad \\text{at } x=b.\r
$$\r
\r
### Example: Bessel Operator\r
\r
For the Bessel operator:\r
\r
$$\r
    Lu = -(xu')' + (\\nu^2 x^{-1}-x)u, \\quad 1 \\leq x \\leq 2,\r
$$\r
\r
with boundary conditions:\r
\r
$$\r
    B_1u = u', \\quad B_2u = 2u' - u,\r
$$\r
\r
the Lagrange identity confirms that this operator is **self-adjoint** on the space of functions satisfying these boundary conditions.`;export{n as default};
