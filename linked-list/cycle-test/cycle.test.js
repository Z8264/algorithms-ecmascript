import { createFromArray } from '../utils';
import hashset from './cycle-hashset';
import pointer from './cycle-pointer';

const cycle = { hashset, pointer };

Object.keys(cycle).forEach((key) => {
  /**
 * Tail connects to the second node.
 * Input: head = 1->2->3->4  4->2
 * Output: true
 */
  test(`cycle ${key}`, () => {
    const list = createFromArray([1, 2, 3, 4]);
    list.next.next.next.next = list.next;
    expect(cycle[key](list)).toBe(true);
  });

  /**
 * no cycle
 * Input: head = 1->2
 * Output: false
 */
  test(`no cycle ${key}`, () => {
    const list = createFromArray([1, 2]);
    expect(cycle[key](list)).toBe(false);
  });

  /**
 * no cycle
 * Input: head = 1
 * Output: false
 */
  test(`no cycle ${key}`, () => {
    const list = createFromArray([1]);
    expect(cycle[key](list)).toBe(false);
  });
});
