# 插值搜索 (Interpolation Search)

插值搜索 (Interpolation Search)，是二分查找的优化方案，通过判定大概位于序列的位置比例，来选取中间值位置。

算法要求：

1. 顺序存储结构。

2. 关键字大小有序排列。

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

> interpolation-search.js

```js
const search = (arr = [], target = null) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const range = arr[end] - arr[start];
    const value = target - arr[start];

    if (value < 0) return -1;
    if (!range) return arr[start] === target ? start : -1;

    const mid = start + Math.floor((value * (end - start)) / range);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};
```

复杂度分析：

| 时间复杂度   | 空间复杂度 |
| ------------ | ---------- |
| O(log(logn)) | O(1)       |