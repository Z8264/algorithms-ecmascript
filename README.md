# Algorithms In EcmaScript

> 打造全网最详细的算法讲解

* 图解原理
* 代码示例
* 算法分析


## 目录

### 排序 (Sorting)

| 名称                                 | En             |
| ---------------------------------------- | ------------------ |
| [冒泡排序](./sorting/bubble-sort)    | Bubble sort    |
| [插入排序](./sorting/insertion-sort) | Insertion sort |
| [选择排序](./sorting/selection-sort) | Selection sort |
| [归并排序](./sorting/merge-sort)     | Merge sort     |
| [快速排序](./sorting/quick-sort)     | Quick sort     |
| [希尔排序](./sorting/shell-sort)     | Shell sort     |
| 堆排序                               | Heap sort      |
| 计数排序                             | Counting sort  |
| 基数排序                             | Radix sort     |

| 名称     | En             | 最优 | 平均       | 最坏     | 内存 | 稳定 |
| ------------ | ------------------ | -------- | -------------- | ------------ | -------- | -------- |
| 冒泡排序 | Bubble sort    | n        | n^2            | n^2          | 1        | Yes      |
| 插入排序 | Insertion sort | n        | n^2            | n^2          | 1        | Yes      |
| 选择排序 | Selection sort | n^2      | n^2            | n^2          | 1        | No       |
| 归并排序 | Merge sort     | n log(n) | n log(n)       | n log(n)     | n        | Yes      |
| 快速排序 | Quick sort     | n log(n) | n log(n)       | n^2          | log(n)   | No       |
| 希尔排序 | Shell sort     | n log(n) | 取决于差距序列 | n (log(n))^2 | 1        | No       |
| 堆排序   | Heap sort      | n log(n) | n log(n)       | n log(n)     | 1        | No       |
| 计数排序 | Counting sort  | n + r    | n + r          | n + r        | n + r    | Yes      |
| 基数排序 | Radix sort     | n * k    | n * k          | n * k        | n + k    | Yes      |

### 数学 (Math)

| 名称                                         | En                  |
| ------------------------------------------------ | ----------------------- |
| [阶乘](./math/factorial)                     | Factorial               |
| [斐波那契数](./math/fibonacci)               | Fibonacci               |
| [素数](./math/primality)                     | Primality               |
| [最大公约数](./math/greatest-common-divisor) | Greatest Common Divisor |
| [最小公倍数](./math/least-common-multiple)   | Least Common Multiple   |
| [幂](./math/power)                           | Power                   |

### 搜索 (Search)

| 名称     | En               |
| ------------ | -------------------- |
| 线性搜索 | Linear Search        |
| 跳转搜索 | Jump Search          |
| 二分查找 | Binary Search        |
| 差值搜索 | Interpolation Search |

### 字符串 (String)

| 名称               | En                      |
| ---------------------- | --------------------------- |
| 回文               | Palindrome                  |
| 汉明距离           | Hamming Distance            |
| 来温斯坦距离       | Levenshtein distance        |
| KMP 算法           | KMP Algorithm               |
| 字符串快速查找算法 | Z Algorithm                 |
| Rabin Karp 算法    | Rabin Karp Algorithm        |
| 最长公共子串       | Longest Common Substring    |
| 正则表达式匹配     | Regular Expression Matching |

### 集合 (Set)

| 名称           | En                             |
| -------------- | ------------------------------ |
| 笛卡尔积       | Cartesian Product              |
| 洗牌算法       | Fisher–Yates Shuffle           |
| 幂集           | Power Set                      |
| 排列           | Permutations                   |
| 组合           | Combinations                   |
| 最长公共子序列 | Longest Common Subsequence     |
| 最长递增子序列 | Longest Increasing Subsequence |
| 最短公共父序列 | Shortest Common Supersequence  |
| 背包问题       | Knapsack Problem               |
| 最大子数列问题 | Maximum Subarray               |
| 组合求和       | Combination Sum                |



## Contribution

If you think that these can be improved in anyway, please do suggest.

- Open pull request with improvements
- Discuss ideas in issues



## License

[![License: CC BY-NC-ND 3.0](https://camo.githubusercontent.com/737aad0c1bf5098da05669813f8cd78959bf684cbee9c91d33fc1e01336a36a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d434325323042592d2d4e432d2d4e44253230332e302d6c69676874677265792e737667)](https://creativecommons.org/licenses/by-nc-nd/3.0/)
