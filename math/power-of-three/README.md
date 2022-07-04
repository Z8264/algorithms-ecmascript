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

循环除3，若出现余数不为0的情况表明带判断数字非3的n次方

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

利用toString提供的进制转换，将待判断数转化为3进制字符串，之后通过正则表达式进行判断，如果带判断数字为3的幂，那么它的三进制形式一定为 10...0

#### 代码示例

> base-conversion.js

``` js
const isPowerOfThree = (n) => /^10*$/.test(n.toString(3));
```

### 3. 数学运算 (Mathematics)
根据换底公式 loga(b) = logc(b) / logc(a) 推导可知：

log3(n) = log10(n) / log10(3)

因此，若n为3的幂，log3(n) 一定为整数

那么此时 log10(n) / log10(3) 一定为整数，我们通过判断这个值即可判断的带判断数是否为3的幂
#### 代码示例

> mathematics.js

```js
const isPowerOfThree = (n) => (Math.log10(n) / Math.log10(3)) % 1 === 0;
```

### 4. 整数限制 (Integer Limitations)

已知int类型范围内最大3的幂次方结果为 3^19 = 1162261467，所以只需要判断待判断数字能否被这个数整除即可：
#### 代码示例

> integer-limitations.js

```js
const isPowerOfThree = (n) => n > 0 && 1162261467 % n === 0;
```
