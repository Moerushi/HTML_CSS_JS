const array = [];
console.log(array);

const elNumber = 10;

for (let index = 0; index < elNumber; index++) {
    const element = Math.round(Math.random() * 10, 0);
    while (!array.includes(element)){
        array.push(element);
    }
};
console.log(array);

array.sort((a, b) => b - a); // по убыванию
console.log(array);

array.sort((a, b) => a - b); // по возрастанию
console.log(array);

const value = 5;

function binarySearch(value, array) {
    let first = 0;
    let last = array.length - 1;
    let mid = Math.floor((first + last) / 2);
    let position = -1; 
    let found = false;

    while (found === false && first <= last) {
        mid = Math.floor((first + last) / 2);
        if (array[mid] == value) {
            found = true;
            position = mid;
        } else if (array[mid] > value) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return position;
}

console.log(binarySearch(value, array));