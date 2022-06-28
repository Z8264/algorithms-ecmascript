# 快速排序 (Quick Sort)

快速排序 (Quick Sort)，是一种分而治之的算法。快速排序首先将一个大数组分成两个较小的子数组：比某个数小的元素和比某个数大的元素。然后快速排序可以递归地对子数组进行排序。

步骤是：

从数组中选择一个元素，称为基点

分区：对数组重新排序，使所有值小于基点的元素都在它左边，而所有值大于基点的元素都在它右边（相等的值可以放在任何一边）。在此分区之后，基点处于其最终位置（左边和右边的中间位置）。这称为分区操作。

递归地将上述步骤应用于左边的数组和右边的数组。



### 代码示例

> quick-sort/index.js

``` js
function sort(arr = []) {
  const a = [...arr];

  if (a.length <= 1) return a;

  const left = [];
  const right = [];
  const center = [];

  const centerNumber = a.shift();
  center.push(centerNumber);

  while (a.length) {
    const current = a.shift();
    if (current < centerNumber) {
      left.push(current);
    } else if (current > centerNumber) {
      right.push(current);
    } else {
      center.push(centerNumber);
    }
  }

  return sort(left).concat(center, sort(right));
}
```

### 复杂的分析

| 名称     | En         | 最优     | 平均     | 最坏 | 内存   | 稳定 |
| -------- | ---------- | -------- | -------- | ---- | ------ | ---- |
| 快速排序 | Quick sort | n log(n) | n log(n) | n^2  | log(n) | No   |

#### 

#### 时间复杂度 (Time Complexity)

#### 空间复杂度 (Space Complexity)

#### 稳定性 (Stable)
