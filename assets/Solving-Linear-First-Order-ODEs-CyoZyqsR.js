const t=`# Solving Linear First-Order ODEs\r
\r
A **linear first-order ODE** has the form \\\\(a(t)y'(t) + b(t)y(t) = f(t)\\\\) with \\\\(a(t) \\\\neq 0\\\\) on some interval \\\\(I \\\\subseteq \\\\mathbb{R}\\\\). More specifically, we may refer to different types of ODEs as follows.\r
\r
- A first-order **homogeneous** linear ODE has the form \\\\(y' + p(t)y = 0\\\\).\r
- A first-order **non-homogeneous** linear ODE has the form \\\\(y' + p(t)y = q(t)\\\\).\r
\r
---\r
\r
## Methods to Solve\r
\r
### General Solution Technique\r
\r
Consider letting \\\\(P(t) = \\\\dfrac{b(t)}{a(t)}\\\\) and \\\\(q(t) = \\\\dfrac{c(t)}{a(t)}\\\\) such that our original expression can be written as \\\\(y'(t) + p(t)y = q(t)\\\\). To generally solve an equation in this form, we define two functions of \\\\(t\\\\), say \\\\(u\\\\) and \\\\(v\\\\), such that \\\\(y = uv\\\\). By the [product rule](https://en.wikipedia.org/wiki/Product_rule), we get \\\\(y' = vu' + uv'\\\\). From here, we can follow a step-by-step method.\r
\r
1. Take the substitution \\\\(y = uv\\\\) and \\\\(y' = vu' + uv'\\\\) in \\\\(y' + p(t)y = q(t)\\\\).\r
2. Factor the parts involving \\\\(v\\\\) and set this to equal zero to get the differential equation in \\\\(u\\\\) and \\\\(t\\\\).\r
3. Solve, using the [separation of variables](/workflows/#/mathematics/differential_equations/Solving-Separable-First-Order-ODEs) to find \\\\(u\\\\).\r
4. Substitute this back into the equation from step 1. Remember, the \\\\(v\\\\) term equals zero. Solve this for \\\\(v\\\\) and substitute the result back into \\\\(y = uv\\\\).\r
\r
### Variation of Parameters\r
\r
Suppose you have been provided with a first-order non-homogeneous linear ODE. That is, \\\\(y' + p(t)y = q(t)\\\\). Using the **variation of parameters**, the general solution is given by\r
\r
\\\\[\r
    y(t) = v(t) e^{P(t)}+Ae^{P(t)},\r
\\\\]\r
\r
where \\\\(v'(t) = e^{-P(t)}q(t)\\\\) and \\\\(P(t)\\\\) is an antiderivative of \\\\(-p(t)\\\\).\r
\r
### Integrating Factor\r
\r
Given a first-order non-homogeneous linear ODE \\\\(y'(t) + p(t)y = q(t)\\\\). We can solve this using the method of an **integrating factor**.\r
\r
1. Calculate the **integrating factor**, which is given by\r
\r
   \\\\[\r
       I(t) = \\\\exp\\\\left(\\\\int p(t)\\\\,dt\\\\right).\r
   \\\\]\r
\r
2. Multiply the given equation by \\\\(I(t)\\\\). That is,\r
\r
   \\\\[\r
       I(t)\\\\left[y'(t) + p(t)y \\\\right] = I(t)g(t).\r
   \\\\]\r
\r
3. Notice that the left-hand side becomes\r
\r
   \\\\[\r
       \\\\dfrac{d}{dx}[I(t)y].\r
   \\\\]\r
\r
4. Integrate both sides of the equation and solve for \\\\(y(t)\\\\).\r
\r
The general solution via this method can be written as\r
\r
\\\\[\r
    y(t) = \\\\exp\\\\left(-\\\\int p(t)\\\\,dt\\\\right)\\\\left[\\\\int \\\\exp \\\\left(\\\\int p(t)\\\\,dt\\\\right)f(t)\\\\,dt + C\\\\right].\r
\\\\]\r
\r
---\r
\r
## Example Questions\r
\r
### General Question\r
\r
Solve the differential equation \\\\(\\\\dfrac{dy}{dt} - \\\\dfrac{y}{t} = 1\\\\).\r
\r
We first take the substitution \\\\(y=uv\\\\) to get us \\\\(vu' + uv' - \\\\frac{uv}{t} = 1\\\\). Factoring appropriately gives \\\\(uv' + v\\\\left(u' - \\\\dfrac{u}{t}\\\\right) = 1\\\\). Setting the \\\\(v\\\\) term to equation zero, we get\r
\r
\\\\[\r
    u' - \\\\dfrac{u}{t} = 0 \\\\Rightarrow u' = \\\\dfrac{u}{t}.\r
\\\\]\r
\r
By the [separation of variables](/workflows/#/mathematics/differential_equations/Solving-Separable-First-Order-ODEs), we get the following:\r
\r
\\\\[\r
    \\\\begin{align*}\r
        \\\\frac{du}{dt} &= \\\\frac{u}{t}\\\\\\\\\r
        \\\\frac{du}{u} &= \\\\frac{dt}{t}\\\\\\\\\r
        \\\\int \\\\frac{du}{u} &= \\\\int \\\\frac{dt}{t}\\\\\\\\\r
        \\\\ln(u) &= \\\\ln(t) + C_0\\\\\\\\\r
        u &= kt.\r
    \\\\end{align*}\r
\\\\]\r
\r
Now, recall that\r
\r
\\\\[\r
    uv' + v\\\\left(u' - \\\\dfrac{u}{t}\\\\right) = 1 \\\\Rightarrow kx\\\\dfrac{dv}{dx} = 1.\r
\\\\]\r
\r
We can again use the [separation of variables](/workflows/#/mathematics/differential_equations/Solving-Separable-First-Order-ODEs).\r
\r
\\\\[\r
    \\\\begin{align*}\r
        k\\\\,dv &= \\\\frac{dt}{t}\\\\\\\\\r
        \\\\int k\\\\,dv &= \\\\int \\\\frac{dt}{t}\\\\\\\\\r
        v = \\\\frac{1}{k} \\\\ln(C_1x).\r
    \\\\end{align*}\r
\\\\]\r
\r
Finally, we recall \\\\(y = uv = x\\\\ln(C_1x)\\\\) which solves the equation.\r
\r
### Variation of Parameters Question\r
\r
Solve the initial value problem \\\\(y' + \\\\dfrac{3y}{t} = t^2\\\\) with \\\\(y(1) = \\\\dfrac{1}{2}\\\\).\r
\r
Given the initial condition, we can assume that \\\\(t > 0\\\\). So, we'll call the solution \\\\(g\\\\). Now,\r
\r
\\\\[\r
    g = C\\\\exp\\\\left(-\\\\int \\\\frac{3}{t}\\\\,dt\\\\right) = Ct^{-3}.\r
\\\\]\r
\r
So, we take \\\\(h(t) = t^{-3}\\\\) and \\\\(v'(t) = \\\\dfrac{t^2}{t^{-3}} = t^5\\\\). This gives us\r
\r
\\\\[\r
    v(t) = \\\\dfrac{t^6}{6}.\r
\\\\]\r
\r
Now, we must have\r
\r
\\\\[\r
    y(t) = v(t)t^{-3} + Ct^{-3}\r
\\\\]\r
\r
which further becomes\r
\r
\\\\[\r
    y(t) = \\\\frac{t^3}{6} + Ct^{-3}.\r
\\\\]\r
\r
As for the initial condition, we may substitute the value \\\\(t = 1\\\\) to find \\\\(C\\\\). That is,\r
\r
\\\\[\r
    \\\\dfrac{1}{2} = \\\\dfrac{1^3}{6} + C \\\\times 1^{-3} \\\\Rightarrow C = \\\\dfrac{1}{3}.\r
\\\\]\r
\r
Finally, this gives us the solution\r
\r
\\\\[\r
    y = \\\\dfrac{t^3}{6}+\\\\dfrac{1}{3}t^{-3}.\r
\\\\]\r
\r
### Integrating Factor Question\r
\r
Determine the general solution of the differential equation \\\\(y' + 3t^2y = 6t^2\\\\).\r
\r
Calculating the integration factor as\r
\r
\\\\[\r
    I(t) = \\\\exp \\\\left(\\\\int 3t^2\\\\,dt\\\\right)\r
\\\\]\r
\r
yields \\\\(I(t) = e^{t^3}\\\\). We can ignore our constant term. Thus, we can write our original equation as follows.\r
\r
\\\\[\r
    \\\\begin{align*}\r
        e^{t^3}[y' + 3t^2y] &= 6t^2e^{t^3}\\\\\\\\\r
        \\\\frac{d}{dt}\\\\left[e^{t^3}y\\\\right] &= 6t^2e^{t^3}.\r
    \\\\end{align*}\r
\\\\]\r
\r
We can integrate this quite easily to get that\r
\r
\\\\[\r
    e^{t^3}y = 2e^{t^3}+C \\\\Rightarrow y = 2 + Ce^{-t^3}.\r
\\\\]\r
\r
---\r
\r
## References\r
\r
- [Wikipedia - Product rule](https://en.wikipedia.org/wiki/Product_rule)\r
- [Math is Fun - First Order Linear Differential Equations](https://www.mathsisfun.com/calculus/differential-equations-first-order-linear.html)\r
- [SFU - First Order Linear Differential Equations](https://www.sfu.ca/math-coursenotes/Math%20158%20Course%20Notes/sec_first_order_homogeneous_linear.html)`;export{t as default};
