# Separable Linear First-Order ODE

A **separable first-order ODE** has the form \\(y'(t)=f(t)g(y)\\). These are particularly easy to solve as will be discussed below.

---

## Methods to Solve

### General Solution Technique

The elegance of the form \\(y'(t)=f(t)g(y)\\) allows for the differential to be broken. This means that

\\[
    \\dfrac{dy}{dt}=f(t)g(y) \\Rightarrow \\dfrac{dy}{g(y)} = \\dfrac{dt}{f(t)}.
\\]

We can now integrate both sides and solve for \\(y\\). That is, take

\\[
    \\int \\dfrac{dy}{g(y)} = \\int \\dfrac{dt}{f(t)},
\\]

which allows you to solve for \\(y\\).

---

## Example Question

Solve the initial value problem \\(y' = \\dfrac{y}{t^2+1}\\) with \\(y(0) = 1\\).

We first rearrange the equation to the form

\\[
    \\dfrac{dy}{dt} \\dfrac{1}{y} = \\dfrac{1}{t^2+1}.
\\]

By the separation of variables, we can continue.

\\[
    \\begin{align*}
        \\dfrac{dy}{dt} \\dfrac{1}{y} &= \\dfrac{1}{t^2+1}\\\\
        \\frac{dy}{y} &= \\frac{dt}{t^2+1}\\\\
        \\int \\frac{dy}{y} &= \\int \\frac{dt}{t^2+1}\\\\
        \\ln(y) &= \\tan^{-1}t + C_0\\\\
        y &= C_1 e^{\\tan^{-1}t}.
    \\end{align*}
\\]

