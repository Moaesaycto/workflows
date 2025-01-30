const n=`# Reduction of Order\r
\r
For \\\\(u = u_1(x) \\\\neq 0\\\\), a solution to the ODE \\\\(u'' + p(x)u' + q(x)u = 0\\\\), on some interval \\\\(I\\\\), then a second solution is\r
\r
\\\\[\r
    u = u_1(x) \\\\int \\\\frac{1}{u_1^2 \\\\exp(\\\\int p\\\\,dx)} dx.\r
\\\\]\r
\r
---\r
\r
## Proof of the Reduction of Order\r
\r
Substitute \\\\(u = u_1(x)v(x)\\\\) into the ODE and rearrange to obtain:\r
\r
\\\\[\r
    (u_1'' + pu_1' + qu_1)v + u_1v'' + (2u_1' + pu_1)v' = u_1v'' + (2u_1' + pu_1)v' = 0.\r
\\\\]\r
\r
This is just a first-order, linear ODE for the derivative of the unknown factor \\\\(v(x)\\\\): put \\\\(w = v'\\\\), then\r
\r
\\\\[\r
    u_1 w' + (2u_1' + pu_1)w = 0 \\\\Rightarrow w' + (2u_1'u_1^{-1} + p)w = 0.\r
\\\\]\r
\r
We seek an integrating factor:\r
\r
\\\\[\r
    A(x) = \\\\exp \\\\left( \\\\int (2u'_1 u_1^{-1} + p)\\\\,dx\\\\right) = u_1^2 \\\\exp \\\\left(\\\\int p \\\\,dx \\\\right),\r
\\\\]\r
\r
so that:\r
\r
\\\\[\r
    \\\\begin{align*}\r
        \\\\frac{d}{dx}(Aw) &= Aw' + A'w\\\\\\\\\r
        &= A(w' + (2u_1'u_1^{-1} + p)w)\\\\\\\\\r
        &= 0.\r
    \\\\end{align*}\r
\\\\]\r
\r
Then \\\\(Aw = C\\\\) for some constant \\\\(C\\\\), and so\r
\r
\\\\[\r
    v = \\\\int \\\\frac{C}{A(x)} \\\\,dx.\r
\\\\]`;export{n as default};
