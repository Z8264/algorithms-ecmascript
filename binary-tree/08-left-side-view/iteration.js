const view = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    let { length } = queue;
    let first = true;
    while (length) {
      const node = queue.shift();
      if (first) {
        result.push(node.val);
        first = false;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      length -= 1;
    }
  }
  return result;
};

export default view;
