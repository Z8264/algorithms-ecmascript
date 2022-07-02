const reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    const { next } = curr;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

export default reverse;
