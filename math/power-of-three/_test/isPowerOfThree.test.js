import conversion from '../base-conversion';
import integer from '../integer-limitations';
import iterative from '../iterative';
import mathematics from '../mathematics';

const isPowerOfThree = {
  conversion, integer, iterative, mathematics,
};

Object.keys(isPowerOfThree).forEach((key) => {
  test(`isPowerOfThree By ${key}`, () => {
    expect(isPowerOfThree[key](-1)).toBe(false);
    expect(isPowerOfThree[key](0)).toBe(false);
    expect(isPowerOfThree[key](1)).toBe(true);
    expect(isPowerOfThree[key](3)).toBe(true);
    expect(isPowerOfThree[key](4)).toBe(false);
    expect(isPowerOfThree[key](6)).toBe(false);
    expect(isPowerOfThree[key](7)).toBe(false);
    expect(isPowerOfThree[key](8)).toBe(false);
    expect(isPowerOfThree[key](9)).toBe(true);
    expect(isPowerOfThree[key](10)).toBe(false);
    expect(isPowerOfThree[key](13)).toBe(false);
    expect(isPowerOfThree[key](27)).toBe(true);
    expect(isPowerOfThree[key](31)).toBe(false);
    expect(isPowerOfThree[key](6561)).toBe(true);
    expect(isPowerOfThree[key](1162261467)).toBe(true);
  });
});
