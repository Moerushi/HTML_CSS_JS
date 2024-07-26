const size = 10;
let oneLine = '';
for (let i = 1; i <= Math.pow(size, 2); i++) {

  if (i % (size + 1) !== 0) {
    if (i % 2 === 0) {
      oneLine += '_';
    } else {
      oneLine += '-';
    }
  } else {
    console.log(oneLine);
    oneLine = '';
  }

}