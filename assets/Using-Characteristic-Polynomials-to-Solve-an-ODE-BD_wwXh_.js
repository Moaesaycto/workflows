const n=`# Using the Characteristic Polynomial\r
\r
We can use the [characteristic polynomial](/workflows/#/mathematics/differential_equations/Characteristic-Polynomials) to solve a constant-coefficient differential equation. The **general solution** of the homogeneous equation \\\\(Lu=0\\\\) is:\r
\r
\\\\[\r
    u(x) = \\\\sum_{q=1}^r \\\\sum_{l = 0}^{k_q-1} c_{ql}x^{l}e^{\\\\lambda_q x},\r
\\\\]\r
\r
where the \\\\(c_{ql}\\\\) are arbitrary constants.\r
\r
---\r
\r
## Proof\r
\r
To understand this better, note that if \\\\((z - \\\\lambda)^k\\\\) is a factor of \\\\(p(z)\\\\), then the function \\\\(u(x) = x^j e^{\\\\lambda x}\\\\) is a solution of \\\\(Lu = 0\\\\) for \\\\(0 \\\\leq j \\\\leq k-1\\\\).\r
\r
We can see this by first writing \\\\(p(z) = (z- \\\\lambda)^k q(z)\\\\), so that \\\\(q(z)\\\\) is a polynomial of degree \\\\(m-k\\\\). For any two polynomials \\\\(p_1\\\\) and \\\\(p_2\\\\), we have:\r
\r
\\\\[\r
    p_1(D)p_2(D) = p_2(D)p_1(D).\r
\\\\]\r
\r
It then follows that:\r
\r
\\\\[\r
    p(D) = (D - \\\\lambda)^k q(D) = q(D)(D - \\\\lambda)^k,\r
\\\\]\r
\r
and so for \\\\(0 \\\\leq j \\\\leq k -1\\\\), we have:\r
\r
\\\\[\r
    \\\\begin{align*}\r
        p(D) x^j e^{\\\\lambda x} &= q(D)(D - \\\\lambda)^k x^j e^{\\\\lambda x}\\\\\\\\\r
        &= q(D) 0\\\\\\\\\r
        &= 0.\r
    \\\\end{align*}\r
\\\\]\r
\r
Now, since \\\\((z-\\\\lambda_q)^{k_q}\\\\) is a factor of \\\\(p(z)\\\\), we have:\r
\r
\\\\[\r
    \\\\begin{align*}\r
        Lu &= \\\\sum_{q=1}^r \\\\sum_{l = 0}^{k_q-1} c_{ql} L x^{l} e^{\\\\lambda_q x}\\\\\\\\\r
        &= \\\\sum_{q=1}^r \\\\sum_{l = 0}^{k_q-1} c_{ql} \\\\times 0\\\\\\\\\r
        &= 0.\r
    \\\\end{align*}\r
\\\\]\r
\r
---\r
\r
## Example Questions\r
\r
### Real Roots\r
\r
Suppose you are to solve the equation:\r
\r
\\\\[\r
    u'''' + 6u''' + 9 u'' - 4u' - 12u = 0.\r
\\\\]\r
\r
We first notice that \\\\(D^4 + 6D^3 + 9D^2 - 4D - 12\\\\) can be factorized into \\\\((D-1)(D+2)^2(D+3)\\\\). This means that we can write our general solution as:\r
\r
\\\\[\r
    u = c_1e^x + c_2e^{-2x} + c_3xe^{-2x} + c_4e^{-3x}.\r
\\\\]\r
\r
### Complex Roots\r
\r
Suppose you are to solve the equation:\r
\r
\\\\[\r
    u''' - 7u'' + 17 u' - 15u = 0.\r
\\\\]\r
\r
We first notice that \\\\(D^3 - 7D^2 + 17D - 15\\\\) can be factorized into \\\\((D -2 - i)(D - 2 + i)(D - 3)\\\\). This means that we can write our general solution as:\r
\r
\\\\[\r
    \\\\begin{align*}\r
        u(x) &= c_1e^{(2+i)x} + c_2e^{(2-i)x}+c_3e^{3x}\\\\\\\\\r
        &= c_4 e^{2x}\\\\cos x + c_5 e^{2x}\\\\sin x + c_3 e^{3x}.\r
    \\\\end{align*}\r
\\\\]\r
\r
`;export{n as default};
