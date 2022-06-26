# 最大公约数 (Greatest Common Divisor)

**最大公约数 (Greatest Common Divisor, 缩写 GCD)** 是指两个或多个整数共有约数中最大的一个。a 和 b 的最大公约数记为`(a, b)`。

**欧几里得算法 (Euclidean Algorithm)**，也称为**辗转相除法**。

该方法依赖定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数。公式如下：

$$
gcd(a,b) = gcd(b,a\ mod\ b)
$$

举例，求 ( 319, 377 )

∵ 319 ÷ 377 = 0, 余 319

∴ ( 319, 377 ) = ( 377，319 )

∵ 377 ÷ 319 = 1, 余 58

∴ ( 377, 319 ) = ( 319, 58 )；

∵ 319 ÷ 58 = 5, 余 29

∴ ( 319, 58 ) = ( 58, 29 )；

∵ 58 ÷ 29 = 2, 余 0

∴ ( 58, 29 ) = 29

∴ ( 319, 377 ) = 29

## Problem

计算给定两个自然数a 和 b 的最大公约数。

Example:

``` bash
Input: a = 2, b = 0
Output: 2
```

Example:

``` bash
Input: a = 24, b = 60
Output: 12
```

Example:

``` bash
Input: a = 462, b = -1071
Output: 21
```

## Solution

| 编号 | 解法 | En                  |
| ---- | ---- | ------------------- |
| 1    | 递归 | Euclidean Recursion |
| 2    | 迭代 | Euclidean Iterative |

### 1. 递归 (Euclidean Recursion)

#### 代码示例

> gcd-euclidean-recursive.js

```js
const mod = (max, min) => (min === 0 ? max : mod(min, max % min));

const gcd = (a, b) => {
  const max = Math.max(Math.abs(a), Math.abs(b));
  const min = Math.min(Math.abs(a), Math.abs(b));

  return mod(max, min);
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

### 2. 迭代 (Euclidean Iterative)

#### 代码示例

> gcd-euclidean-iterative.js

```js
const gcd = (a, b) => {
  let max = Math.max(Math.abs(a), Math.abs(b));
  let min = Math.min(Math.abs(a), Math.abs(b));

  while (min !== 0) {
    [max, min] = [min, max % min];
  }

  return max;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |
