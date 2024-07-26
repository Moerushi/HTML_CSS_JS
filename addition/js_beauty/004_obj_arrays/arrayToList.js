function arrayToList(arr) {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list){
  return {value, rest: list};
}

function nth(list, n){
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

const array = ['a', 'b', 'c'];
const arrayToListData = arrayToList(array);
console.log(arrayToListData);
console.log(listToArray(arrayToListData));
console.log(prepend(2, arrayToListData));
console.log(nth(arrayToListData, 0));