const iterative = require('../gcd-euclidean-iterative');
const recursive = require('../gcd-euclidean-recursive');

const euclidean = { iterative, recursive };

Object.keys(euclidean).forEach((key) => {
  test(`${key} test`, () => {
    expect(euclidean[key](0, 0)).toBe(0);
    expect(euclidean[key](2, 0)).toBe(2);
    expect(euclidean[key](0, 2)).toBe(2);
    expect(euclidean[key](1, 2)).toBe(1);
    expect(euclidean[key](2, 1)).toBe(1);
    expect(euclidean[key](6, 6)).toBe(6);
    expect(euclidean[key](2, 4)).toBe(2);
    expect(euclidean[key](4, 2)).toBe(2);
    expect(euclidean[key](12, 4)).toBe(4);
    expect(euclidean[key](4, 12)).toBe(4);
    expect(euclidean[key](5, 13)).toBe(1);
    expect(euclidean[key](27, 13)).toBe(1);
    expect(euclidean[key](24, 60)).toBe(12);
    expect(euclidean[key](60, 24)).toBe(12);
    expect(euclidean[key](252, 105)).toBe(21);
    expect(euclidean[key](105, 252)).toBe(21);
    expect(euclidean[key](1071, 462)).toBe(21);
    expect(euclidean[key](462, 1071)).toBe(21);
    expect(euclidean[key](462, -1071)).toBe(21);
    expect(euclidean[key](-462, -1071)).toBe(21);
  });
});
