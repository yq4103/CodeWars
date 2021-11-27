function deleteNth(arr, n) {
  const freqArr = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    freqArr[arr[i]] = (freqArr[arr[i]] || 0) + 1;

    if (freqArr[arr[i]] <= n) result.push(arr[i]);
  }
  return result;
}
