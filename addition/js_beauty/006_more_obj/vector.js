class Vec { // прототип, абстрактный класс
  constructor(x, y) { // создали конструктор
    this.x = x;
    this.y = y;
  }
  plus(anotherVector) {
    return new Vec(this.x + anotherVector.x, this.y + anotherVector.y);
  }
  minus(anotherVector) {
    return new Vec(this.x - anotherVector.x, this.y - anotherVector.y);
  }
  get dlina() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

let vectorOne = new Vec(1, 2);
let vectorTwo = new Vec(2, 3);

console.log(vectorOne.plus(vectorTwo));
console.log(vectorOne.minus(vectorTwo));
console.log(new Vec(3, 4).dlina);

