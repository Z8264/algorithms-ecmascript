# 环检测 Cycle Test

## Problem

判断链表中是否有环。

> Determine if the linked list has a cycle in it.

Example: Tail connects to the second node.

``` bash
Input: head = 1->2->3->4, [4->2]
Output: true
```

Example: No cycle

``` bash
Input: head = 1->2
Output: false
```

Example: No cycle

``` bash
Input: head = 1
Output: false
```

## Solution

| 编号 | 解法       | Approach              |
| ---- | ---------- | --------------------- |
| 1    | 哈希表     | HashSet               |
| 2    | 快慢指针法 | Fast and Slow Pointer |

### 1. 哈希表 (HashSet)

#### 代码示例

> cycle-hashset.js

``` javascript
const cycle = (head) => {
  const hashSet = new Set();
  while (head) {
    if (hashSet.has(head)) return true;
    hashSet.add(head);
    head = head.next;
  }
  return false;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

- 时间复杂度：O(n)，n 为链表的长度。最坏情况下，需要访问链表中的每一个结点。
- 空间复杂度：O(n)，n 为链表的长度。最坏情况下，需要将链表中的每个结点都保存在哈希表当中。

### 2. 快慢指针法 (Fast and Slow Pointer)

#### 代码示例

> cycle-pointer.js

``` javascript
const cycle = (head) => {
  if (!head || !head.next) return null;
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  
  return false;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

复杂度分析

- 时间复杂度：O(n)，n 为链表的长度。
- 空间复杂度：O(1)。只需要常数空间存放 `slow` 、 `fast` 指针。
