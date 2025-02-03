# Python Matrix Operations Guide

## 1. Introduction to Matrices in Python

Python provides multiple ways to handle matrix operations using **NumPy** and **SymPy**. NumPy is best for numerical computations, while SymPy supports symbolic algebra.

```python
import numpy as np
from sympy import Matrix
```

## 2. Creating Matrices

### Using NumPy
```python
matrix = np.array([[1, 2], [3, 4]])
```

### Using SymPy
```python
sym_matrix = Matrix([[1, 2], [3, 4]])
```

## 3. Matrix Transposition
```python
transposed = matrix.T  # NumPy
sym_transposed = sym_matrix.T  # SymPy
```

## 4. Matrix Addition & Subtraction
```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

C = A + B  # Addition
D = A - B  # Subtraction
```

## 5. Matrix Multiplication

### Element-wise Multiplication
```python
E = A * B  # Element-wise multiplication
```

### Dot Product (Matrix Multiplication)
```python
F = A @ B  # Preferred method
G = np.dot(A, B)  # Alternative
```

## 6. Determinant of a Matrix
```python
det_A = np.linalg.det(A)  # NumPy
det_sym = sym_matrix.det()  # SymPy
```

## 7. Inverse of a Matrix
```python
inv_A = np.linalg.inv(A)  # NumPy
inv_sym = sym_matrix.inv()  # SymPy
```

## 8. Eigenvalues and Eigenvectors
```python
eigenvalues, eigenvectors = np.linalg.eig(A)
```

## 9. Solving Linear Systems
```python
b = np.array([1, 2])
x = np.linalg.solve(A, b)
```

## 10. Special Matrices

### Identity Matrix
```python
I = np.eye(3)  # 3x3 Identity matrix
```

### Zero Matrix
```python
Z = np.zeros((3, 3))
```

### Ones Matrix
```python
O = np.ones((3, 3))
```
