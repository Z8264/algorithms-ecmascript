import { toString, createFromArray } from '../utils';
import recursion from './swap-recursion';
import iterative from './swap-iterative';

const swap = { recursion, iterative };
Object.keys(swap).forEach((key) => {
/**
 * Input: head = 1->2->3->4
 * Output: head = 2->1->4->3
 */
  test(`swap ${key}`, () => {
    const list = createFromArray([1, 2, 3, 4]);
    const newList = swap[key](list);
    expect(toString(newList)).toBe('2,1,4,3');
  });

  /**
 * Input: head = 1->2->3
 * Output: head = 2->1->3
 */
  test(`swap ${key}`, () => {
    const list = createFromArray([1, 2, 3]);
    const newList = swap[key](list);
    expect(toString(newList)).toBe('2,1,3');
  });
  /**
 * Input: head = null
 * Output: head = null
 */
  test(`swap ${key}`, () => {
    const list = createFromArray([]);
    const newList = swap[key](list);
    expect(toString(newList)).toBe('');
  });
});
