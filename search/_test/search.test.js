import linear from '../linear-search';
import binary from '../binary-search';
import interpolation from '../interpolation-search';

const search = { linear, binary, interpolation };

Object.keys(search).forEach((key) => {
  test(`${key} search`, () => {
    // 容错
    expect(search[key]()).toBe(-1);
    expect(search[key]([])).toBe(-1);
    // 边界
    expect(search[key]([1, 2], 20)).toBe(-1);
    expect(search[key]([1, 2], -20)).toBe(-1);
    expect(search[key]([1], 20)).toBe(-1);
    expect(search[key]([1], -20)).toBe(-1);
    expect(search[key]([1], 1)).toBe(0);
    expect(search[key]([], 20)).toBe(-1);
    // 正常
    expect(search[key]([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(6);
    expect(search[key]([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toBe(1);
    expect(search[key]([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toBe(4);
    expect(search[key]([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });
});
