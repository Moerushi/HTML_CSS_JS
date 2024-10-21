import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from '../store/userReduser';

export async function fetchUsersApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Something go wrong')
    }
    return await response.json();
}

function* fetchUsers() {
    try {
        const data = yield call(fetchUsersApi)
        yield put(fetchUsersSuccess(data))
    } catch (error) {
        yield put(fetchUsersFailure(error.message))
    }
}

function* usersSaga() {
    yield takeEvery(fetchUsersRequest.type, fetchUsers);
}

export default usersSaga;

// полезные библиотеки
// https://formik.org/ - создание и валидация форм
// https://react-hook-form.com/ - создание и валидация форм

// Для тестирования и написания тестов: 
// https://testing-library.com/docs/react-testing-library/intro/
// https://playwright.dev/docs/intro

// gest
// https://www.cypress.io/ - для JS

// https://mobx.js.org/README.html

// https://tanstack.com/ - для создания готовых элементов

// https://doka.guide/js/generators/

