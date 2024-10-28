import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const url = '../data/data.json';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkApi) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something goes wrong...')
            }
            return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

const initialState = {
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.products = action.payload;
                })
        }
});

export default productsSlice.reducer;