const cycle = (head) => {
  if (!head || !head.next) return null;
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  if (slow !== fast) return null;

  let current = head;
  while (current !== slow) {
    current = current.next;
    slow = slow.next;
  }
  return current;
};

export default cycle;
