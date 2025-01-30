const n=`# Linear Differential Operators\r
\r
Given coefficients $a_0(x), a_1(x),\\dots,a_m(x)$, we define the **linear differential operator** $L$ of order $m$ as\r
\r
$$\r
    Lu(x) = \\sum_{j=0}^{m} a_j(x) D^j u(x).\r
$$\r
\r
We refer to $a_m$ as the **leading coefficient** of $L$. The ODE $LU=f$ is said to be **singular** with respect to an interval $[a,b]$ if the leading coefficient $a_m$ vanishes for any $x \\in [a,b]$. By extension, we also say $L$ is singular if this is the case.\r
\r
---\r
\r
## Properties and Classifications\r
\r
Linear differential operators have certain features that should be considered:\r
\r
- An operator of the form\r
\r
  $$\r
      Lu(x) = \\sum_{j=0}^{m} a_j(x) D^j u(x)\r
  $$\r
  \r
  is linear. That is, for any constants $c_1$ and $c_2$ and any $m$-times differentiable functions $u_1$ and $u_2$, it holds that\r
\r
  $$\r
      L(c_1 u_1 + c_2 u_2) = c_1 Lu_1 + c_2 Lu_2.\r
  $$\r
\r
- Ordinary differential equations of the form $Lu = 0$ are known as **homogeneous**. Those of the form $Lu = f$ are known as **non-homogeneous**.\r
\r
- Let $u_1, u_2, \\dots, u_k$ be the solutions to the linear homogeneous differential equation $Lu=0$. Since $L$ is linear, the linear combination\r
\r
  $$\r
      u = \\sum_{i = 1}^{k} c_i u_i\r
  $$\r
  \r
  is also a solution. This is known as **linear superposition**. This implies that the set of solutions forms a [vector space](https://en.wikipedia.org/wiki/Vector_space).\r
\r
---\r
\r
`;export{n as default};
