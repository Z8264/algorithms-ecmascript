# 反转 Reverse

## Problem

反转链表，并返回反转后的链表。

> Return the reversed list.

Example:

```
Input: head = 1->2->3->4->5
Output: head = 5->4->3->2->1
```

## Solution

| 编号 | 解法 | Approach  |
| ---- | ---- | --------- |
| 1    | 递归 | Recursion |
| 2    | 迭代 | Iterative |

### 1. 递归 (Recursion)

#### 代码示例

> reverse-recursion.js

``` javascript
const reverse = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

- 时间复杂度：O(n)，n 为链表的长度。需要操作每个结点。

- 空间复杂度：O(n)，n 为链表的长度。递归调用的栈空间最多为 n 层。

### 2. 迭代 (Iterative)

#### 代码示例

> reverse-iterative.js

``` javascript
const reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    const { next } = curr;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

- 时间复杂度：O(n)，n 为链表的长度，仅需遍历一次。
- 空间复杂度：O(1)，只需要常数空间存放 `prev` 和 `curr` 两个指针。
