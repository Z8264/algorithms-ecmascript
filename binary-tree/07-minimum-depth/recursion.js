const minimum = (root, min = Infinity) => {
  if (!root) return 0;
  if (!root.left || !root.right) return 1;
  if (root.left) {
    min = Math.min(minimum(root.left), min) + 1;
  }
  if (root.right) {
    min = Math.min(minimum(root.right), min) + 1;
  }
  return min + 1;
};
export default minimum;
