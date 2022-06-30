/**
 * Shell Sort
 */
function sort(arr = []) {
  const a = [...arr];
  let gap = Math.floor(a.length / 2);
  while (gap > 0) {
    for (let i = gap; i < a.length; i += 1) {
      for (let j = i; j - gap >= 0 && a[j] < a[j - gap]; j -= gap) {
        [a[j], a[j - gap]] = [a[j - gap], a[j]];
      }
    }
    gap = Math.floor(gap / 2);
  }
  return a;
}

export default sort;
