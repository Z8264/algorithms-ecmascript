# 希尔排序 (Shell Sort)

希尔排序 (Shell Sort)，。



### 代码示例

> shell-sort/index.js

``` js
function sort(arr = []) {
  const a = [...arr];

  let gap = Math.floor(a.length / 2);

  while (gap > 0) {
    for (let i = 0; i < a.length - gap; i += 1) {
      let currentIndex = i;
      let gapIndex = i + gap;

      while (currentIndex >= 0) {
        if (a[gapIndex] < a[currentIndex]) {
          [a[gapIndex], a[currentIndex]] = [a[currentIndex], a[gapIndex]];
        }
        [currentIndex, gapIndex] = [currentIndex - gap, currentIndex];
      }
    }

    gap = Math.floor(gap / 2);
  }
  return a;
}
```

### 复杂的分析

| 名称     | En         | 最优     | 平均           | 最坏         | 内存 | 稳定 |
| -------- | ---------- | -------- | -------------- | ------------ | ---- | ---- |
| 希尔排序 | Shell sort | n log(n) | 取决于差距序列 | n (log(n))^2 | 1    |      |



#### 时间复杂度 (Time Complexity)

#### 空间复杂度 (Space Complexity)

#### 稳定性 (Stable)
