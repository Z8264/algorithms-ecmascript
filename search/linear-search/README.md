# 线性搜索 (Linear Search)

线性搜索 (Linear Search)，即按照数据的先后顺序，逐个搜索。

## Problem

在数组 `arr` 中查找目标值 `target`，并返回位置索引。

Example:

``` bash
Input: arr = [1,2,3,4] , target = 3
Output: 2
```

Example:

``` bash
Input: arr = [1,2,3,4] , target = 100
Output: -1
```

## Solution 

代码示例：

> linear-search.js

```js
const search = (arr = [], target = null) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === target) return i;
  }
  return -1;
};
```

复杂度分析：

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

