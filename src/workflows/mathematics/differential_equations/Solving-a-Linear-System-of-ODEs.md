# Dynamical Systems

We say that the \\(N \\times N\\) first-order system of ODEs:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\mathbf{F}(\\mathbf{x})
\\]

is **linear** if the RHS has the form:

\\[
    \\mathbf{F}(\\mathbf{x},t) = A(t)\\mathbf{x} + \\mathbf{b}(t),
\\]

for some \\(N \\times N\\) matrix-valued function \\(A(t) = [a_{ij}(t)]\\) and a vector-valued function \\(\\mathbf{b}(t) = [b_i(t)].\\) The system is **autonomous** precisely when \\(A\\) and \\(\\mathbf{b}\\) are constant.

If the elements of \\(A(t)\\) and components of \\(\\mathbf{b}(t)\\) are continuous for \\(0 \\leq t \\leq T,\\) then the linear initial-value problem:

\\[
    \\frac{d\\mathbf{x}}{dt} = A(t)\\mathbf{x} + \\mathbf{b}(t), \\quad 0 \\leq t \\leq T, \\quad \\mathbf{x}(0) = \\mathbf{x}_0,
\\]

has a unique solution \\(\\mathbf{x}(t)\\) for \\(0 \\leq t \\leq T.\\)

Let's consider investigating the special case where \\(A\\) is constant and \\(\\mathbf{b}(t) \\equiv 0\\):

\\[
    \\frac{d\\mathbf{x}}{dt} = A\\mathbf{x}.
\\]

---

## Eigensystem Solution

If \\(\\mathbf{v}\\) is a constant vector and \\(A\\mathbf{v} = \\lambda \\mathbf{v},\\) we define \\(\\mathbf{x}(t) = e^{\\lambda t}\\mathbf{v}.\\) Then:

\\[
    \\frac{d\\mathbf{x}}{dt} = \\lambda e^{\\lambda t}\\mathbf{v} = e^{\\lambda t}(A\\mathbf{v}) = A(e^{\\lambda t}\\mathbf{v}) = A\\mathbf{x},
\\]

that is, \\(\\mathbf{x}\\) is a solution of:

\\[
    \\frac{d\\mathbf{x}}{dt} = A\\mathbf{x}.
\\]

If \\(A\\mathbf{v}_j = \\lambda_j \\mathbf{v}_j\\) for \\(1 \\leq j \\leq N,\\) then the linear combination:

\\[
    \\mathbf{x}(t) = \\sum_{j=1}^N c_je^{\\lambda_j t}\\mathbf{v}_j
\\]

is also a solution because the ODE is linear and homogeneous. Provided the \\(\\mathbf{v}_j\\) are linearly independent, the above formula is the **general solution** because given any \\(\\mathbf{x}_0 \\in \\mathbb{R}^N,\\) there exist unique \\(c_j\\) such that:

\\[
    \\mathbf{x}(0) = \\sum_{j=1}^N c_j\\mathbf{v}_j = \\mathbf{x}_0.
\\]

---

### Example Question

Consider the system of equations:

\\[
    \\begin{aligned}
        \\frac{dx}{dt} &= -5x + 2y,\\\\
        \\frac{dy}{dt} &= -6x + 3y,
    \\end{aligned}
\\]

with initial conditions \\(x(0) = 5\\) and \\(y(0) = 7.\\)

Here, we have:

\\[
    A = \\begin{bmatrix}-5&2\\\\-6&3\\end{bmatrix},
\\]

with eigenvalues \\(\\lambda_1 = -3, \\mathbf{v}_1 = \\begin{bmatrix}1\\\\1\\end{bmatrix}\\) and \\(\\lambda_2 = 1, \\mathbf{v}_2 = \\begin{bmatrix}1\\\\3\\end{bmatrix}.\\)

Thus, the general solution is:

\\[
    \\mathbf{x}(t) = c_1e^{-3t} \\begin{bmatrix}1\\\\1\\end{bmatrix} + c_2e^t\\begin{bmatrix}1\\\\3\\end{bmatrix}.
\\]

The initial conditions give us \\(c_1 = 4\\) and \\(c_2 = 1,\\) so:

\\[
    x = 4e^{-3t} + e^t, \\quad y = 4e^{-3t} + 3e^{t}.
\\]

---

## Exponential of a Matrix

Suppose we diagonalize our matrix as \\(A = PDP^{-1}\\) where:

\\[
    D = \\begin{bmatrix}\\lambda_1&&\\\\&\\ddots&\\\\&&\\lambda_N\\end{bmatrix},
\\]

where \\(\\lambda_i\\) are the eigenvalues, and \\(P\\) is the augmented matrix of the respective eigenvectors. It follows that:

\\[
    e^A = Pe^DP^{-1}, \\quad e^D = \\begin{bmatrix}e^{\\lambda_1}&&\\\\&\\ddots&\\\\&&e^{\\lambda_N}\\end{bmatrix}.
\\]

---

### Example Question:

Find the solution to the system:

\\[
    \\frac{dy_1}{dt} = -17y_1 + 42y_2, \\quad \\frac{dy_2}{dt} = -7y_1 + 18y_2,
\\]

given the initial condition:

\\[
    \\mathbf{y}(0) = \\begin{bmatrix} 3\\\\-5\\end{bmatrix}.
\\]

The coefficient matrix is:

\\[
    A = \\begin{bmatrix} -17& 42 \\\\ -7 & 18\\end{bmatrix},
\\]

with eigenvalues \\(\\lambda_1 = 4, \\lambda_2 = -3\\) and respective eigenvectors:

\\[
    \\mathbf{v}_1 = \\begin{bmatrix}2\\\\1\\end{bmatrix}, \\quad \\mathbf{v}_2 = \\begin{bmatrix}3\\\\1 \\end{bmatrix}.
\\]

Thus, the general solution is:

\\[
    \\mathbf{y}(t) = \\alpha e^{4t} \\begin{bmatrix} 2\\\\1 \\end{bmatrix} + \\beta e^{-3t} \\begin{bmatrix} 3\\\\1\\end{bmatrix}.
\\]

Solving for \\(\\alpha\\) and \\(\\beta\\) using the initial condition gives:

\\[
    y_1(t) = 39e^{-3t} - 36e^{4t}, \\quad y_2(t) = 13e^{-3t} - 18 e^{4t}.
\\]