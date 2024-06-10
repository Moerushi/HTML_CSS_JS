const uuid = require('uuid');
const np = require('number-precision');
const colors = require('colors');

console.log(uuid.v4());
const crn = require('./calculate_result_sum');

const total = crn.calculateResultSum([12.1, 32.2, 43.1], 0.9);

const resultText = `Общая стоимость покупок: ${total} руб.`;

console.log(total > 50 ? resultText.red : resultText.green);