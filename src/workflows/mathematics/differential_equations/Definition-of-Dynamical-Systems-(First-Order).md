# Dynamical Systems

A (first-order) **dynamical system** is formulated as:

\\[
    \\frac{d\\boldsymbol{x}}{dt} = \\boldsymbol{F}(\\boldsymbol{x}).
\\]

Any first-order system of \\(N\\) ODEs in the form:

\\[
    \\begin{aligned}
        \\frac{dx}{dt} &= F_1(x, y, \\dots, x_N),~~~x(0) = x_{10},\\\\
        \\frac{dy}{dt} &= F_2(x, y, \\dots, x_N),~~~y(0) = x_{20},\\\\
        &\\vdots\\\\
        \\frac{dx_N}{dt} &= F_N(x, y, \\dots, x_N), ~~~ x_N(0) = x_{N0},
    \\end{aligned}
\\]

can be written in vector notation as:

\\[
    \\frac{d\\boldsymbol{x}}{dt} = \\boldsymbol{F}(\\boldsymbol{x}), \\quad \\boldsymbol{x}(0) = \\boldsymbol{x}_0.
\\]

The system of ODEs is determined by the **vector field** \\(\\boldsymbol{F}:\\mathbb{R}^N \\to \\mathbb{R}^N.\\)

Our system is said to be **autonomous** if it is in the form:

\\[
    \\frac{d\\boldsymbol{x}}{dt} = \\boldsymbol{F}(\\boldsymbol{x}).
\\]

In a **non-autonomous** system, \\(\\boldsymbol{F}\\) will depend explicitly on \\(t\\):

\\[
    \\frac{d\\boldsymbol{x}}{dt} = \\boldsymbol{F}(\\boldsymbol{x}, t).
\\]

Given a non-autonomous system:

\\[
    \\frac{d\\boldsymbol{x}}{dt} = \\boldsymbol{F}(\\boldsymbol{x}, t),
\\]

let:

\\[
    \\boldsymbol{y} = \\begin{bmatrix}\\boldsymbol{x} \\\\ t \\end{bmatrix}, \\quad \\boldsymbol{G}(\\boldsymbol{y}) = \\begin{bmatrix}\\boldsymbol{F}(\\boldsymbol{x}, t)\\\\1\\end{bmatrix}.
\\]

If \\(\\boldsymbol{x} = \\boldsymbol{x}(t)\\) is a solution of this system, then \\(\\boldsymbol{y} = \\boldsymbol{y}(t)\\) is a solution of the autonomous system:

\\[
    \\frac{d\\boldsymbol{y}}{dt} = \\begin{bmatrix} d\\boldsymbol{x}/dt\\\\dt/dt\\end{bmatrix} = \\begin{bmatrix}\\boldsymbol{F}(\\boldsymbol{x}, t)\\\\1\\end{bmatrix},
\\]

and vice versa.

