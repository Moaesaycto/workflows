# First Integrals

A function \\(G:\\mathbb{R}^N \\to \\mathbb{R}\\) is a **first integral** (or constant of the motion) for the system of ODEs:

\\[
    \\frac{d\\boldsymbol{x}}{dt} = \\boldsymbol{F}(\\boldsymbol{x})
\\]

if \\(G(\\boldsymbol{x}(t))\\) is constant for every solution \\(\\boldsymbol{x}(t).\\)

By the chain rule:

\\[
    \\frac{d}{dt}G(\\boldsymbol{x}(t)) = \\sum_{j = 1}^N \\frac{\\partial G}{\\partial x_j} \\frac{dx_j}{dt} = \\nabla G(\\boldsymbol{x}) \\cdot \\frac{d\\boldsymbol{x}}{dt} = \\nabla G(\\boldsymbol{x}) \\cdot \\boldsymbol{F}(\\boldsymbol{x}).
\\]

Geometrically, this means that \\(G\\) is a first integral if and only if:

\\[
    \\nabla G(\\boldsymbol{x}) \\perp \\boldsymbol{F}(\\boldsymbol{x}) \\quad \\text{for all } \\boldsymbol{x}.
\\]

---

## Simple Example

Consider the linear system:

\\[
    \\begin{aligned}
        \\frac{dx}{dt} &= -y,\\\\
        \\frac{dy}{dt} &= x.
    \\end{aligned}
\\]

with the first integral function \\(G(x,y) = x^2 + y^2.\\)

Let:

\\[
    \\boldsymbol{F}(x,y) = \\begin{bmatrix}-y\\\\x\\end{bmatrix}.
\\]

We can see that:

\\[
    \\nabla G \\cdot \\boldsymbol{F} = \\begin{bmatrix}2x\\\\2y\\end{bmatrix} \\cdot \\begin{bmatrix}-y\\\\x\\end{bmatrix} = 0.
\\]

Equivalently:

\\[
    \\frac{dG}{dt} = \\frac{\\partial G}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial G}{\\partial y} \\frac{dy}{dt} = (2x)(-y) + (2y)(x) = 0.
\\]

---

## Partial Solutions

A first integral provides a **partial solution** of the ODE. Setting \\(C = G(\\boldsymbol{x}_0),\\) we know that \\(\\boldsymbol{x}(t)\\) is confined to the surface \\(G(\\boldsymbol{x}) = C.\\)

If \\(N=2,\\) the equation \\(G(x,y) = C\\) implicitly gives \\(y = g(x),\\) so:

\\[
    \\frac{dx}{dt} = F_1(x,y) = F_1(x, g(x))
\\]

and \\(F_1\\) becomes a known function of \\(x\\) alone. If we can evaluate:

\\[
    t = \\int \\frac{dx}{F_1},
\\]

to obtain \\(t=t(x),\\) then implicitly we know \\(x = x(t)\\) and finally \\(y = g(x(t)).\\)

Now, suppose \\(N > 2\\) and we know several (functionally independent) first integrals \\(G_1, G_2, \\dots, G_k.\\) Then the solution \\(\\boldsymbol{x}(t)\\) must lie on the intersection of the surfaces:

\\[
    G_j(\\boldsymbol{x}) = C_j, \\quad 1 \\leq j \\leq k,
\\]

where \\(C_j = G_j(\\boldsymbol{x}_0).\\) We necessarily have \\(k \\leq N-1.\\) If \\(k = N-1,\\) then the **implicit function theorem** gives \\(x_j = g_j(x_1)\\) for \\(2 \\leq j \\leq N,\\) and thus \\(F_1(\\boldsymbol{x})\\) becomes a known function of \\(x_1.\\)

As before:

\\[
    t = \\int \\frac{dx_1}{F_1}.
\\]

In principle, we then know \\(x_1 = x_1(t)\\) and hence:

\\[
    x_j = g_j(x_1(t)) \\quad \\text{for } 2 \\leq j \\leq N.
\\]

**Note that a system might not have any first integrals.**

