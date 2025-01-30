# Wronskians

Wronskians are functions that provide us with a way of testing if a family of solutions to \\(Lu = 0\\) is linearly independent. They also have various other uses that will be explored below. We say that if the functions \\(u_1, \\cdots, u_m\\) are linear dependent over an interval \\([a,b],\\) then \\(W(x; u_1, \\cdots, u_m) = 0\\) for \\(a \\leq x \\leq b.\\)

Let \\(u_1(x), u_2(x),\\cdots,u_m(x)\\) be functions defined on an interval \\(I \\subset \\mathbb{R}.\\) The functions \\(u_1, \\cdots, u_m\\) are called linear dependent if there exists constants \\(a_1, a_2, \\cdots, a_m\\) **not all zero** such that

\\[
    \\sum_{j = 1}^m a_ju_j(x) = 0~~~\\forall x \\in I.
\\]

If this equation only holds for the trivial one, that is \\(a_i=0\\) for \\(i = 1, 2, \\cdots, m,\\) then the functions are **linearly independent**. For example, \\(u_1 = \\sin 2x\\) and \\(u_2 = \\sin x \\cos x\\) are linearly **dependent**, whereas \\(u_1 = \\sin x\\) and \\(u_2 = \\cos x\\) are linearly **independent**.

---

## Calculating the Wronskian

The **Wronskian** of the functions \\(u_1, u_2, \\cdots, u_m\\) is the \\(m \\times m\\) determinant:

\\[
    W(x) = W(x; u_1, u_2, \\cdots, u_m) = \\det [D^{i-1}u_j].
\\]

For instance, when \\(m = 3,\\) we have:

\\[
    W(x) = \\begin{vmatrix}u_1 & u_2 & u_3\\\\u_1' & u_2' & u_3'\\\\ u_1'' & u_2'' & u_3''\\end{vmatrix}.
\\]

\\(W(x)\\) is only defined only when the functions are differentiable \\(m-1\\) times.

---

## Properties of Wronskians

Below is the list of properties of Wronskians.

- If \\(u_1, u_2, \\cdots, u_m\\) are solutions of \\(Lu= 0\\) on the interval \\([a,b],\\) then their Wronskians satisfies \\(a_m(x)W'(x) + a_{m-1}W(x) = 0,\\) for \\(a \\leq x \\leq b.\\)

- Let \\(u_1, u_2, \\cdots, u_m\\) be solutions of a **non-singular**, linear, homogeneous, \\(m\\)th-order ODE \\(Lu = 0\\) on the interval \\([a,b].\\) For \\(a \\leq x \\leq b,\\) either:
    1. \\(W(x) = 0\\) and the \\(m\\) solutions are linearly **dependent**.
    2. \\(W(x) \\neq 0\\) and the \\(m\\) solutions are linearly **independent**.

- If \\(u_1, \\cdots, u_m\\) are linearly dependent over an interval \\([a,b],\\) then

    \\[
        W(x;u_1, u_2, \\cdots, u_m) = 0
    \\]
    for all \\(a \\leq x \\leq b.\\)

- If \\(u_1, u_2, \\cdots, u_m\\) are solutions of \\(Lu=0\\) on the interval \\([a,b],\\) then their Wronskian satisfies

    \\[
        a_m(x)W'(x) + a_{m-1}(x)W(x) = 0,
    \\]
    \\(a \\leq x \\leq b.\\)

---

## An Application of Wronskians - Variation of Parameters

Consider a case when \\(f\\) is not a polynomial times and exponential, or if \\(L\\) does not have constant coefficients. Furthermore, consider a linear, second-order, inhomogeneous ODE with leading coefficient 1.

\\[
    Lu = u''(x)+p(x)u'(x) + q(x)u(x) = f(x).
\\]

Let \\(u_1(x)\\) and \\(u_2(x)\\) be linearly independent solutions to the homogeneous equation and let \\(W(x)=W(x;u_1,u_2)\\) denote their Wronskian. Thus, \\(Lu_1 = 0,\\) \\(Lu_2 = 0\\) and \\(W \\neq 0.\\) We seek \\(v_1\\) and \\(v_2\\) such that

\\[
    u(x) = v_1(x)u_1(x)+v_2(x)u_2(x)
\\]

is a (particular) solution to \\(Lu = f\\). To simplify the expression

\\[
    u' = v_1'u_1 + v_1u_1' + v_2'u_2 + v_2u_2',
\\]

we impose the condition \\(v_1'u_1 + v_2'u_2 = 0,\\) then,

\\[
    u' = v_1u_1' + v_2u_2'.
\\]

A short calculation now shows \\(Lu = v_1Lu_1 + v_2Lu_2 + v_1'u_1' + v_2'u_2' = v_1'u_1' + v_2'u_2'\\) since we assume \\(Lu_1 = Lu_2 = 0.\\) That is, \\(u = v_1u_1 + v_2u_2\\) satisfies \\(Lu = f\\) if:

\\[
    \\begin{align*}
        v_1'u_1 + v_2'u_2 &= 0,\\\\
        v_1'u_1' + v_2'u_2' &= f.
    \\end{align*}
\\]

Thus, we have a pair of equations for the unknown \\(v_1'\\) and \\(v_2'.\\) In matrix form:

\\[
    \\begin{bmatrix}u_1(x) & u_2(x) \\\\ u_1'(x) & u_2'(x)\\end{bmatrix}
    \\begin{bmatrix}v_1'(x)\\\\v_2'(x)\\end{bmatrix} =
    \\begin{bmatrix}0\\\\f(x)\\end{bmatrix},
\\]

so

\\[
    \\begin{bmatrix}v_1'(x)\\\\v_2'(x)\\end{bmatrix} =
    \\dfrac{1}{W(x)} \\begin{bmatrix}u_2'(x) & -u_2(x)\\\\-u_1'(x) & u_1(x)\\end{bmatrix}
    \\begin{bmatrix}0 \\\\ f(x)\\end{bmatrix},
\\]

which, in other words, means:

\\[
    v_1'(x) = \\frac{-u_2(x)f(x)}{W(x)},\\quad v_2'(x) = \\frac{u_1(x)f(x)}{W(x)}.
\\]

