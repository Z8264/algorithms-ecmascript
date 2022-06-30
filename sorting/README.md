# 排序 Sorting

排序算法汇总：

| 名称     | En             | 最优     | 平均           | 最坏         | 内存   | 稳定 |
| -------- | -------------- | -------- | -------------- | ------------ | ------ | ---- |
| 冒泡排序 | Bubble sort    | n        | n^2            | n^2          | 1      | Yes  |
| 插入排序 | Insertion sort | n        | n^2            | n^2          | 1      | Yes  |
| 选择排序 | Selection sort | n^2      | n^2            | n^2          | 1      | No   |
| 归并排序 | Merge sort     | n log(n) | n log(n)       | n log(n)     | n      | Yes  |
| 快速排序 | Quick sort     | n log(n) | n log(n)       | n^2          | log(n) | No   |
| 希尔排序 | Shell sort     | n log(n) | 取决于差距序列 | n (log(n))^2 | 1      | No   |
| 堆排序   | Heap sort      | n log(n) | n log(n)       | n log(n)     | 1      | No   |
| 计数排序 | Counting sort  | n + r    | n + r          | n + r        | n + r  | Yes  |
| 基数排序 | Radix sort     | n * k    | n * k          | n * k        | n + k  | Yes  |
