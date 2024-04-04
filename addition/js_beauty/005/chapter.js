function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, i => labels.push(`Блoк ${i + 1}`));
console.log(labels);