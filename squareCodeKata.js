const squareCode = function(message) {
  const chars = [];
  let result = "";

  for (let letter of message) {
    if (letter !== " ") {
      chars.push(letter);
    }
  }
  const lineNum = Math.ceil(Math.sqrt(chars.length));

  for (let i = 0; i < lineNum; i++) {
    for (let j = i; j < chars.length; j += lineNum) {
      result += chars[j];
    }
    result += " ";
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the cat"));
console.log(squareCode("have a nice day"));