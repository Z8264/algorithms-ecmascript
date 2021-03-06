import gcd from '../greatest-common-divisor/gcd-euclidean-iterative';

const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
};

export default lcm;
