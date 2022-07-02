# 反转 Reverse Part

## Problem

反转从位置 `m` 到位置 `n` 的链表节点。

> Reverse a linked list from position m to n.

Example:

```
Input: head = 1->2->3->4->5
Output: head = 5->4->3->2->1
```

Example:

```
Input: head = null
Output: head = null
```

## Solution

| 编号 | 解法       | Approach                    |
| ---- | ---------- | --------------------- |
| 1    | 迭代链接逆转 | Iterative Link Reversal |

### 1. 迭代链接逆转 (Iterative Link Reversal)

#### 代码示例

> reverse.js

``` javascript
const reverse = (head, m = 0, n = 0) => {
  if (!head) return null;

  let [current, prev, next] = [head, null];

  let i = 1;
  while (i < m) {
    prev = current;
    current = current.next;
    i += 1;
  }

  const [con, tail] = [prev, current];

  while (i <= n && current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i += 1;
  }

  if (con) {
    con.next = prev;
  } else {
    head = prev;
  }

  tail.next = current;
  return head;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

- 时间复杂度：O(n)，n 为链表的长度。最坏情况下，需要遍历整个链表。
- 空间复杂度：O(1)。
