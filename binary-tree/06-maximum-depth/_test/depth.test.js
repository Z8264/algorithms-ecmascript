import TreeNode from '../../utils';
import recursion from '../recursion';
import iteration from '../iteration';

const depth = { recursion, iteration };

Object.keys(depth).forEach((key) => {
  test(`Maximum Depth: ${key}`, () => {
    const tree = new TreeNode('A');
    tree.left = new TreeNode('B');
    tree.right = new TreeNode('C');

    tree.left.left = new TreeNode('D');
    tree.left.right = new TreeNode('E');
    tree.right.left = new TreeNode('F');
    tree.left.left.right = new TreeNode('G');

    expect(depth[key](tree)).toBe(4);
  });

  test(`Null: ${key}`, () => {
    expect(depth[key](null)).toBe(0);
  });
});
