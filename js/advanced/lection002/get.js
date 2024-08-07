// class AutoMobile {
//     _horsePowers = 0; // приватное поле защищено от изменений вне класса
//     set horsePowers (value) {
//         if (value < 0) throw new Error('Negative power');
//         this._horsePowers = value;
//     }

//     get horsePowers() {
//         return this._horsePowers;
//     }

//     constructor (power) {
//         this._horsePowers = power;
//     }
// }

// let auto = new AutoMobile(100);
// auto.horsePowers = -10;

class AutoMobile {
    #horsePowers = 0; // приватное свойство без свойств get set недоступно
    set horsePowers (value) {
        if (value < 0) throw new Error('Negative power');
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor (power) {
        this.#horsePowers = power;
    }
}

let auto = new AutoMobile(100);
auto.horsePowers = 50;
console.log(auto.horsePowers);
// не можем поменять приватное поле