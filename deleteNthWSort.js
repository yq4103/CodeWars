function deleteNth(arr, n) {
  let result = [];

  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > n) {
      counts[num] = n;
    }
  }

  for (const [key, value] of Object.entries(counts)) {
    for (let i = 0; i < value; i++) {
      result.push(parseInt(key));
    }
  }
  return result;
}
