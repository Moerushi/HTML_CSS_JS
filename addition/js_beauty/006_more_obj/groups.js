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
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group);
group.delete(10);
console.log(group);
console.log(group.has(10));
// → false
