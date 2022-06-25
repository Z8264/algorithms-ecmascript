# Algorithms In EcmaScript

## 排序 (Sorting)

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

## 数学 (Math)

| 名称                                         | En                  |
| ------------------------------------------------ | ----------------------- |
| [阶乘](./math/factorial)                     | Factorial               |
| [斐波那契数](./math/fibonacci)               | Fibonacci               |
| [素数](./math/primality)                     | Primality               |
| [最大公约数](./math/greatest-common-divisor) | Greatest Common Divisor |
| [最小公倍数](./math/least-common-multiple)   | Least Common Multiple   |
| [幂](./math/power)                           | Power                   |

## 搜索 (Search)

| 名称     | En               |
| ------------ | -------------------- |
| 线性搜索 | Linear Search        |
| 跳转搜索 | Jump Search          |
| 二分查找 | Binary Search        |
| 差值搜索 | Interpolation Search |

## 字符串 (String)

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
