# 插入排序 (Insertion Sort)

插入排序，每次将一个待排序的元素，按升序或降序插入前面已经排序的元素中，直到全部插入完为止。

## 图解

![Insertion Sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## 代码

Example：

``` bash
Input: [2,3,1,4]
Output: [1,2,3,4]
```

Solution：

> insertion-sort/index.js

 ```js
function sort(arr = []) {
  const a = [...arr];
  for (let i = 1; i < a.length; i += 1) {
    for (let j = i; j > 0 && a[j] < a[j - 1]; j -= 1) {
      [a[j], a[j - 1]] = [a[j - 1], a[j]];
    }
  }
  return a;
}
 ```

## 时间复杂度 (Time Complexity)

使用 $C$ 表示比较次数，$M$ 表示移动次数

最好情况下：

$$
C_{min}=n-1
$$

$$
M_{min}=0
$$

此时时间复杂度为 $O(n)$。

最坏情况下 ：

$$
C_{max}=\frac{n(n-1)}{2}=O(n^2)
$$

$$
M_{max}=\frac{n(n-1)}{2}+(n-1)=O(n^2)
$$

此时时间复杂度为 $O(n^2)$。

平均时间复杂度为 $O(n^2)$。

## 空间复杂度 (Space Complexity)

O(1)

### 稳定性 (Stable)

对于相同的元素，后面的元素不会插入到前面的元素前面，所以，插入排序是稳定排序。
