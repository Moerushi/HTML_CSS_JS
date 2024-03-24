function isEven(userNum) {
  if (userNum < 0) {
    return -1;
  } else if (userNum === 0) {
    return true;
  } else if (userNum === 1) {
    return false;
  }
  return isEven(userNum - 2);
};

let anyNum = 50;
console.log(isEven(anyNum));