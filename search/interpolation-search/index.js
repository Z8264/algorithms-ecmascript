const search = (arr = [], target = null) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const range = arr[end] - arr[start];
    const value = target - arr[start];

    if (value < 0) return -1;
    if (!range) return arr[start] === target ? start : -1;

    const mid = start + Math.floor((value * (end - start)) / range);
    console.log(start, end, mid);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

search([2, 4, 6, 8, 10, 12, 14, 16, 18], 12);

// export default search;
