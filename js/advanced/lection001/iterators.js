const string = 'hello';
console.log(string.length);

for (const str of string) {
    console.log(str);
}

let range = {
    from: 1,
    to: 17
}

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return this.current <= this.last ? { done: false, value: this.current++ } : { done: true }
        }
    };
}

for (let number of range) {
console.log(number);
}
