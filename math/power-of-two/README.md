# 2 的幂 Power Of Two

## Problem

判断整数 `n` 是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

即：

$$
n = 2^x ，x为正整数
$$

Example:

``` bash
Input: n = 1
Output: true
Explanation: 2^0 = 1
```

Example:

``` bash
Input: n = 16
Output: true
Explanation: 2^4 = 16
```

Example:

``` bash
Input: n = 3
Output: false
```

## Solution

| 编号 | 解法     | Approach               |
| ---- | -------- | ---------------- |
| 1    | 循环迭代 | Loop Iteration   |
| 2    | 基准转换 | Base Conversion  |
| 3    | 位运算   | Bitwise Solution |

### 1. 循环迭代 (Loop Iteration)

#### 代码示例

> iteration.js

``` js
const isPowerOfTwo = (n) => {
  if (n < 1) return false;
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};
```

### 2. 基准转换 (Base Conversion)

#### 代码示例

> base-conversion.js

``` js
const isPowerOfTwo = (n) => /^10*$/.test(n.toString(2));
```

### 3. 位运算 (Bitwise Solution)

#### 代码示例

> bitwise.js

```js
const isPowerOfTwo = (n) => n > 0 && (n & (n - 1)) === 0;
```
