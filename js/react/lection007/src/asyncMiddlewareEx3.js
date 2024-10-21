const asyncMiddlewareEx3 = store => next => action => {
    if (action.type === 'FETCH_DATA_REQUEST') {
        // делаем запрос к api
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                //  успешное получение
                store.dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data })
            })
            .catch(error => {
                //  безуспешное получение
                store.dispatch({ type: 'FETCH_DATA_ERROR', payload: error.toString() })
            });
    }
    return next(action);
}

export default asyncMiddlewareEx3;