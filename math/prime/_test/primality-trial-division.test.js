const isPrime = require('../is-prime');

test('isPrime', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(191)).toBe(true);
  expect(isPrime(199)).toBe(true);

  expect(isPrime(-1)).toBe(false);
  expect(isPrime(0)).toBe(false);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(12)).toBe(false);
  expect(isPrime(14)).toBe(false);
  expect(isPrime(25)).toBe(false);
  expect(isPrime(192)).toBe(false);
  expect(isPrime(200)).toBe(false);
  expect(isPrime(400)).toBe(false);

  expect(isPrime(0.5)).toBe(false);
  expect(isPrime(1.3)).toBe(false);
  expect(isPrime(10.5)).toBe(false);
});
