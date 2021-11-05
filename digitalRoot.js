function digital_root(n) {
  const numArr = n.toString().split("");
  let sum = 0;
  for (let item of numArr) {
    let int = parseInt(item, 10);
    sum += int;
  }
  return sum >= 10 ? digital_root(sum) : sum;
};
