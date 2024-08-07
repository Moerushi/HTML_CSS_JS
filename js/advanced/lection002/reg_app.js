const App = {};

class User {
    #_name;
    constructor(name) {
        this.#_name = name;
    }

    getName() {
        return this.#_name;
    }
}

App.registerUser = (name, email, password) => {
    try {
        if (!name || !email || !password) {
            throw new Error('Не все данные введены!');
        }
        const user = new User (name);
        const userData = {
            name: user.getName(),
            email,
            password
        };
        // тут прописать логику передачи данных на сервер
        console.log('Пользователь успешно зарегистрирован: ', user.getName());
        console.log('Дополнительные данные о пользователе: ', userData);
    } catch (error) {
        console.error('Ошибка регистрации: ', error.message);
    } finally {
        console.log('Завершение регистрации пользователя!');
    }
};

App.registerUser('1','2','3');
App.registerUser('4','','6');
