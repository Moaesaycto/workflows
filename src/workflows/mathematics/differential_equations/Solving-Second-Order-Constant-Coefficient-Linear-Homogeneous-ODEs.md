# Solving Second-Order Constant Coefficient Linear Homogeneous ODE

A **second-order constant coefficient linear homogeneous ODE** has the form $ay'' + by' + cy = 0$.

---

## Methods To Solve

A suitable substitution of $y(t) = Me^{rt}$ will work. This is because, after substituting it into the equation, we get

$$
    a M r^2 e^{rt} + b M r e^{rt} + c M e^{rt} = 0 \Rightarrow M e^{rt} (ar^2 + br + c) = 0.
$$

If $ar^2 + br + c = 0,$ then our substitution is true for any $M \in \mathbb{R}$.

### Characteristic Equation and Cases

The characteristic equation associated with the differential equation is:

$$
    ar^2 + br + c = 0.
$$

Depending on the roots of this quadratic equation, we have three cases:

1. **Distinct real roots** ($r_1 \neq r_2$): The general solution is:

   $$
       y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}.
   $$

2. **Repeated real roots** ($r_1 = r_2$): The general solution is:

   $$
       y(t) = (C_1 + C_2 t)e^{r_1 t}.
   $$

3. **Complex conjugate roots** ($r = \alpha \pm i \beta$): The general solution is:

   $$
       y(t) = e^{\alpha t} \left(C_1 \cos(\beta t) + C_2 \sin(\beta t) \right).
   $$

---

## Example Question

Solve the differential equation $y'' - 3y' + 2y = 0$.

### Step 1: Find the Characteristic Equation

The characteristic equation is:

$$
    r^2 - 3r + 2 = 0.
$$

Factoring:

$$
    (r - 1)(r - 2) = 0.
$$

Thus, the roots are $r_1 = 1$ and $r_2 = 2$.

### Step 2: Form the General Solution

Since the roots are real and distinct, the general solution is:

$$
    y(t) = C_1 e^t + C_2 e^{2t}.
$$

This is the required general solution.

