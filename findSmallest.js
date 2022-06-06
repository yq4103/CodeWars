const minArgs = function() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }

  const sortNum = (a,b)=> {
    return a - b;
  };

  const result = arr.sort(sortNum);

  return result[0];
};

console.log(minArgs(1, -6, 78, 12, 45.5, -6.9))