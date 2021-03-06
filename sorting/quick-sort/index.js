/**
 * Quick Sort
 */
function sort(arr = []) {
  const a = [...arr];

  if (a.length <= 1) return a;

  const left = [];
  const right = [];
  const center = [];

  const centerNumber = a.shift();
  center.push(centerNumber);

  while (a.length) {
    const current = a.shift();
    if (current < centerNumber) {
      left.push(current);
    } else if (current > centerNumber) {
      right.push(current);
    } else {
      center.push(centerNumber);
    }
  }

  return sort(left).concat(center, sort(right));
}

export default sort;
