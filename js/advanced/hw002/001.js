// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

class Library {
    #books = [];

    // Реализуйте геттер allBooks, который возвращает текущий список книг.
    get allBooks() {
        return this.#books;
    }

    // Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга ${title} уже есть в списке`);
        } else {
            this.#books.push(title);
        }
    }

    // Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error(`Книги ${title} нет в списке`);
        } else {
            this.#books = this.#books.filter(book => book !== title);
        }
    }

    // Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
    hasBook(title) {
        return this.#books.includes(title);
    }

    // Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
    constructor(books) {
        this.#books = [];
        for (let book of books) {
            if (!this.#books.includes(book)) {
                this.#books.push(book);
            } else {
                throw new Error(`Книга ${book} уже есть в списке`);
            }
        }
    }

}

const bookList = ['Гарри Поттер и узник Азкабана', "Унесенные ветром", "Зеленая миля"];

const myBooks = new Library(bookList);
console.log(myBooks.allBooks);
myBooks.addBook("Пятнадцатилетний капитан");
console.log(myBooks.allBooks);  
myBooks.removeBook("Унесенные ветром");
console.log(myBooks.allBooks);
console.log(myBooks.hasBook("Вокруг света за 80 дней"));