# 二分查找 (Binary Search)



二分查找 (Binary Search)。



## 图解原理





## 代码示例





代码示例：

> binary-search.js

```js
const search = (arr = [], target = null) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};
```

复杂度分析：

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(logn)    | O(1)       |