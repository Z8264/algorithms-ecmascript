import countPrimes from '../count-primes';

test('count primality', () => {
  expect(countPrimes(10)).toBe(4);
  expect(countPrimes(72)).toBe(20);
});
