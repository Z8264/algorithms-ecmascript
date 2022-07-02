import { toString, createFromArray } from '../utils';
import recursion from './reverse-recursion';

import iterative from './reverse-iterative';

const reverse = { recursion, iterative };
Object.keys(reverse).forEach((key) => {
/**
 * Input: head = 1->2->3->4->5
 * Output: head = 5->4->3->2->1
 */
  test('reverse', () => {
    const list = createFromArray([1, 2, 3, 4, 5]);
    const newList = reverse[key](list, 2, 4);
    expect(toString(newList)).toBe('5,4,3,2,1');
  });

  /**
 * Input: head = null
 * Output: head = null
 */
  test('reverse null', () => {
    const list = null;
    const newList = reverse[key](list);
    expect(toString(newList)).toBe('');
  });
});
