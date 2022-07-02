import { toString, createFromArray } from '../utils';
import array from './middle-array';

import pointer from './middle-pointer';

const middle = { array, pointer };

Object.keys(middle).forEach((key) => {
  /**
 * Input: head = 1->2->3->4->5
 * Output: head = 3->4->5
 */
  test(`middle ${key}`, () => {
    const list = createFromArray([1, 2, 3, 4, 5]);
    const newList = middle[key](list);
    expect(toString(newList)).toBe('3,4,5');
  });

  /**
 * Input: head = 1->2->3->4
 * Output: head = 3->4->5
 */
  test(`middle ${key}`, () => {
    const list = createFromArray([1, 2, 3, 4]);
    const newList = middle[key](list);
    expect(toString(newList)).toBe('3,4');
  });
});
