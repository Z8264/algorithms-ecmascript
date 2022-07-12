# 前序遍历 Preorder Traversal





<img src="../../_imgs/BT-Preorder.png" width="414"/>



## Problem

返回二叉树的前序遍历。

> Given the `root` of a binary tree, return *the preorder traversal of its nodes' values*.

Example:

``` bash
Input: root = [A,[B,C],[D,E,F,null],[null,G]]
Output: [A,B,D,G,E,C,F]
```

Example:

``` bash
Input: root = []
Output: []
```



## Solution



| 编号 | 解法       | Approach  |
| ---- | ---------- | --------- |
| 1    | 递归       | Recursion |
| 2    | 迭代       | Iteration |
| 3    | 莫里斯遍历 | Morris    |



### 1. 递归 Recursion

#### 图解流程

<img src="../../_imgs/BT-Preorder-Recursion.png" width="971"/>

#### 代码示例

> recursion.js

``` js
const preorder = (root, arr = []) => {
  if (root) {
    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);
  }
  return arr;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

### 2. 迭代 Iteration

#### 图解流程

<img src="../../_imgs/BT-Preorder-Iteration.png" width="971"/>

#### 代码示例

> iteration.js

``` js
const preorder = (root) => {
  const result = [];

  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      result.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }

  return result;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

### 3. 莫里斯遍历 Morris

#### 代码示例

``` js

```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

### 