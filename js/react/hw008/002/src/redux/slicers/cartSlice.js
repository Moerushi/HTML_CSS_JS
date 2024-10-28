import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = {...action.payload, cartItemId: Date.now()}
            state.itemsInCart.push(newItem);
            state.total += action.payload.price;
        },
        deleteFromCart: (state, action) => {
            const deletedItem = state.itemsInCart.find(item => item.cartItemId === action.payload);
            state.total -= deletedItem.price;
            state.itemsInCart = state.itemsInCart.filter(item => item.cartItemId !== action.payload);
        },
        clearCart: (state) => {
            state.itemsInCart = [];
            state.total = 0;
        }
    }
});

export const { addToCart, deleteFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;