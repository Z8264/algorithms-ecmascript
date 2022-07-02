# 最小公倍数 (Least Common multiple)

两个或多个整数公有的倍数叫做公倍数，其中除 0 以外最小的一个公倍数就叫做这几个整数的最小公倍数。整数 a，b 的最小公倍数记为 `[a，b]`。

由于两个数的乘积等于这两个数的最大公约数与最小公倍数的积。

$$
（a, b）× [a, b] = a * b
$$

所以，求两个数的最小公倍数，就可以先求出它们的最大公约数，然后用上述公式求出它们的最小公倍数。

## Problem

计算给定两个自然数 a 和 b 的最小公倍数。

Example:

``` bash
Input: a = 1, b = 0
Output: 0
```

Example:

``` bash
Input: a = 4, b = 6
Output: 12
```

Example:

``` bash
Input: a = -9, b = -18
Output: 18
```

## Solution

### 公式推导 (Formula Derivation)

#### 代码示例

> lcm.js

```js
// GCD 参考最大公约数的实现
const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
};
```

#### 复杂度分析

参考最大公约数实现。
