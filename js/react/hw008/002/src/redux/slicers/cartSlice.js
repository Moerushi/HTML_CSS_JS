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
            console.log(action.payload);
            const newItem = { 
                title: action.payload.title, 
                color: action.payload.prodColor ? action.payload.prodColor : action.payload.colors[0], 
                price: action.payload.price, 
                size: action.payload.prodSize ? action.payload.prodSize : action.payload.sizes[0], 
                quantity: action.payload.quantity ? action.payload.quantity : 1, 
                imgSrc: action.payload.imgSrc, 
                cartItemId: Date.now()
            };
            state.itemsInCart.push(newItem);
            state.total += newItem.price * newItem.quantity;
        },
        deleteFromCart: (state, action) => {
            const deletedItem = state.itemsInCart.find(item => item.cartItemId === action.payload);
            state.total -= deletedItem.price*deletedItem.quantity;
            state.itemsInCart = state.itemsInCart.filter(item => item.cartItemId !== action.payload);
        },
        clearCart: (state) => {
            state.itemsInCart = [];
            state.total = 0;
        },
        changeQuantity: (state, action) => {

        }
    }
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;