# Linearisation

Suppose that \\(\\mathbf{x}_0\\) is close to an equilibrium point \\(\\mathbf{a}.\\) If:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x})
\\]

for all \\(t\\) with \\(\\mathbf{x}(0) = \\mathbf{x}_0,\\) then for small \\(t\\) the difference:

\\[
    \\mathbf{y} = \\mathbf{x} - \\mathbf{a}
\\]

is small and satisfies:

\\[
    \\frac{d\\mathbf{y}}{dt} = \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}) = \\mathbf{F}(\\mathbf{a} + \\mathbf{y}) \\approx \\mathbf{F}(\\mathbf{a}) + \\mathbf{F}'(\\mathbf{a})\\mathbf{y}.
\\]

This suggests that if \\(\\mathbf{y}_0 = \\mathbf{x}_0 - \\mathbf{a}\\) and \\(\\mathbf{y}\\) is the solution of the linear dynamical system:

\\[
    \\frac{d\\mathbf{y}}{dt} = \\mathbf{F}(\\mathbf{a}) + \\mathbf{F}'(\\mathbf{a})\\mathbf{y}, \\quad \\text{for all } t, \\quad \\text{with } \\mathbf{y}(0) = \\mathbf{y}_0,
\\]

then:

\\[
    \\mathbf{x}(t) \\approx \\mathbf{a} + \\mathbf{y}(t)
\\]

for small \\(t.\\) In particular, we can infer stability properties of our differential equation at an equilibrium point \\(\\mathbf{a}\\) from the eigenvalues of:

\\[
    A = \\mathbf{F}'(\\mathbf{a}).
\\]

