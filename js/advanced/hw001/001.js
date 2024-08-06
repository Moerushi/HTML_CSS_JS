// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

console.log('----------\nЗадание 1\n----------');

const musicColletion = [
    { title: 'Pure Imagination', artist: 'Superhuman, Quigley', year: 2018 },
    { title: 'Planet Demain', artist: 'Xueran Chen', year: 2020 },
    { title: 'Alaska', artist: 'Nina Young', year: 2021 }
];

musicColletion[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: musicColletion[this.current++] } : { done: true }
        }
    };
}

for (let track of musicColletion) {
    console.log(`${track.title} by ${track.artist}, ${track.year}`);
}