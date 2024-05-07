// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor(stuName, age, grade) {
        this.stuName = stuName;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        return `Вы просматриваете информацию о ${this.stuName}, ${this.age} лет, студента(ки) ${this.grade} класса.`
    }
}

const student1 = new Student('John Smith', 16, 10);
console.log(student1.displayInfo());
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade
const student2 = new Student('Jane Doe', 17, 11);
console.log(student2.displayInfo());
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"