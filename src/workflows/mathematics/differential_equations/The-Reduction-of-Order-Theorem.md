# Reduction of Order

For \\(u = u_1(x) \\neq 0\\), a solution to the ODE \\(u'' + p(x)u' + q(x)u = 0\\), on some interval \\(I\\), then a second solution is

\\[
    u = u_1(x) \\int \\frac{1}{u_1^2 \\exp(\\int p\\,dx)} dx.
\\]

---

## Proof of the Reduction of Order

Substitute \\(u = u_1(x)v(x)\\) into the ODE and rearrange to obtain:

\\[
    (u_1'' + pu_1' + qu_1)v + u_1v'' + (2u_1' + pu_1)v' = u_1v'' + (2u_1' + pu_1)v' = 0.
\\]

This is just a first-order, linear ODE for the derivative of the unknown factor \\(v(x)\\): put \\(w = v'\\), then

\\[
    u_1 w' + (2u_1' + pu_1)w = 0 \\Rightarrow w' + (2u_1'u_1^{-1} + p)w = 0.
\\]

We seek an integrating factor:

\\[
    A(x) = \\exp \\left( \\int (2u'_1 u_1^{-1} + p)\\,dx\\right) = u_1^2 \\exp \\left(\\int p \\,dx \\right),
\\]

so that:

\\[
    \\begin{align*}
        \\frac{d}{dx}(Aw) &= Aw' + A'w\\\\
        &= A(w' + (2u_1'u_1^{-1} + p)w)\\\\
        &= 0.
    \\end{align*}
\\]

Then \\(Aw = C\\) for some constant \\(C\\), and so

\\[
    v = \\int \\frac{C}{A(x)} \\,dx.
\\]