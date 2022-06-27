const search = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const range = arr[end] - arr[start];
    const index = end - start;

    const value = target - arr[start];

    if (value < 0) return -1;

    if (!range) {
      return arr[start] === target ? start : -1;
    }

    const mid = start + Math.floor((value * index) / range);
    console.log(mid);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

export default search;
