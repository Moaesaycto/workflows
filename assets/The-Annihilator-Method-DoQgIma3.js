const n=`# The Annihilator Method\r
\r
If \\\\(f(x)\\\\) is differentiable at least \\\\(n\\\\) times and\r
\r
\\\\[\r
    \\\\left[\\\\sum_{j = 0}^n a_jD^j\\\\right]f(x) = 0,\r
\\\\]\r
\r
then we say\r
\r
\\\\[\r
    \\\\left[\\\\sum_{j = 0}^n a_jD^j\\\\right]\r
\\\\]\r
\r
**annihilates** \\\\(f\\\\).\r
\r
Some notable examples include the fact that \\\\(D^n\\\\) annihilates \\\\(x^{m-1}\\\\) for \\\\(m \\\\leq n\\\\) and \\\\((D-\\\\alpha)^n\\\\) annihilates \\\\(x^{m-1}e^{\\\\alpha x}\\\\) for \\\\(m \\\\leq n\\\\).\r
\r
---\r
\r
### Example Questions\r
\r
**Homogeneous DE Example Question:** Let \\\\(Lu = u'-u\\\\) such that \\\\(Lu = x^2.\\\\) By annihilating both sides,\r
\r
\\\\[\r
    D^3(u'-u) = u'''' - u''' = 0.\r
\\\\]\r
\r
Setting \\\\(w = u''',\\\\) clearly \\\\(w = Ce^x\\\\) is the general solution. Integrating three times yields\r
\r
\\\\[\r
    u = Ce^x + Ex^2 + Fx + G.\r
\\\\]\r
\r
It is clear that \\\\(u_h = Ae^x\\\\) and the form of the particular solution is \\\\(u_p = Ex^2 + Fx + G.\\\\) By substituting into the original equation and comparing coefficients, we will arrive at\r
\r
\\\\[\r
    E = -1, \\\\quad F = 2, \\\\quad G = 1.\r
\\\\]\r
\r
**Further Example Question:** Let \\\\(Lu = u'' - u'\\\\) such that \\\\(Lu = x^2.\\\\) We will first note that \\\\(p(0) \\\\neq 0\\\\) for \\\\(L = p(D)\\\\) so we are not yet able to solve this. Annihilating both sides, we get\r
\r
\\\\[\r
    D^3(u'' -u') = u^{(5)} - u^{(4)} = 0.\r
\\\\]\r
\r
Setting \\\\(w = u^{(4)},\\\\) \\\\(w = Ce^x\\\\) is the general solution. Again, integrating four times yields\r
\r
\\\\[\r
    u = Ce^x + Ex^3 + Fx^2 + Gx + H.\r
\\\\]\r
\r
Here, \\\\(u_h = Ae^x + H\\\\) is the **homogeneous** solution and the particular solution is\r
\r
\\\\[\r
    u_p = x(Ex^2 + Fx + G).\r
\\\\]\r
\r
We can use substitution again to find that\r
\r
\\\\[\r
    E = -\\\\frac{1}{3}, \\\\quad F = -1, \\\\quad G = -2.\r
\\\\]\r
\r
**Example when \\\\(p(\\\\mu) = 0\\\\):** Let \\\\(Lu = u' - u\\\\) such that \\\\(Lu = e^x.\\\\) We again note that \\\\(\\\\mu = 1\\\\) and \\\\(p(\\\\mu) = 0\\\\) for \\\\(L = p(D)\\\\) so we are not able to solve this immediately. We may annihilate both sides by\r
\r
\\\\[\r
    (D-1)(u'-u) = u'' - 2u' + u = 0.\r
\\\\]\r
\r
The characteristic polynomial has a repeated root, so\r
\r
\\\\[\r
    u = Ae^x + Bxe^x\r
\\\\]\r
\r
will be the general solution. So here, \\\\(u_h = Ae^x\\\\) is the homogeneous solution and so the particular solution is\r
\r
\\\\[\r
    u_p = Bxe^x.\r
\\\\]\r
\r
Substituting, we find that\r
\r
\\\\[\r
    B = 1.\r
\\\\]`;export{n as default};
