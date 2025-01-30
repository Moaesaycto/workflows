const a=`# The Characteristic Polynomial of a Linear ODE\r
\r
If $L$ has constant coefficients (see [here](/workflows/#/mathematics/differential_equations/Linear-Differential-Operators) for the definition of $L$), then the problem of solving $Lu = 0$ reduces to that of factorizing the polynomial having the same coefficients. Some complications occur if the polynomial has any repeated roots.\r
\r
More formally, suppose that $a_j$ is constant for $0 \\leq j \\leq m,$ with $a_m \\neq 0.$ We define the associated polynomial of degree $m,$\r
\r
$$\r
    p(z) = \\sum_{j=0}^m a_jz^j\r
$$\r
\r
so that, even more formally, $L = p(D).$\r
\r
---\r
\r
## Properties of the Characteristic Polynomial\r
\r
Since $D^je^{\\lambda x} = \\lambda^je^{\\lambda x},$ we have:\r
\r
$$\r
    \\begin{align*}\r
        p(D)e^{\\lambda x} &= \\sum_{j=0}^m a_j\\lambda^j\\\\\r
        &= p(\\lambda) e^{\\lambda x}.\r
    \\end{align*}\r
$$\r
\r
And so we have $p(D)e^{\\lambda x} = 0 \\Leftrightarrow p(\\lambda) = 0.$\r
\r
By the [fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra),\r
\r
$$\r
    p(z) = a_m\\prod_{j=1}^r(z-\\lambda_j)^{k_j}\r
$$\r
\r
where $\\lambda_1, \\lambda_2, \\dots, \\lambda_r$ are the distinct roots of $p,$ with corresponding **multiplicities** $k_1, k_2, \\dots, k_r$ satisfying\r
\r
$$\r
    \\sum_{j=1}^r k_j=m.\r
$$\r
\r
### Some Important Properties\r
\r
1. $(D - \\lambda)x^j e^{\\lambda x} = jx^{j-1}e^{\\lambda x}$ for $j \\geq 0$.\r
2. $(D-\\lambda)^kx^je^{\\lambda x} = 0$ for $j = 0, 1, \\dots, k-1.$\r
\r
To prove these features, we first perform an elementary calculation:\r
\r
$$\r
    \\begin{align*}\r
        (D - \\lambda)x^j e^{\\lambda x} &= jx^{j-1}e^{\\lambda x} + x^j\\lambda e^{\\lambda x} - \\lambda x^j e^{\\lambda x}\\\\\r
        &= jx^{j-1}e^{\\lambda x},\r
    \\end{align*}\r
$$\r
\r
as claimed, and then we have\r
\r
$$\r
    \\begin{align*}\r
        (D - \\lambda)^2x^j e^{\\lambda x} &= (D- \\lambda)jx^{j-1}e^{\\lambda x}\\\\\r
        &= j(j-1)x^{j-2}e^{\\lambda x}.\r
    \\end{align*}\r
$$\r
\r
Continuing this process, we see the following pattern:\r
\r
$$\r
    \\begin{align*}\r
        (D - \\lambda)^jx^j e^{\\lambda x} &= j!e^{\\lambda x}\\\\\r
        (D - \\lambda)^{j+1}x^j e^{\\lambda x} &= j!(D -\\lambda)e^{\\lambda x}\\\\\r
        &= 0.\r
    \\end{align*}\r
$$`;export{a as default};
