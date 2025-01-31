# Dynamical Systems

A (first-order) **dynamical system** is formulated as:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}).
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
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}), \\quad \\mathbf{x}(0) = \\mathbf{x}_0.
\\]

The system of ODEs is determined by the **vector field** \\(\\mathbf{F}:\\mathbb{R}^N \\to \\mathbb{R}^N.\\)

Our system is said to be **autonomous** if it is in the form:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}).
\\]

In a **non-autonomous** system, \\(\\mathbf{F}\\) will depend explicitly on \\(t\\):

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}, t).
\\]

Given a non-autonomous system:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}, t),
\\]

let:

\\[
    \\mathbf{y} = \\begin{bmatrix}\\mathbf{x} \\\\ t \\end{bmatrix}, \\quad \\mathbf{G}(\\mathbf{y}) = \\begin{bmatrix}\\mathbf{F}(\\mathbf{x}, t)\\\\1\\end{bmatrix}.
\\]

If \\(\\mathbf{x} = \\mathbf{x}(t)\\) is a solution of this system, then \\(\\mathbf{y} = \\mathbf{y}(t)\\) is a solution of the autonomous system:

\\[
    \\frac{d\\mathbf{y}}{dt} = \\begin{bmatrix} d\\mathbf{x}/dt\\\\dt/dt\\end{bmatrix} = \\begin{bmatrix}\\mathbf{F}(\\mathbf{x}, t)\\\\1\\end{bmatrix},
\\]

and vice versa.

