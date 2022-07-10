import { TreeNode } from '../../utils';
import recursion from '../recursion';
import iteration from '../iteration';

const preorder = { recursion, iteration };

Object.keys(preorder).forEach((key) => {
  test(`Preorder Traversal: ${key}`, () => {
    const tree = new TreeNode('A');
    tree.left = new TreeNode('B');
    tree.right = new TreeNode('C');

    tree.left.left = new TreeNode('D');
    tree.left.right = new TreeNode('E');
    tree.right.left = new TreeNode('F');
    tree.left.left.right = new TreeNode('G');

    expect(preorder[key](tree).join()).toBe('D,G,B,E,A,F,C');
  });
});