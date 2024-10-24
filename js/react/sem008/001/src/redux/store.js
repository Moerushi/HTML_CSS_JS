import {configureStore} from '@reduxjs/toolkit';
import jokeReducer from './slices/jokeSlice';

export const store = configureStore({
    reducer: {
        joke: jokeReducer
    }
});