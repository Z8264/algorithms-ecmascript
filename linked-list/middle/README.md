# 中间 Middle

链表的中间节点。

> The Middle Node of the Linked List。

## Problem

头结点为 `head` 的非空单链表，返回该链表的中间结点。如果有两个中间结点，则返回第二个中间结点。

> Given a non-empty, singly linked list with head node head, return a middle node of linked list.If there are two middle nodes, return the second middle node.

Example:

``` bash
Input: head = 1->2->3->4->5
Output: head = 3->4->5
```

Example:

``` bash
Input: head = 1->2->3->4
Output: head = 3->4
```

## Solution

| 编号 | 解法       | Approach                    |
| ---- | ---------- | --------------------- |
| 1    | 数组存储 | Output to Array |
| 2    | 快慢指针法 | Fast and Slow Pointer |


### 1. 数组存储 (Output to Array)

#### 代码示例

> middle-array.js

``` javascript
const middle = (head) => {
  const arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  return arr[Math.floor((arr.length) / 2)];
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(n)       |

- 时间复杂度：O(n)，n 为给定链表中的结点数目。
- 空间复杂度：O(n)，即数组的空间。

### 2. 快慢指针法 (Fast and Slow Pointer)

#### 代码示例

> middle-pointer.js

``` javascript
const middle = (head) => {
  let [slow, fast] = [head, head];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
```

#### 复杂度分析

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n)       | O(1)       |

- 时间复杂度：O(n)， n 为是给定链表的结点数目。
- 空间复杂度：O(1)，只需要常数空间存放 `slow` 和 `fast` 两个指针。