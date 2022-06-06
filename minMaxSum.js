let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  let largeSum = 0;
  let smallSum = 0;

  const ascendingArr = arr.sort((a, b) => a - b);
  console.log(ascendingArr);

  for (let i = 0; i < ascendingArr.length - 1; i++) {
    smallSum += ascendingArr[i];
  }
  console.log(smallSum);
  const descendingArr = arr.sort((a, b) => b - a);
  console.log(descendingArr);
  for (let i = 0; i < descendingArr.length - 1; i++) {
    largeSum += descendingArr[i];
  }
  console.log(largeSum);
}

console.log(miniMaxSum(arr));
