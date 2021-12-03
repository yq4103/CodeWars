const makeCase = function(input, kind) {
  let styles = [];

  if (Array.isArray(kind)) {
    for (let selectStyle of kind) {
      styles.push(selectStyle);
    }
  } else styles.push(kind);

  const camel = function(input) {
    const camelString = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] === " " && input[i] !== " ") {
        camelString.push(input[i].toUpperCase());
      } else if (input[i] !== " ") {
        camelString.push(input[i]);
      }
    }
    return camelString.join("");
  };

  const pascal = function(input) {
    const pascalString = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] === " " && input[i] !== " ") {
        pascalString.push(input[i].toUpperCase());
      } else if (i === 0 && input[i] !== " ") {
        pascalString.push(input[i].toUpperCase());
      } else if (input[i] !== " ") {
        pascalString.push(input[i]);
      }
    }
    return pascalString.join("");
  };

  const snake = function(input) {
    const snakeString = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        snakeString.push("_");
      } else if (input[i] !== " ") {
        snakeString.push(input[i]);
      }
    }
    return snakeString.join("");
  };

  const kebab = function(input) {
    const kebabString = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        kebabString.push("-");
      } else if (input[i] !== " ") {
        kebabString.push(input[i]);
      }
    }
    return kebabString.join("");
  };

  const title = function(input) {
    const titleString = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] === " ") {
        titleString.push(input[i].toUpperCase());
      } else if (i === 0) {
        titleString.push(input[i].toUpperCase());
      } else {
        titleString.push(input[i]);
      }
    }
    return titleString.join("");
  };

  const vowel = function() {
    const vowelString = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
        vowelString.push(input[i].toUpperCase());
      } else {
        vowelString.push(input[i]);
      }
    }
    return vowelString.join("");
  };

  const consonant = function() {
    const consonantString = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
        consonantString.push(input[i].toUpperCase());
      } else {
        consonantString.push(input[i]);
      }
    }
    return consonantString.join("");
  };

  const upper = function(input) {
    const upperString = [];
    for (let i = 0; i < input.length; i++) {
      upperString.push(input[i].toUpperCase());
    }
    return upperString.join("");
  };

  for (kind of styles) {
    switch (kind) {
    case "camel":
      input = camel(input);
      break;
    case "pascal":
      input = pascal(input);
      break;
    case "snake":
      input = snake(input);
      break;
    case "kebab":
      input = kebab(input);
      break;
    case "title":
      input = title(input);
      break;
    case "vowel":
      input = vowel(input);
      break;
    case "consonant":
      input = consonant(input);
      break;
    case "upper":
      input = upper(input);
      break;
    }
  }
  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["vowel", "snake"]));