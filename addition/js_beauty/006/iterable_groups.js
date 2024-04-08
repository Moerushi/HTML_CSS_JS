class Group {
  constructor() {
    this.array = [];
  }

  add(item) {
    if (!this.array.includes(item)) this.array.push(item);
  }

  delete(item) {
    if (this.array.includes(item)) this.array = this.array.filter(elem => elem !== item);
  }
  
  has(item) {
    return this.array.includes(item) ? true : false;
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

    [Symbol.iterator]() {
    return new GroupIterator(this.array);
  }
}

class GroupIterator {
  constructor(array) {
    this.array = array;
    this.position = 0;
  }

  next() {
    if (this.position >= this.array.length) {
      return {done: true};
    } else {
      let result = {value: this.array[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}