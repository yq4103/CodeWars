const group = function(collection, grouper) {
  let result = {};

  for (let element of collection) {
    result[grouper(element)] = collection.filter(collection => grouper(collection) === grouper(element));
  }

  return result;
};

console.log(group([6.5, 4.2, 6.3], Math.floor));

// { '4': [4.2], '6': [6.5, 6.3] }