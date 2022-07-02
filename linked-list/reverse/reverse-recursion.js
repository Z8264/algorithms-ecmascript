const reverse = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

export default reverse;
