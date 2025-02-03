const n=`# Python Mathematical Operations and Tools\r
\r
## 1. Basic Arithmetic Operations\r
\r
Python supports standard arithmetic operations:\r
\r
\`\`\`python\r
x, y = 10, 3\r
sum_result = x + y      # Addition (13)\r
diff_result = x - y     # Subtraction (7)\r
prod_result = x * y     # Multiplication (30)\r
div_result = x / y      # Division (3.3333)\r
floor_div = x // y      # Floor Division (3)\r
mod_result = x % y      # Modulus (1)\r
power_result = x ** y   # Exponentiation (1000)\r
\`\`\`\r
\r
## 2. Common Mathematical Functions (\`math\` Module)\r
\r
\`\`\`python\r
import math\r
\r
sqrt_val = math.sqrt(25)      # Square root (5.0)\r
log_val = math.log(10)        # Natural log (base e)\r
log10_val = math.log10(100)   # Log base 10 (2.0)\r
exp_val = math.exp(2)         # e^2\r
fabs_val = math.fabs(-5.5)    # Absolute value (5.5)\r
factorial_val = math.factorial(5)  # 5! (120)\r
\`\`\`\r
\r
### Trigonometric Functions\r
\r
\`\`\`python\r
sin_val = math.sin(math.radians(30))  # Sine of 30 degrees\r
cos_val = math.cos(math.radians(60))  # Cosine of 60 degrees\r
tan_val = math.tan(math.radians(45))  # Tangent of 45 degrees\r
\`\`\`\r
\r
### Constants\r
\r
\`\`\`python\r
pi_val = math.pi       # 3.141592653589793\r
e_val = math.e         # 2.718281828459045\r
tau_val = math.tau     # 6.283185307179586\r
inf_val = math.inf     # Infinity\r
\`\`\`\r
\r
## 3. Number Theory (\`math\` and \`sympy\` Modules)\r
\r
\`\`\`python\r
import sympy\r
\r
is_prime = sympy.isprime(29)  # True\r
prime_factors = sympy.primefactors(56)  # [2, 7]\r
gcd_val = math.gcd(36, 48)  # 12\r
lcm_val = math.lcm(12, 18)  # 36\r
\`\`\`\r
\r
### Modular Arithmetic\r
\`\`\`python\r
mod_exp = pow(4, 3, 5)  # (4^3) % 5 = 64 % 5 = 4\r
\`\`\`\r
\r
## 4. Randomization (\`random\` Module)\r
\r
\`\`\`python\r
import random\r
\r
rand_int = random.randint(1, 10)      # Random integer between 1 and 10\r
rand_float = random.random()          # Random float between 0 and 1\r
rand_uniform = random.uniform(1, 10)  # Random float between 1 and 10\r
rand_choice = random.choice([1, 2, 3, 4])  # Random element from a list\r
rand_shuffle = [1, 2, 3, 4]\r
random.shuffle(rand_shuffle)  # Shuffle list in-place\r
rand_sample = random.sample(range(1, 100), 5)  # Pick 5 unique elements\r
\`\`\`\r
\r
## 5. Statistical Functions (\`statistics\` Module)\r
\r
\`\`\`python\r
import statistics\r
\r
data = [10, 20, 30, 40, 50]\r
mean_val = statistics.mean(data)       # Mean (30.0)\r
median_val = statistics.median(data)   # Median (30.0)\r
mode_val = statistics.mode([1, 2, 2, 3])  # Mode (2)\r
stdev_val = statistics.stdev(data)     # Standard deviation\r
variance_val = statistics.variance(data)  # Variance\r
\`\`\`\r
\r
## 6. Fractions and Decimals\r
\r
\`\`\`python\r
from fractions import Fraction\r
from decimal import Decimal\r
\r
frac_val = Fraction(3, 4) + Fraction(2, 5)  # Fraction addition\r
precise_val = Decimal('0.1') + Decimal('0.2')  # More precise arithmetic\r
\`\`\`\r
\r
## 7. Working with Complex Numbers\r
\r
\`\`\`python\r
z = complex(2, 3)  # 2 + 3j\r
real_part = z.real  # 2.0\r
imag_part = z.imag  # 3.0\r
conjugate_val = z.conjugate()  # 2 - 3j\r
abs_val = abs(z)  # Magnitude (√(2² + 3²))\r
\`\`\`\r
\r
## 8. Linear Algebra and Matrices (\`numpy\` and \`sympy\`)\r
\r
\`\`\`python\r
import numpy as np\r
matrix = np.array([[1, 2], [3, 4]])\r
det_matrix = np.linalg.det(matrix)  # Determinant\r
inv_matrix = np.linalg.inv(matrix)  # Inverse\r
\`\`\`\r
\r
Using \`sympy\` for symbolic computation:\r
\`\`\`python\r
from sympy import Matrix\r
sym_matrix = Matrix([[1, 2], [3, 4]])\r
sym_det = sym_matrix.det()  # Symbolic determinant\r
sym_inv = sym_matrix.inv()  # Symbolic inverse\r
\`\`\`\r
\r
## 9. Calculus and Differential Equations (\`sympy\`)\r
\r
\`\`\`python\r
from sympy import symbols, diff, integrate\r
x = symbols('x')\r
derivative = diff(x**2, x)  # 2*x\r
integral = integrate(x**2, x)  # x^3 / 3\r
\`\`\`\r
\r
## 10. NumPy for Advanced Computations\r
\r
\`\`\`python\r
import numpy as np\r
\r
array = np.array([1, 2, 3])\r
sum_arr = np.sum(array)  # Sum of elements\r
mean_arr = np.mean(array)  # Mean\r
std_arr = np.std(array)  # Standard deviation\r
\`\`\`\r
`;export{n as default};
