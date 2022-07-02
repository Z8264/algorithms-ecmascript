# 阶乘 (Factorial)

一个正整数的**阶乘**（**factorial**）是所有小于及等于该数的正整数的积，并且 0 的阶乘为 1。n 的阶乘写作 `n!`。数学公式如下：

$$
0! = 1 , n != 1 * 2 * 3 * ... * ( n - 1 ) * n
$$

| n    | n!                |
| ---- | ----------------- |
| 0    | 1                 |
| 1    | 1                 |
| 2    | 2                 |
| 3    | 6                 |
| 4    | 24                |
| 5    | 120               |
| 6    | 720               |
| 7    | 5 040             |
| 8    | 40 320            |
| 9    | 362 880           |
| 10   | 3 628 800         |
| 11   | 39 916 800        |
| 12   | 479 001 600       |
| 13   | 6 227 020 800     |
| 14   | 87 178 291 200    |
| 15   | 1 307 674 368 000 |

## Problem

给定正整数 `n`，计算 `n!` 。

Example:

``` bash
Input: n = 5
Output: 120
Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120
```

## Solution

| 编号 | 解法             | Approach                          |
| ---- | ---------------- | --------------------------- |
| 1    | 递归             | Recursion                   |
| 2    | 自底向上进行迭代 | Iterative Top-Down Approach |

### 1. 递归 (Recursion)

#### 代码示例

> factorial-recursive.js

```js
const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

### 2. 自底向上进行迭代 (Iterative Top-Down Approach)

#### 代码示例

> factorial-iterative.js

```js
const factorial = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i += 1) {
    res *= i;
  }
  return res;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |
