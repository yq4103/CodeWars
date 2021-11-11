function createPhoneNumber(numbers) {
  let result = "(xxx) xxx-xxxx";
  for (let num of numbers) {
    result = result.replace("x", num);
  }
  return result;
}
