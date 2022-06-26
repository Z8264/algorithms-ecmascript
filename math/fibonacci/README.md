# 斐波那契数 （Fibonacci)

费波那契数列 (Fibonacci sequence) 定义：

```plain
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2), n >= 2
```

数列由 0 和 1 开始，之后的费波那契系数就是由之前的两数相加而得出。其中，0 不是第一项，而是第零项。

斐波那契数列：

``` bash
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

## Problem

计算第 n 斐波那契数，即给定 `n` ，计算 `F(n)` 。

Example:

``` bash
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

## Solution

| 编号 | 解法             | En                          |
| ---- | ---------------- | --------------------------- |
| 1    | 递归             | Recursion                   |
| 2    | 自底向上进行迭代 | Iterative Top-Down Approach |
| 3    | 数学公式         | Math                        |
| 4    | 矩阵求幂         | Matrix Exponentiation       |

### 1. 递归 (Recursion)

#### 代码示例

> fibonacci-recursive.js

```js
const fibonacci = (n) => {
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    [a, b] = [b, a + b];
  }
  return n < 2 ? n : b;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(2^n)     | O(n)       |

### 2. 自底向上进行迭代 (Iterative Top-Down Approach)

#### 代码示例

> fibonacci-iterative.js

```js
const fibonacci = (n) => {
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    [a, b] = [b, a + b];
  }
  return n < 2 ? n : b;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

### 3. 数学公式 (Math)

构建以下递推关系：

$$
\left[
\begin{matrix}
1 & 1 \\
1 & 0
\end{matrix} \right]
\left[
\begin{matrix}
F(n) \\
F(n-1)
\end{matrix} \right]=
\left[
\begin{matrix}
F(n)+F(n-1) \\
F(n)
\end{matrix} \right]=
\left[
\begin{matrix}
F(n+1) \\
F(n)
\end{matrix} \right]
$$

$$
\left[
\begin{matrix}
F(n+1) \\
F(n)
\end{matrix} \right]=
\left[
\begin{matrix}
1 & 1 \\
1 & 0
\end{matrix} \right]^n
\left[
\begin{matrix}
F(1) \\
F(0)
\end{matrix} \right]
$$

$$
M=
\left[
\begin{matrix}
1 & 1 \\
1 & 0
\end{matrix} \right]
$$

因此，只要计算矩阵 M 的 n 次幂，就可以得到 F(n) 的值。可以使用快速幂算法来加速计算矩阵 M 的 n 次幂。

#### 代码示例

> fibonacci-math.js

```js
const mul = (x, y) => [
  [
    x[0][0] * y[0][0] + x[0][1] * y[1][0],
    x[0][0] * y[0][1] + x[0][1] * y[1][1],
  ],
  [x[1][0] * y[0][0] + x[1][1] * y[1][0], x[1][0] * y[0][1] + x[1][1] * y[1][1]],
];

const pow = (x, n) => {
  let r = [[1, 0], [0, 1]];
  let v = x;
  while (n) {
    if (n % 2 === 1) {
      r = mul(r, v);
      n -= 1;
    }
    v = mul(v, v);
    n /= 2;
  }
  return r;
};

const fibonacci = (n) => (n <= 0
  ? 0
  : mul(
    [[0, 1], [1, 0]],
    pow([[0, 1], [1, 1]], n - 1),
  )[0][1]);
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(log n)   | O(1)       |

### 4. 矩阵求幂 (Matrix Exponentiation)

根据斐波那契数 F(n) 齐次线性递推，得：

$$
x^2=x+1
$$

求解：

$$
x_1 = \frac{1+\sqrt{5}}{2}
，
x_2 = \frac{1-\sqrt{5}}{2}
$$
设：
$$
F(n)=c_1x_1^n + c_2x_2^n
$$

带入 F(0)=0，F(1)=1，求解得：

$$
c_1 = \frac{1}{\sqrt{5}}
，
c_2=-\frac{1}{\sqrt{5}}
$$

因此，斐波那契通项公式：

$$
F(n) = \frac{1}{\sqrt{5}}[(\frac{1+\sqrt{5})}{2})^n-(\frac{1-\sqrt{5})}{2})^n]
$$

#### 代码示例

> fibonacci-matrix.js

```js
const fibonacci = (n) => Math.round(
  (
    ((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n
  )
    / Math.sqrt(5),
);

```

#### 复杂度分析

Math.sqrt 函数的时空复杂度与 CPU 支持的指令集相关，本文不做详解。
