const primes = (n) => {
  let count = 0;
  const signs = [];

  for (let i = 2; i < n; i += 1) {
    if (!signs[i - 1]) {
      count += 1;

      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true;
      }
    }
  }
  return count;
};
export default primes;
