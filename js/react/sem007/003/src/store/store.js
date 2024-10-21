import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import usersSaga from '../sagas/usersSaga'
import usersReducer from './userReducer';
import { loggerMiddleWare } from './loggerMiddleWare';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

const store = configureStore({
    reducer: { users: usersReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleWare),
})

// then run the saga
sagaMiddleware.run(usersSaga)

export default store;