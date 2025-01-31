const a=`# Linearisation\r
\r
Suppose that \\\\(\\\\mathbf{x}_0\\\\) is close to an equilibrium point \\\\(\\\\mathbf{a}.\\\\) If:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x})\r
\\\\]\r
\r
for all \\\\(t\\\\) with \\\\(\\\\mathbf{x}(0) = \\\\mathbf{x}_0,\\\\) then for small \\\\(t\\\\) the difference:\r
\r
\\\\[\r
    \\\\mathbf{y} = \\\\mathbf{x} - \\\\mathbf{a}\r
\\\\]\r
\r
is small and satisfies:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{y}}{dt} = \\\\frac{d\\\\mathbf{x}}{dt} = \\\\mathbf{F}(\\\\mathbf{x}) = \\\\mathbf{F}(\\\\mathbf{a} + \\\\mathbf{y}) \\\\approx \\\\mathbf{F}(\\\\mathbf{a}) + \\\\mathbf{F}'(\\\\mathbf{a})\\\\mathbf{y}.\r
\\\\]\r
\r
This suggests that if \\\\(\\\\mathbf{y}_0 = \\\\mathbf{x}_0 - \\\\mathbf{a}\\\\) and \\\\(\\\\mathbf{y}\\\\) is the solution of the linear dynamical system:\r
\r
\\\\[\r
    \\\\frac{d\\\\mathbf{y}}{dt} = \\\\mathbf{F}(\\\\mathbf{a}) + \\\\mathbf{F}'(\\\\mathbf{a})\\\\mathbf{y}, \\\\quad \\\\text{for all } t, \\\\quad \\\\text{with } \\\\mathbf{y}(0) = \\\\mathbf{y}_0,\r
\\\\]\r
\r
then:\r
\r
\\\\[\r
    \\\\mathbf{x}(t) \\\\approx \\\\mathbf{a} + \\\\mathbf{y}(t)\r
\\\\]\r
\r
for small \\\\(t.\\\\) In particular, we can infer stability properties of our differential equation at an equilibrium point \\\\(\\\\mathbf{a}\\\\) from the eigenvalues of:\r
\r
\\\\[\r
    A = \\\\mathbf{F}'(\\\\mathbf{a}).\r
\\\\]\r
\r
`;export{a as default};
