const makeCounter = function(start = 0) {
  let obj = {};

  obj.value = ()=>{
    return start;
  };
  obj.increment = function() {
    start++;
    return start;
  };
  obj.decrement = function() {
    start--;
    return start;
  };

  return obj;
};

var counter = makeCounter();
console.log(counter.value());
// 0

var counter2 = makeCounter(4);

console.log(counter2.value());
// 4

console.log(counter2.increment());
// 5
console.log(counter2.value());
// 5

counter2.decrement();
counter2.decrement();
console.log(counter2.decrement());
// 2