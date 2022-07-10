const view = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    let { length } = queue;
    while (length) {
      const node = queue.shift();
      if (length === 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      length -= 1;
    }
  }
  return result;
};

export default view;
