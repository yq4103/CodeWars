const group = function(collection, grouper) {
  let result = {};

  for (let item of collection) {
    result[grouper(item)] = collection.filter(collection => grouper(item) === grouper(collection));
  }

  return result;
};

console.log(group([6.5, 4.2, 6.3], Math.floor));

// { '4': [4.2], '6': [6.5, 6.3] }