import TreeNode from '../../utils';

import invert from '../invert';

test('invert', () => {
  const tree = new TreeNode('A');
  tree.left = new TreeNode('B');
  tree.right = new TreeNode('C');

  tree.left.left = new TreeNode('D');
  tree.left.right = new TreeNode('E');
  tree.right.left = new TreeNode('F');
  tree.left.left.right = new TreeNode('G');

  const newTree = invert(tree);

  expect(newTree.val).toBe('A');
  expect(newTree.left.val).toBe('C');
  expect(newTree.right.val).toBe('B');

  expect(newTree.right.right.val).toBe('D');
  expect(newTree.right.left.val).toBe('E');

  expect(newTree.left.right.val).toBe('F');
  expect(newTree.right.right.left.val).toBe('G');
});

test('invert null', () => {
  expect(invert(null)).toBe(null);
});
