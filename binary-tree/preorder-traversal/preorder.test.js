import { TreeNode } from '../utils';
import recursion from './recursion';

test('Preorder Traversal:', () => {
  const tree = new TreeNode(1);
  tree.right = new TreeNode(2);
  tree.right.left = new TreeNode(3);

  expect(recursion(tree).join()).toBe('1,2,3');
});
