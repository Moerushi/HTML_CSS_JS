import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slicers/todoSlice'
import favoriteReducer from './slicers/favoritesSlice'

export const store = configureStore({// создается хранилище redux
    reducer: {
        todo: todoReducer,
        favorite: favoriteReducer
    } 
});