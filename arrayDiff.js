function arrayDiff(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a;
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
      }
    }
  }

  function check(a, b) {
    for (let item of a) {
      if (b.includes(item)) {
        return true;
      }
    }
  }

  return check(a, b) ? arrayDiff(a, b) : a;
}
