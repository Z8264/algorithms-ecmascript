## 素数检测 Primality Test

#### 素数 (Prime)

一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做素数（Prime)，已称为质数；否则称为合数 (Composite)。

1既不是质数也不是合数。

#### 检测方法

**试除法 (Trial Division Method)**，即对正整数 n，如果用 2 到 $\sqrt{2}$ 之间的所有整数去除，均无法整除，则n为质数。

## Problem

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

## Solution

### 1. 试除法 (Trial Division Method)

#### 代码示例

> primality-test.js

```js
const primality = (n) => {
  if (n % 1 !== 0 || n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;

  const max = Math.sqrt(n);
  for (let i = 3; i <= max; i += 2) if (n % i === 0) return false;
  return true;
};
```
