// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя). 
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo()
// родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    constructor(empName) {
        this.empName = empName;
    }
    displayInfo() {
        console.log(`This is ${this.empName}.`);
    }
}

class Manager extends Employee {
    constructor(empName, dept) {
        super(empName);
        this.dept = dept;
    }
    displayInfo() {
        console.log(`This is ${this.empName}. ${this.empName} works in ${this.dept}`);
    }
}

// Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales