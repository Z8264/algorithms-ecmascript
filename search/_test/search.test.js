import linear from '../linear-search';
import binary from '../binary-search';
import interpolation from '../interpolation-search';

const search = { linear, binary, interpolation };

Object.keys(search).forEach((key) => {
  test(`${key} search`, () => {
    expect(search[key]([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(6);

    expect(search[key]([1, 2], 20)).toBe(-1);

    expect(search[key]([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });
});
