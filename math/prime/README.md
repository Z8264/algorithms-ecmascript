# 素数 （Primality)

一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做素数（Prime)，已称为质数；否则称为合数 (Composite)。

1既不是质数也不是合数。

## 素数检测

### Problem

判断一个自然数是否为素数。

Example:

``` bash
Input: n = 5
Output: true
```

Example:

``` bash
Input: n = 4
Output: false
```

### Solution

试除法 (Trial Division Method)，即对正整数 n，如果用 2 到 $\sqrt{2}$ 之间的所有整数去除，均无法整除，则n为质数。

代码示例：

> is-prime.js

```js
const isPrime = (n) => {
  if (n % 1 !== 0 || n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;

  const max = Math.sqrt(n);
  for (let i = 3; i <= max; i += 2) if (n % i === 0) return false;
  return true;
};
```

## 素数统计

### Problem

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

### Solution

埃拉托斯特尼筛法 (Sieve of Eratosthenes)，要得到自然数n以内的全部素数，须把小于等于  $\sqrt{2}$ 的所有素数的倍数剔除，剩下的就是素数。

代码示例：

> count-primes.js

```js
const countPrimes = (n) => {
  let count = 0;
  const signs = new Uint8Array(n);

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
