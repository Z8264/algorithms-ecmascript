# 素数统计 （Prime)

埃拉托斯特尼筛法 (Sieve of Eratosthenes)，要得到自然数n以内的全部素数，须把小于等于  $\sqrt{2}$ 的所有素数的倍数剔除，剩下的就是素数。

## Problem

给定一个自然数n，统计 0 到 n 之间素数的个数。

Example:

``` bash
Input: n = 10
Output: 4
```

Example:

``` 3bash
Input: n = 72
Output: 20
```

## Solution

### 1. 埃拉托斯特尼筛法 (Sieve of Eratosthenes)

#### 代码示例

> primes-count.js

```js
const primes = (n) => {
  let count = 0;
  const signs = [];

  for (let i = 2; i < n; i += 1) {
    if (!signs[i - 1]) {
      count += 1;

      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true;
      }
    }
  }
  return count;
};
```
