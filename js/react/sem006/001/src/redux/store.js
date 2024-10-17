import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slicers/todoSlice'

export const store = configureStore({// создается хранилище redux
    reducer: {
        todo: todoReducer
    } 
});