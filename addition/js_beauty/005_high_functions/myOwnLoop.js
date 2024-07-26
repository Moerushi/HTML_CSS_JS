function loop(value, conditionFn, renewFn, bodyFn) {
  if (!conditionFn(value)) return;
  bodyFn();
  loop(renewFn(value), conditionFn, renewFn, bodyFn)
}

loop(3, n => n > 0, n => n - 1, n => console.log(23));