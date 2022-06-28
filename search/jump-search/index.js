const search = (arr = [], target = null) => {
  const size = Math.floor(Math.sqrt(arr.length));

  let start = 0;
  let end = size;

  while (target > arr[Math.min(end, arr.length) - 1]) {
    start = end;
    end += size;
    if (start > arr.length) return -1;
  }

  for (let i = 0; i < Math.min(end, arr.length); i += 1) {
    if (arr[i] === target) return i;
  }
  return -1;
};

export default search;
