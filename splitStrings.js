function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let second = str[i + 1] || "_";
    result.push(str[i] + second);
  }
  return result;
}
