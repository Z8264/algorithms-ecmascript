# 交换 Swap

## Problem

给你一个链表，两两交换其中相邻的结点，并返回交换后链表的头结点。你必须在不修改结点内部的值的情况下完成本题（即，只能进行结点交换）。

> Given a linked list, swap every two adjacent nodes and return its head.

Example:

```
Input: head = 1->2->3->4
Output: head = 2->1->4->3
```

Example:

```
Input: head = 1->2->3
Output: head = 2->1->3
```

## Solution

| 编号 | 解法 | Approach  |
| ---- | ---- | --------- |
| 1    | 递归 | Recursion |
| 2    | 迭代 | Iterative |

### 1. 递归 (Recursion)

#### 代码示例

> swap-recursion.js

``` javascript
const swap = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = head.next;
  head.next = swap(newHead.next);
  newHead.next = head;
  return newHead;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

- 时间复杂度：O(n)，n 为链表的长度。需要操作每个结点。
- 空间复杂度：O(n)，n 为链表的结点数量。递归调用的栈空间最多为 n 层。

### 2. 迭代 (Iterative)

#### 代码示例

> swap-iterative.js

``` javascript
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const swap = (head) => {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    [node1.next, node2.next] = [node2.next, node1];
    temp = node1;
  }
  return dummyHead.next;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

- 时间复杂度：O(n)，n 为链表的长度。需要操作每个结点。
- 空间复杂度：O(1) 。
