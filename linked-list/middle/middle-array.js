const middle = (head) => {
  const arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  return arr[Math.floor((arr.length) / 2)];
};

export default middle;
