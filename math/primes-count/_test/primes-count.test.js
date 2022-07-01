import primes from '../primes-count';

test('count primality', () => {
  expect(primes(10)).toBe(4);
  expect(primes(72)).toBe(20);
});
