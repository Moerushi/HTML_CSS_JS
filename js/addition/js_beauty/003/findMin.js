function findMin(a, b) {
  let min = a;
  if (a > b) {
    min = b;
  }
  return min;
}

console.log(findMin(Math.trunc(Math.random() * 100), Math.trunc(Math.random() * 100)));