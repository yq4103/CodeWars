function toCamelCase(str) {
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "-" || strArr[i] === "_") {
      strArr.splice(i, 2, strArr[i + 1].toUpperCase());
    }
  }
  return strArr.join("");
}
