const n=`# Python Matrix Operations Guide\r
\r
## 1. Introduction to Matrices in Python\r
\r
Python provides multiple ways to handle matrix operations using **NumPy** and **SymPy**. NumPy is best for numerical computations, while SymPy supports symbolic algebra.\r
\r
\`\`\`python\r
import numpy as np\r
from sympy import Matrix\r
\`\`\`\r
\r
## 2. Creating Matrices\r
\r
### Using NumPy\r
\`\`\`python\r
matrix = np.array([[1, 2], [3, 4]])\r
\`\`\`\r
\r
### Using SymPy\r
\`\`\`python\r
sym_matrix = Matrix([[1, 2], [3, 4]])\r
\`\`\`\r
\r
## 3. Matrix Transposition\r
\`\`\`python\r
transposed = matrix.T  # NumPy\r
sym_transposed = sym_matrix.T  # SymPy\r
\`\`\`\r
\r
## 4. Matrix Addition & Subtraction\r
\`\`\`python\r
A = np.array([[1, 2], [3, 4]])\r
B = np.array([[5, 6], [7, 8]])\r
\r
C = A + B  # Addition\r
D = A - B  # Subtraction\r
\`\`\`\r
\r
## 5. Matrix Multiplication\r
\r
### Element-wise Multiplication\r
\`\`\`python\r
E = A * B  # Element-wise multiplication\r
\`\`\`\r
\r
### Dot Product (Matrix Multiplication)\r
\`\`\`python\r
F = A @ B  # Preferred method\r
G = np.dot(A, B)  # Alternative\r
\`\`\`\r
\r
## 6. Determinant of a Matrix\r
\`\`\`python\r
det_A = np.linalg.det(A)  # NumPy\r
det_sym = sym_matrix.det()  # SymPy\r
\`\`\`\r
\r
## 7. Inverse of a Matrix\r
\`\`\`python\r
inv_A = np.linalg.inv(A)  # NumPy\r
inv_sym = sym_matrix.inv()  # SymPy\r
\`\`\`\r
\r
## 8. Eigenvalues and Eigenvectors\r
\`\`\`python\r
eigenvalues, eigenvectors = np.linalg.eig(A)\r
\`\`\`\r
\r
## 9. Solving Linear Systems\r
\`\`\`python\r
b = np.array([1, 2])\r
x = np.linalg.solve(A, b)\r
\`\`\`\r
\r
## 10. Special Matrices\r
\r
### Identity Matrix\r
\`\`\`python\r
I = np.eye(3)  # 3x3 Identity matrix\r
\`\`\`\r
\r
### Zero Matrix\r
\`\`\`python\r
Z = np.zeros((3, 3))\r
\`\`\`\r
\r
### Ones Matrix\r
\`\`\`python\r
O = np.ones((3, 3))\r
\`\`\`\r
`;export{n as default};
