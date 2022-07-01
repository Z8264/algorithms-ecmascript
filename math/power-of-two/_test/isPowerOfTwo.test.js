import iterative from '../iterative';
import bitwise from '../bitwise';
import conversion from '../base-conversion';

const isPowerOfTwo = { iterative, bitwise, conversion };
Object.keys(isPowerOfTwo).forEach((key) => {
  test(`isPowerOfTwo By ${key}`, () => {
    expect(isPowerOfTwo[key](-1)).toBe(false);
    expect(isPowerOfTwo[key](0)).toBe(false);
    expect(isPowerOfTwo[key](1)).toBe(true);
    expect(isPowerOfTwo[key](2)).toBe(true);
    expect(isPowerOfTwo[key](3)).toBe(false);
    expect(isPowerOfTwo[key](4)).toBe(true);
    expect(isPowerOfTwo[key](5)).toBe(false);
    expect(isPowerOfTwo[key](6)).toBe(false);
    expect(isPowerOfTwo[key](7)).toBe(false);
    expect(isPowerOfTwo[key](8)).toBe(true);
    expect(isPowerOfTwo[key](10)).toBe(false);
    expect(isPowerOfTwo[key](12)).toBe(false);
    expect(isPowerOfTwo[key](16)).toBe(true);
    expect(isPowerOfTwo[key](31)).toBe(false);
    expect(isPowerOfTwo[key](64)).toBe(true);
    expect(isPowerOfTwo[key](1024)).toBe(true);
    expect(isPowerOfTwo[key](1023)).toBe(false);
  });
});
