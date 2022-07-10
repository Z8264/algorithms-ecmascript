import { TreeNode } from '../../utils';
import recursion from '../recursion';
import iteration from '../iteration';

const maximum = { recursion, iteration };

Object.keys(maximum).forEach((key) => {
  test(`Preorder Traversal: ${key}`, () => {
    const tree = new TreeNode('A');
    tree.left = new TreeNode('B');
    tree.right = new TreeNode('C');

    tree.left.left = new TreeNode('D');
    tree.left.right = new TreeNode('E');
    tree.right.left = new TreeNode('F');
    tree.left.left.right = new TreeNode('G');

    expect(maximum[key](tree)).toBe(4);
  });
});
