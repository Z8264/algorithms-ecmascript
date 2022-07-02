const cycle = (head) => {
  const hashSet = new Set();
  while (head) {
    if (hashSet.has(head)) return head;
    hashSet.add(head);
    head = head.next;
  }
  return null;
};

export default cycle;
