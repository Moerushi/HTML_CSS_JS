import { configureStore } from '@reduxjs/toolkit';
import  cartReducer from './slicers/cartSlice'
import  productsReducer from './slicers/productsSlice'
import filterReducer from './slicers/filterSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filter: filterReducer
  },
});