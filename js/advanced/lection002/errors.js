try {
    undefined = 1;
} catch {
    console.log('Что-то произошло!');
} finally {
    console.log('Отличный результат!');
}

class CustomError extends Error {
    constructor (message) {
        super(message);
        this.name = 'CustomError';
    }
}

function validateNumber (value) {
    if (typeof value !== 'number'){
        throw new CustomError('Значение должно быть числом!');
    }
    console.log('Валидация успешна!');
}

try {
    validateNumber('hello');
} catch (error) {
    if (error instanceof CustomError){
        console.error('Ошибка: ', error.message);
        console.log('Тип ошибки: ', error.name);
    } else {
        console.error('Произошла ошибка: ', error);
    }

}