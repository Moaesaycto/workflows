# Python Mathematical Operations and Tools

## 1. Basic Arithmetic Operations

Python supports standard arithmetic operations:

```python
x, y = 10, 3
sum_result = x + y      # Addition (13)
diff_result = x - y     # Subtraction (7)
prod_result = x * y     # Multiplication (30)
div_result = x / y      # Division (3.3333)
floor_div = x // y      # Floor Division (3)
mod_result = x % y      # Modulus (1)
power_result = x ** y   # Exponentiation (1000)
```

## 2. Common Mathematical Functions (`math` Module)

```python
import math

sqrt_val = math.sqrt(25)      # Square root (5.0)
log_val = math.log(10)        # Natural log (base e)
log10_val = math.log10(100)   # Log base 10 (2.0)
exp_val = math.exp(2)         # e^2
fabs_val = math.fabs(-5.5)    # Absolute value (5.5)
factorial_val = math.factorial(5)  # 5! (120)
```

### Trigonometric Functions

```python
sin_val = math.sin(math.radians(30))  # Sine of 30 degrees
cos_val = math.cos(math.radians(60))  # Cosine of 60 degrees
tan_val = math.tan(math.radians(45))  # Tangent of 45 degrees
```

### Constants

```python
pi_val = math.pi       # 3.141592653589793
e_val = math.e         # 2.718281828459045
tau_val = math.tau     # 6.283185307179586
inf_val = math.inf     # Infinity
```

## 3. Number Theory (`math` and `sympy` Modules)

```python
import sympy

is_prime = sympy.isprime(29)  # True
prime_factors = sympy.primefactors(56)  # [2, 7]
gcd_val = math.gcd(36, 48)  # 12
lcm_val = math.lcm(12, 18)  # 36
```

### Modular Arithmetic
```python
mod_exp = pow(4, 3, 5)  # (4^3) % 5 = 64 % 5 = 4
```

## 4. Randomization (`random` Module)

```python
import random

rand_int = random.randint(1, 10)      # Random integer between 1 and 10
rand_float = random.random()          # Random float between 0 and 1
rand_uniform = random.uniform(1, 10)  # Random float between 1 and 10
rand_choice = random.choice([1, 2, 3, 4])  # Random element from a list
rand_shuffle = [1, 2, 3, 4]
random.shuffle(rand_shuffle)  # Shuffle list in-place
rand_sample = random.sample(range(1, 100), 5)  # Pick 5 unique elements
```

## 5. Statistical Functions (`statistics` Module)

```python
import statistics

data = [10, 20, 30, 40, 50]
mean_val = statistics.mean(data)       # Mean (30.0)
median_val = statistics.median(data)   # Median (30.0)
mode_val = statistics.mode([1, 2, 2, 3])  # Mode (2)
stdev_val = statistics.stdev(data)     # Standard deviation
variance_val = statistics.variance(data)  # Variance
```

## 6. Fractions and Decimals

```python
from fractions import Fraction
from decimal import Decimal

frac_val = Fraction(3, 4) + Fraction(2, 5)  # Fraction addition
precise_val = Decimal('0.1') + Decimal('0.2')  # More precise arithmetic
```

## 7. Working with Complex Numbers

```python
z = complex(2, 3)  # 2 + 3j
real_part = z.real  # 2.0
imag_part = z.imag  # 3.0
conjugate_val = z.conjugate()  # 2 - 3j
abs_val = abs(z)  # Magnitude (√(2² + 3²))
```

## 8. Linear Algebra and Matrices (`numpy` and `sympy`)

```python
import numpy as np
matrix = np.array([[1, 2], [3, 4]])
det_matrix = np.linalg.det(matrix)  # Determinant
inv_matrix = np.linalg.inv(matrix)  # Inverse
```

Using `sympy` for symbolic computation:
```python
from sympy import Matrix
sym_matrix = Matrix([[1, 2], [3, 4]])
sym_det = sym_matrix.det()  # Symbolic determinant
sym_inv = sym_matrix.inv()  # Symbolic inverse
```

## 9. Calculus and Differential Equations (`sympy`)

```python
from sympy import symbols, diff, integrate
x = symbols('x')
derivative = diff(x**2, x)  # 2*x
integral = integrate(x**2, x)  # x^3 / 3
```

## 10. NumPy for Advanced Computations

```python
import numpy as np

array = np.array([1, 2, 3])
sum_arr = np.sum(array)  # Sum of elements
mean_arr = np.mean(array)  # Mean
std_arr = np.std(array)  # Standard deviation
```
