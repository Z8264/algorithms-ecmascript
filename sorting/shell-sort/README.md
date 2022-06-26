# 快速排序 (Shell Sort)

Shellsort, also known as Shell sort or Shell's method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange

## 图解

![Shell Sort](https://camo.githubusercontent.com/bbab9f6cefd49c82b7834f729532568f9464e4789972316d801400d25ffd79c2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64382f536f7274696e675f7368656c6c736f72745f616e696d2e676966)

## 代码

Example：

``` bash
Input: [2,3,1,4]
Output: [1,2,3,4]
```

Solution：

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

## 时间复杂度 (Time Complexity)

## 空间复杂度 (Space Complexity)

## 稳定性 (Stability)
