# 移除 Remove

## Problem

删除链表的倒数第 `n` 个结点，并返回该链表。

> Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example:

```
Input: head = 1->2->3->4->5, n = 2
Output: head = 1->2->3->5
```

## Solution

| 编号 | 解法   | Approach     |
| ---- | ------ | ------------ |
| 1    | 双指针 | Two Pointers |

### 1. 双指针 (Two Pointers)

#### 代码示例

> remove.js

``` javascript
const remove = (head, n) => {
  let [slow, fast] = [head, head];
  let i = 0;
  while (fast && i < n) {
    fast = fast.next;
    i += 1;
  }

  if (!fast) return head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

- 时间复杂度：O(n)，n 为链表的长度。
- 空间复杂度：O(1)。
