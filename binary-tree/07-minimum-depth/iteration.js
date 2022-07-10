const minimum = (root) => {
  if (!root) return 0;
  const queue = [root];
  let level = 1;
  while (queue.length) {
    let { length } = queue;
    while (length) {
      const node = queue.shift();
      if (!node.left && !node.right) return level;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      length -= 1;
    }
    level += 1;
  }
  return level;
};

export default minimum;
