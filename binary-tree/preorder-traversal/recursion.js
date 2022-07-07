const inorder = (root, arr = []) => {
  if (root) {
    arr.push(root.val);
    inorder(root.left, arr);
    inorder(root.right, arr);
  }
  return arr;
};
export default inorder;
