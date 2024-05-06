const createCounter = () => {
  let counter = 0;
  return () => {
    return counter++;
  }
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
counter1(); // 3

const counter2 = createCounter();
counter2(); // 1
counter2(); // 2
counter2(); // 3

const closureFunction = () => {
  const cache = {};
  return (x) => {
    if (cache[x]) return cache[x];
    const result = x * x;
    cache[x] = result;
    return result;
  };
};

const cachedPow = closureFunction();
cachedPow(2); // 4
cachedPow(8); // 64