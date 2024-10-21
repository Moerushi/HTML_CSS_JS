import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { name, description, price, availability } = action.payload;
            const newProduct = {
                id: Date.now(),
                name: name,
                description: description,
                price: price,
                available: availability
            };
            state.items.push(newProduct);
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        editProduct: (state, action) => {
            
        },
        availabilityProductChange: (state, action) => {
            const product = state.items.find(
                (product) => product.id === action.payload,
            );
            if (product) {
                product.available = !product.available;
            }
        }
    }
});

export const { addProduct, deleteProduct, editProduct, availabilityProductChange } = productsSlice.actions;
export default productsSlice.reducer;