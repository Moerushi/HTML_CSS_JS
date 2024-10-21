export const loggerMiddleWare = (store) => (next) => (action) => { // так выглядит любой middleware, порядок всегда такой
    // store это объект тут

    console.log('dispatching', action); // пошла отправка action, то что происходит сейчас
    console.log('Текущее(ДО того как сработает action) состояние store', store.getState()); // выведет состояние в текущий момент
    
    if (action.type === 'todo/addTodo') {
        action.payload = action.payload + '!!!';
    }

    const result = next(action);
    console.log('Текущее(ПОСЛЕ того как сработает action) состояние store', store.getState());
    return result;
}

// redux-persist это библиотека которая работает с localStorage