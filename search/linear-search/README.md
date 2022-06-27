# 线性搜索 (Linear Search)



线性搜索 (Linear Search)，按照顺序，逐个搜索。



## 图解原理





## 代码示例



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