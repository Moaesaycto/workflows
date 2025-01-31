# Equilibrium Points

An equilibrium point \\(\\mathbf{a} \\in \\mathbb{R}^N\\) for the dynamical system:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x})
\\]

is a point where \\(\\mathbf{F}(\\mathbf{a}) = \\mathbf{0}.\\) Thus, the solution of:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}), \\quad \\mathbf{x}(0) = \\mathbf{a},
\\]

is just the constant function \\(\\mathbf{x}(t) = \\mathbf{a}.\\)

Consider the system:

\\[
    \\frac{d\\mathbf{x}}{dt} = A\\mathbf{x} + \\mathbf{b}, \\quad \\mathbf{x}(0) = \\mathbf{x}_0,
\\]

where \\(\\det(A) \\neq 0.\\) Since:

\\[
    A\\mathbf{x} + \\mathbf{b} = \\mathbf{0} \\iff \\mathbf{x} = -A^{-1}\\mathbf{b},
\\]

the only equilibrium point is:

\\[
    \\mathbf{a} + e^{tA}(\\mathbf{x}_0 - \\mathbf{a}).
\\]

Let \\(A\\) be a diagonalizable matrix with eigenvalues \\(\\lambda_1, \\lambda_2, \\dots, \\lambda_N.\\) The equilibrium point \\(\\mathbf{a} = -A^{-1}\\mathbf{b}\\) is:

1. **Stable** if and only if \\(\\text{Re}(\\lambda_j) \\leq 0\\) for all \\(j.\\)
2. **Asymptotically stable** if and only if \\(\\text{Re}(\\lambda_j) < 0\\) for all \\(j.\\)

In the second case, the **domain of attraction** is the whole of \\(\\mathbb{R}^N.\\)

---

## Stable Equilibrium

An equilibrium point \\(\\mathbf{a}\\) is **stable** if for every \\(\\varepsilon > 0,\\) there exists \\(\\delta > 0\\) such that whenever \\(\\|\\mathbf{x}_0 - \\mathbf{a}\\| < \\delta,\\) the solution of:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}), \\quad \\mathbf{x}(0) = \\mathbf{x}_0,
\\]

satisfies:

\\[
    \\|\\mathbf{x}(t) - \\mathbf{a}\\| < \\varepsilon \\quad \\forall t > 0.
\\]

A trajectory stays close to a stable equilibrium point if it starts sufficiently close to \\(\\mathbf{a}.\\)

An equilibrium point \\(\\mathbf{a}\\) is **asymptotically stable** in a domain \\(D\\) if:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x}), \\quad \\mathbf{x}(0) = \\mathbf{x}_0, \\quad \\mathbf{x}(t) \\to \\mathbf{a} \\text{ as } t \\to \\infty.
\\]

In this case, \\(D\\) is called a **domain of attraction** for \\(\\mathbf{a}.\\)

![stable_unstable](media/stable-and-unstable.png)

### Summary of Stability Conditions

For an equilibrium point \\(\\mathbf{a} = \\mathbf{0},\\) we classify stability as follows:

- **Asymptotically stable** if \\(\\text{Re}(\\lambda_i) < 0\\) for all eigenvalues.
- **Stable (but not asymptotically)** if \\(\\text{Re}(\\lambda_i) \\leq 0\\) for all eigenvalues.
- **Unstable** if \\(\\text{Re}(\\lambda_i) > 0\\) for at least one eigenvalue.

---

## Classification of Equilibrium Points

### Case 1: Real Eigenvalues \\(\\lambda_1\\) and \\(\\lambda_2\\) with Two Linearly Independent Eigenvectors

**General solution:**

\\[
    \\mathbf{x} = c_1e^{\\lambda_1 t}\\mathbf{v}_1 + c_2e^{\\lambda_2 t}\\mathbf{v}_2.
\\]

**Canonical form:**

\\[
    \\Lambda = \\begin{bmatrix}\\lambda_1 & 0\\\\0 & \\lambda_2\\end{bmatrix}.
\\]

![stable_unstable](media/saddle-unstable.PNG)

### Case 2: Complex Conjugate Eigenvalues \\(\\lambda_1 = \\bar{\\lambda_2} \\notin \\mathbb{R}\\)

**General solution:**

\\[
    \\mathbf{x} = c_1 \\text{Re}(e^{\\lambda_1 t}\\mathbf{v}_1) + c_2 \\text{Im}(e^{\\lambda_1t}\\mathbf{v}_1).
\\]

**Canonical form:**

\\[
    A = \\begin{bmatrix}\\alpha & \\beta \\\\ -\\beta & \\alpha \\end{bmatrix}, \\quad \\lambda_1 = \\alpha + i\\beta.
\\]

We now focus on the canonical dynamical system:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\begin{bmatrix}\\alpha & \\beta \\\\ -\\beta & \\alpha\\end{bmatrix}\\mathbf{x}.
\\]

**Eigenvector:**

\\[
    \\mathbf{v}_1 = \\begin{bmatrix}1\\\\i\\end{bmatrix}.
\\]

**Complex solution:**

\\[
    e^{\\lambda_1 t}\\mathbf{v}_1 = e^{\\alpha t} (\\cos \\beta t + i \\sin \\beta t) \\begin{bmatrix}1 \\\\i\\end{bmatrix}.
\\]

This can be interpreted as:

\\[
    \\mathbf{x}(t) = e^{\\alpha t} R(t) \\mathbf{x}(0), \\quad R(t) = \\begin{bmatrix}\\cos \\beta t & \\sin \\beta t\\\\ -\\sin \\beta t & \\cos \\beta t \\end{bmatrix}.
\\]

Thus, the initial vector \\(\\mathbf{x}(0)\\) is rotated by the rotation matrix \\(R(t)\\) and scaled by the factor \\(e^{\\alpha t}.\\)