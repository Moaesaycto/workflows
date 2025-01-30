const r=`# Separable Linear First-Order ODE\r
\r
A **separable first-order ODE** has the form $y'(t)=f(t)g(y)$. These are particularly easy to solve as will be discussed below.\r
\r
---\r
\r
## Methods to Solve\r
\r
### General Solution Technique\r
\r
The elegance of the form $y'(t)=f(t)g(y)$ allows for the differential to be broken. This means that\r
\r
$$\r
    \\dfrac{dy}{dt}=f(t)g(y) \\Rightarrow \\dfrac{dy}{g(y)} = \\dfrac{dt}{f(t)}.\r
$$\r
\r
We can now integrate both sides and solve for $y$. That is, take\r
\r
$$\r
    \\int \\dfrac{dy}{g(y)} = \\int \\dfrac{dt}{f(t)},\r
$$\r
\r
which allows you to solve for $y$.\r
\r
---\r
\r
## Example Question\r
\r
Solve the initial value problem $y' = \\dfrac{y}{t^2+1}$ with $y(0) = 1$.\r
\r
We first rearrange the equation to the form\r
\r
$$\r
    \\dfrac{dy}{dt} \\dfrac{1}{y} = \\dfrac{1}{t^2+1}.\r
$$\r
\r
By the separation of variables, we can continue.\r
\r
$$\r
    \\begin{align*}\r
        \\dfrac{dy}{dt} \\dfrac{1}{y} &= \\dfrac{1}{t^2+1}\\\\\r
        \\frac{dy}{y} &= \\frac{dt}{t^2+1}\\\\\r
        \\int \\frac{dy}{y} &= \\int \\frac{dt}{t^2+1}\\\\\r
        \\ln(y) &= \\tan^{-1}t + C_0\\\\\r
        y &= C_1 e^{\\tan^{-1}t}.\r
    \\end{align*}\r
$$\r
\r
`;export{r as default};
