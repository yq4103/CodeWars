function pigIt(str) {
  const words = str.split(" ");
  const result = [];
  for (let word of words) {
    if (/[a-zA-Z]/.test(word)) {
      result.push(word.substring(1) + word[0] + "ay");
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
}
