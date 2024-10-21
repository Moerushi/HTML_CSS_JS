import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice';
import userReducer from './slices/userSlice';
import { loggerMiddleWare } from '../services/loggerMiddleWare';

const store = configureStore({
    reducer: { users: usersReducer ,  user: userReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
})


export default store;