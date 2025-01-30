# Solving Linear First-Order ODEs

A **linear first-order ODE** has the form \\(a(t)y'(t) + b(t)y(t) = f(t)\\) with \\(a(t) \\neq 0\\) on some interval \\(I \\subseteq \\mathbb{R}\\). More specifically, we may refer to different types of ODEs as follows.

- A first-order **homogeneous** linear ODE has the form \\(y' + p(t)y = 0\\).
- A first-order **non-homogeneous** linear ODE has the form \\(y' + p(t)y = q(t)\\).

---

## Methods to Solve

### General Solution Technique

Consider letting \\(P(t) = \\dfrac{b(t)}{a(t)}\\) and \\(q(t) = \\dfrac{c(t)}{a(t)}\\) such that our original expression can be written as \\(y'(t) + p(t)y = q(t)\\). To generally solve an equation in this form, we define two functions of \\(t\\), say \\(u\\) and \\(v\\), such that \\(y = uv\\). By the [product rule](https://en.wikipedia.org/wiki/Product_rule), we get \\(y' = vu' + uv'\\). From here, we can follow a step-by-step method.

1. Take the substitution \\(y = uv\\) and \\(y' = vu' + uv'\\) in \\(y' + p(t)y = q(t)\\).
2. Factor the parts involving \\(v\\) and set this to equal zero to get the differential equation in \\(u\\) and \\(t\\).
3. Solve, using the [separation of variables](/workflows/#/mathematics/differential_equations/Solving-Separable-First-Order-ODEs) to find \\(u\\).
4. Substitute this back into the equation from step 1. Remember, the \\(v\\) term equals zero. Solve this for \\(v\\) and substitute the result back into \\(y = uv\\).

### Variation of Parameters

Suppose you have been provided with a first-order non-homogeneous linear ODE. That is, \\(y' + p(t)y = q(t)\\). Using the **variation of parameters**, the general solution is given by

\\[
    y(t) = v(t) e^{P(t)}+Ae^{P(t)},
\\]

where \\(v'(t) = e^{-P(t)}q(t)\\) and \\(P(t)\\) is an antiderivative of \\(-p(t)\\).

### Integrating Factor

Given a first-order non-homogeneous linear ODE \\(y'(t) + p(t)y = q(t)\\). We can solve this using the method of an **integrating factor**.

1. Calculate the **integrating factor**, which is given by

   \\[
       I(t) = \\exp\\left(\\int p(t)\\,dt\\right).
   \\]

2. Multiply the given equation by \\(I(t)\\). That is,

   \\[
       I(t)\\left[y'(t) + p(t)y \\right] = I(t)g(t).
   \\]

3. Notice that the left-hand side becomes

   \\[
       \\dfrac{d}{dx}[I(t)y].
   \\]

4. Integrate both sides of the equation and solve for \\(y(t)\\).

The general solution via this method can be written as

\\[
    y(t) = \\exp\\left(-\\int p(t)\\,dt\\right)\\left[\\int \\exp \\left(\\int p(t)\\,dt\\right)f(t)\\,dt + C\\right].
\\]

---

## Example Questions

### General Question

Solve the differential equation \\(\\dfrac{dy}{dt} - \\dfrac{y}{t} = 1\\).

We first take the substitution \\(y=uv\\) to get us \\(vu' + uv' - \\frac{uv}{t} = 1\\). Factoring appropriately gives \\(uv' + v\\left(u' - \\dfrac{u}{t}\\right) = 1\\). Setting the \\(v\\) term to equation zero, we get

\\[
    u' - \\dfrac{u}{t} = 0 \\Rightarrow u' = \\dfrac{u}{t}.
\\]

By the [separation of variables](/workflows/#/mathematics/differential_equations/Solving-Separable-First-Order-ODEs), we get the following:

\\[
    \\begin{align*}
        \\frac{du}{dt} &= \\frac{u}{t}\\\\
        \\frac{du}{u} &= \\frac{dt}{t}\\\\
        \\int \\frac{du}{u} &= \\int \\frac{dt}{t}\\\\
        \\ln(u) &= \\ln(t) + C_0\\\\
        u &= kt.
    \\end{align*}
\\]

Now, recall that

\\[
    uv' + v\\left(u' - \\dfrac{u}{t}\\right) = 1 \\Rightarrow kx\\dfrac{dv}{dx} = 1.
\\]

We can again use the [separation of variables](/workflows/#/mathematics/differential_equations/Solving-Separable-First-Order-ODEs).

\\[
    \\begin{align*}
        k\\,dv &= \\frac{dt}{t}\\\\
        \\int k\\,dv &= \\int \\frac{dt}{t}\\\\
        v = \\frac{1}{k} \\ln(C_1x).
    \\end{align*}
\\]

Finally, we recall \\(y = uv = x\\ln(C_1x)\\) which solves the equation.

### Variation of Parameters Question

Solve the initial value problem \\(y' + \\dfrac{3y}{t} = t^2\\) with \\(y(1) = \\dfrac{1}{2}\\).

Given the initial condition, we can assume that \\(t > 0\\). So, we'll call the solution \\(g\\). Now,

\\[
    g = C\\exp\\left(-\\int \\frac{3}{t}\\,dt\\right) = Ct^{-3}.
\\]

So, we take \\(h(t) = t^{-3}\\) and \\(v'(t) = \\dfrac{t^2}{t^{-3}} = t^5\\). This gives us

\\[
    v(t) = \\dfrac{t^6}{6}.
\\]

Now, we must have

\\[
    y(t) = v(t)t^{-3} + Ct^{-3}
\\]

which further becomes

\\[
    y(t) = \\frac{t^3}{6} + Ct^{-3}.
\\]

As for the initial condition, we may substitute the value \\(t = 1\\) to find \\(C\\). That is,

\\[
    \\dfrac{1}{2} = \\dfrac{1^3}{6} + C \\times 1^{-3} \\Rightarrow C = \\dfrac{1}{3}.
\\]

Finally, this gives us the solution

\\[
    y = \\dfrac{t^3}{6}+\\dfrac{1}{3}t^{-3}.
\\]

### Integrating Factor Question

Determine the general solution of the differential equation \\(y' + 3t^2y = 6t^2\\).

Calculating the integration factor as

\\[
    I(t) = \\exp \\left(\\int 3t^2\\,dt\\right)
\\]

yields \\(I(t) = e^{t^3}\\). We can ignore our constant term. Thus, we can write our original equation as follows.

\\[
    \\begin{align*}
        e^{t^3}[y' + 3t^2y] &= 6t^2e^{t^3}\\\\
        \\frac{d}{dt}\\left[e^{t^3}y\\right] &= 6t^2e^{t^3}.
    \\end{align*}
\\]

We can integrate this quite easily to get that

\\[
    e^{t^3}y = 2e^{t^3}+C \\Rightarrow y = 2 + Ce^{-t^3}.
\\]

---

## References

- [Wikipedia - Product rule](https://en.wikipedia.org/wiki/Product_rule)
- [Math is Fun - First Order Linear Differential Equations](https://www.mathsisfun.com/calculus/differential-equations-first-order-linear.html)
- [SFU - First Order Linear Differential Equations](https://www.sfu.ca/math-coursenotes/Math%20158%20Course%20Notes/sec_first_order_homogeneous_linear.html)