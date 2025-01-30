const o=`# Linearisation\r
\r
Suppose that \\\\(\\\\boldsymbol{x}_0\\\\) is close to an equilibrium point \\\\(\\\\boldsymbol{a}.\\\\) If:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x})\r
\\\\]\r
\r
for all \\\\(t\\\\) with \\\\(\\\\boldsymbol{x}(0) = \\\\boldsymbol{x}_0,\\\\) then for small \\\\(t\\\\) the difference:\r
\r
\\\\[\r
    \\\\boldsymbol{y} = \\\\boldsymbol{x} - \\\\boldsymbol{a}\r
\\\\]\r
\r
is small and satisfies:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{y}}{dt} = \\\\frac{d\\\\boldsymbol{x}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{x}) = \\\\boldsymbol{F}(\\\\boldsymbol{a} + \\\\boldsymbol{y}) \\\\approx \\\\boldsymbol{F}(\\\\boldsymbol{a}) + \\\\boldsymbol{F}'(\\\\boldsymbol{a})\\\\boldsymbol{y}.\r
\\\\]\r
\r
This suggests that if \\\\(\\\\boldsymbol{y}_0 = \\\\boldsymbol{x}_0 - \\\\boldsymbol{a}\\\\) and \\\\(\\\\boldsymbol{y}\\\\) is the solution of the linear dynamical system:\r
\r
\\\\[\r
    \\\\frac{d\\\\boldsymbol{y}}{dt} = \\\\boldsymbol{F}(\\\\boldsymbol{a}) + \\\\boldsymbol{F}'(\\\\boldsymbol{a})\\\\boldsymbol{y}, \\\\quad \\\\text{for all } t, \\\\quad \\\\text{with } \\\\boldsymbol{y}(0) = \\\\boldsymbol{y}_0,\r
\\\\]\r
\r
then:\r
\r
\\\\[\r
    \\\\boldsymbol{x}(t) \\\\approx \\\\boldsymbol{a} + \\\\boldsymbol{y}(t)\r
\\\\]\r
\r
for small \\\\(t.\\\\) In particular, we can infer stability properties of our differential equation at an equilibrium point \\\\(\\\\boldsymbol{a}\\\\) from the eigenvalues of:\r
\r
\\\\[\r
    A = \\\\boldsymbol{F}'(\\\\boldsymbol{a}).\r
\\\\]\r
\r
`;export{o as default};
