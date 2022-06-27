const search = (arr = [], target = null) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === target) return i;
  }
  return -1;
};

export default search;
