import recursive from '../fibonacci-recursive';
import iterative from '../fibonacci-iterative';
import matrix from '../fibonacci-matrix';
import math from '../fibonacci-math';

test('fibonacci: recursive', () => {
  expect(recursive(0)).toBe(0);
  expect(recursive(1)).toBe(1);
  expect(recursive(2)).toBe(1);
  expect(recursive(3)).toBe(2);
  expect(recursive(4)).toBe(3);
  expect(recursive(5)).toBe(5);
  expect(recursive(6)).toBe(8);
  expect(recursive(7)).toBe(13);
  expect(recursive(8)).toBe(21);
});

const fibonacci = { iterative, matrix, math };

Object.keys(fibonacci).forEach((key) => {
  test(`${key} test`, () => {
    expect(fibonacci[key](0)).toBe(0);
    expect(fibonacci[key](1)).toBe(1);
    expect(fibonacci[key](2)).toBe(1);
    expect(fibonacci[key](3)).toBe(2);
    expect(fibonacci[key](4)).toBe(3);
    expect(fibonacci[key](5)).toBe(5);
    expect(fibonacci[key](6)).toBe(8);
    expect(fibonacci[key](7)).toBe(13);
    expect(fibonacci[key](8)).toBe(21);
    expect(fibonacci[key](20)).toBe(6765);
    expect(fibonacci[key](30)).toBe(832040);
    expect(fibonacci[key](50)).toBe(12586269025);
    // expect(fibonacci[key](70)).toBe(190392490709135);
    // expect(fibonacci[key](71)).toBe(308061521170129);
    // expect(fibonacci[key](72)).toBe(498454011879264);
    // expect(fibonacci[key](73)).toBe(806515533049393);
    // expect(fibonacci[key](74)).toBe(1304969544928657);
    // expect(fibonacci[key](75)).toBe(2111485077978050);
    // expect(fibonacci[key](80)).toBe(23416728348467685);
    // expect(fibonacci[key](90)).toBe(2880067194370816120);
    // expect(fibonacci[key](100)).toBe(354224848179262000000);
  });
});
