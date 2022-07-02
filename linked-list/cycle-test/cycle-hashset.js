const cycle = (head) => {
  const hashSet = new Set();
  while (head) {
    if (hashSet.has(head)) return true;
    hashSet.add(head);
    head = head.next;
  }
  return false;
};

export default cycle;
