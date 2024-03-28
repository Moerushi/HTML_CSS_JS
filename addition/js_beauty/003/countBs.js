function countBs(line, letter) {
  let count = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === letter) {
      count++;
    }

  }
  return count;
}

let userLine = 'Accusamus, ducimus quod asperiores autem laborum';
let letterToFind = 'e';
console.log(`Кол-во букв 'a' в строке 'Accusamus, ducimus quod asperiores autem laborum' равно - ${countBs(userLine, letterToFind)}`);