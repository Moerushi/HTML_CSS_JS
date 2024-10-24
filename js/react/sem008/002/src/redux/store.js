import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from './slices/exchangeSlice';

export const store = configureStore({
    reducer: {
        exchange: exchangeReducer
    }
});