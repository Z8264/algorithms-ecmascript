# 3 的幂 Power Of Three

## Problem

判断整数 `n` 是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

即：

$$
n = 3^x ，x为正整数
$$

Example:

``` bash
Input: n = 1
Output: true
Explanation: 3^0 = 1
```

Example:

``` bash
Input: n = 9
Output: true
Explanation: 3^2 = 9
```

Example:

``` bash
Input: n = 5
Output: false
```

## Solution

| 编号 | 解法     | Approach                  |
| ---- | -------- | ------------------- |
| 1    | 循环迭代 | Loop Iteration      |
| 2    | 基准转换 | Base Conversion     |
| 3    | 数学运算 | Mathematics         |
| 4    | 整数限制 | Integer Limitations |

### 1. 循环迭代 (Loop Iteration)

#### 代码示例

> iteration.js

``` js
const isPowerOfThree = (n) => {
  if (n < 1) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};
```

### 2. 基准转换 (Base Conversion)

#### 代码示例

> base-conversion.js

``` js
const isPowerOfThree = (n) => /^10*$/.test(n.toString(3));
```

### 3. 数学运算 (Mathematics)

#### 代码示例

> mathematics.js

```js
const isPowerOfThree = (n) => (Math.log10(n) / Math.log10(3)) % 1 === 0;
```

### 4. 整数限制 (Integer Limitations)

#### 代码示例

> integer-limitations.js

```js
const isPowerOfThree = (n) => n > 0 && 1162261467 % n === 0;
```
