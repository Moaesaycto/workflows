const r=`# Solving Second-Order Constant Coefficient Linear Homogeneous ODE\r
\r
A **second-order constant coefficient linear homogeneous ODE** has the form \\\\(ay'' + by' + cy = 0\\\\).\r
\r
---\r
\r
## Methods To Solve\r
\r
A suitable substitution of \\\\(y(t) = Me^{rt}\\\\) will work. This is because, after substituting it into the equation, we get\r
\r
\\\\[\r
    a M r^2 e^{rt} + b M r e^{rt} + c M e^{rt} = 0 \\\\Rightarrow M e^{rt} (ar^2 + br + c) = 0.\r
\\\\]\r
\r
If \\\\(ar^2 + br + c = 0,\\\\) then our substitution is true for any \\\\(M \\\\in \\\\mathbb{R}\\\\).\r
\r
### Characteristic Equation and Cases\r
\r
The characteristic equation associated with the differential equation is:\r
\r
\\\\[\r
    ar^2 + br + c = 0.\r
\\\\]\r
\r
Depending on the roots of this quadratic equation, we have three cases:\r
\r
1. **Distinct real roots** (\\\\(r_1 \\\\neq r_2\\\\)): The general solution is:\r
\r
   \\\\[\r
       y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}.\r
   \\\\]\r
\r
2. **Repeated real roots** (\\\\(r_1 = r_2\\\\)): The general solution is:\r
\r
   \\\\[\r
       y(t) = (C_1 + C_2 t)e^{r_1 t}.\r
   \\\\]\r
\r
3. **Complex conjugate roots** (\\\\(r = \\\\alpha \\\\pm i \\\\beta\\\\)): The general solution is:\r
\r
   \\\\[\r
       y(t) = e^{\\\\alpha t} \\\\left(C_1 \\\\cos(\\\\beta t) + C_2 \\\\sin(\\\\beta t) \\\\right).\r
   \\\\]\r
\r
---\r
\r
## Example Question\r
\r
Solve the differential equation \\\\(y'' - 3y' + 2y = 0\\\\).\r
\r
### Step 1: Find the Characteristic Equation\r
\r
The characteristic equation is:\r
\r
\\\\[\r
    r^2 - 3r + 2 = 0.\r
\\\\]\r
\r
Factoring:\r
\r
\\\\[\r
    (r - 1)(r - 2) = 0.\r
\\\\]\r
\r
Thus, the roots are \\\\(r_1 = 1\\\\) and \\\\(r_2 = 2\\\\).\r
\r
### Step 2: Form the General Solution\r
\r
Since the roots are real and distinct, the general solution is:\r
\r
\\\\[\r
    y(t) = C_1 e^t + C_2 e^{2t}.\r
\\\\]\r
\r
This is the required general solution.\r
\r
`;export{r as default};
