# 反转 Invert



## Problem

给定一个二叉树，返回它的最小深度。

> Invert a binary tree.

Example:

``` bash
Input: root = [A,[B,C],[D,E,F,null],[null,G]]
Output: 3
```

Example:

``` bash
Input: root = []
Output: []
```



## Solution

| 编号 | 解法 | Approach  |
| ---- | ---- | --------- |
| 1    | 递归 | Recursion |
| 2    | 迭代 | Iteration |

### 1. 递归 Recursion

#### 图解流程

[暂无]

#### 代码示例

> recursion.js

``` js
const invert = (root) => {
  if (!root) return null;
  const left = invert(root.left);
  const right = invert(root.right);
  root.left = right;
  root.right = left;
  return root;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

### 2. 迭代 Iteration

#### 图解流程

[暂无]

#### 代码示例

> iteration.js

``` js

```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |



