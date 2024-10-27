import { configureStore } from '@reduxjs/toolkit';
import  cartReducer from './slicers/cartSlice'
import  productsSlice from './slicers/productsSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSlice
  },
});