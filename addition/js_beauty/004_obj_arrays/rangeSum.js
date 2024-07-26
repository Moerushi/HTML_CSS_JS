function range(start, end, step) {
  const array = [];
  if (start < end) {
    for (let i = start; i <= end; i += Math.abs(step)) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += -Math.abs(step)) {
      array.push(i);
    }
  }

  return array;
}

function mySum(arr) {
  return arr.reduce((summary, number) => summary + number);
}

const myArray = range(5, 2, -1);
console.log(myArray);
const sumNum = mySum(myArray);
console.log(sumNum);