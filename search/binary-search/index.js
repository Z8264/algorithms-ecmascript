const search = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};

export default search;
