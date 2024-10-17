import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slicers/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer
    } 
});