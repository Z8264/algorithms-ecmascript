const cycle = (head) => {
  if (!head || !head.next) return false;
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};
export default cycle;
