# 线性搜索 (Linear Search)



线性搜索 (Linear Search)，按照顺序，逐个搜索。



## 图解原理





## 代码示例



问题描述：

Example

``` bash
Input: arr = 5 , target = 
Output: 120
Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120
```

## 

代码示例：

> linear-search.js

```js
const search = (arr, target) => {
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