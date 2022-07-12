import TreeNode from '../../utils';
import recursion from '../recursion';
import iteration from '../iteration';

const traversal = { recursion, iteration };

Object.keys(traversal).forEach((key) => {
  test(`Inorder Traversal: ${key}`, () => {
    const tree = new TreeNode('A');
    tree.left = new TreeNode('B');
    tree.right = new TreeNode('C');

    tree.left.left = new TreeNode('D');
    tree.left.right = new TreeNode('E');
    tree.right.left = new TreeNode('F');
    tree.left.left.right = new TreeNode('G');

    expect(traversal[key](tree).join()).toBe('D,G,B,E,A,F,C');
  });

  test(`Null: ${key}`, () => {
    expect(traversal[key](null).join()).toBe('');
  });
});
