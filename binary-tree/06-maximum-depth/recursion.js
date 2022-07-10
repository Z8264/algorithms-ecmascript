const maximum = (root) => (root ? (Math.max(maximum(root.left), maximum(root.right)) + 1) : 0);
export default maximum;
