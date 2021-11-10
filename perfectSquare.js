function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  }
  return -1;
}
