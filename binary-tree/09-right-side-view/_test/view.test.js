import { TreeNode } from '../../utils';
// import recursion from '../recursion';
import iteration from '../iteration';

const view = { iteration };

Object.keys(view).forEach((key) => {
  test(`Preorder Traversal: ${key}`, () => {
    const tree = new TreeNode('A');
    tree.left = new TreeNode('B');
    tree.right = new TreeNode('C');

    tree.left.left = new TreeNode('D');
    tree.left.right = new TreeNode('E');
    tree.right.left = new TreeNode('F');
    tree.left.left.right = new TreeNode('G');

    expect(view[key](tree).join(',')).toBe('A,C,F,G');
  });
});
