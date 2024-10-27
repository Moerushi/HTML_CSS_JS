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
            state.itemsInCart.push(action.payload);
            state.total += action.payload.price;
        },
        deleteFromCart: (state, action) => {

        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;