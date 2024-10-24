import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {},
        deleteFromCart: (state, action) => {}
    }
});

export const {  } = cartSlice.actions;
export default cartSlice.reducer;