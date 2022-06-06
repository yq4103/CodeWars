const foo = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0 || i === 0) {
      input[i] += 1;
    } else {
      input[i] -= 1;
    }
  }
  return input;
};

console.log(foo([10, 10, 10, 10, 10]))

// e.g. foo([10, 10, 10, 10, 10]) => [11, 9, 11, 9, 11]