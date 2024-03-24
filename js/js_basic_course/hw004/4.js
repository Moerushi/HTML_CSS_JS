"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
const linesNumber = 20;
let resultLine = '';
for (let index = 0; index < linesNumber; index++) {
  resultLine +='x';
  console.log(resultLine);
}