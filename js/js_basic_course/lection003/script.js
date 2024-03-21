function helloName(name) {
  console.log(`Hello ${name}!`);
}

let userName = 'Nick';
helloName(userName);

let age = 20;

const ageUp = () => age + 5;

console.log(`This year you are ${age}!`);
console.log(`After 5 years you will be ${ageUp()}!`);

function sayHello() {
  alert('Hello One');
  alert('Press button');
}