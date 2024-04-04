function reverseArray(arr) {
  return arr.reverse();
}

function reverseArrayinPlace(arr) {
  const newArr = [];
  for (let i = arr.length; i > 0; i--) {
    newArr.push(arr[i - 1]);
  }
  return newArr;
}

const initialArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(initialArray);
const reversedInPlaceArray = reverseArrayinPlace(initialArray);
console.log(`reversedArray: ${reversedArray}`);
console.log(`initialArray: ${initialArray}`);
console.log(`reversedInPlaceArray: ${reversedInPlaceArray}`);
console.log(`initialArray: ${initialArray}`);