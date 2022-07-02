const swap = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = head.next;
  head.next = swap(newHead.next);
  newHead.next = head;
  return newHead;
};

export default swap;
