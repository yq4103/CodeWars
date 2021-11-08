function duplicateEncode(word) {
  const wordArr = word.toLowerCase().split("");
  let newArr = [];

  for (let item of wordArr) {
    if (
      wordArr
        .filter((ele, indx) => indx !== wordArr.indexOf(ele))
        .includes(item)
    ) {
      newArr.push(")");
    } else {
      newArr.push("(");
    }
  }

  return newArr.join("");
}
