const recursive = require('../factorial-recursive');
const iterative = require('../factorial-iterative');

describe('factorial recursive', () => {
  it('factorial recursive', () => {
    expect(recursive(0)).toBe(1);
    expect(recursive(1)).toBe(1);
    expect(recursive(5)).toBe(120);
    expect(recursive(8)).toBe(40320);
    expect(recursive(10)).toBe(3628800);
  });
});

describe('factorial iterative', () => {
  it('factorial iterative', () => {
    expect(iterative(0)).toBe(1);
    expect(iterative(1)).toBe(1);
    expect(iterative(5)).toBe(120);
    expect(iterative(8)).toBe(40320);
    expect(iterative(10)).toBe(3628800);
  });
});
