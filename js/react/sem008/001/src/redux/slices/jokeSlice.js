import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJoke = createAsyncThunk(
    'joke/fetchJoke',
    async (url, thunkApi) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error({ message: response.status });
            const data = await response.json();
            return data.value;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

const initialState = {
    value: '',
    loading: false,
    error: null // это объект
};

const jokeSlice = createSlice({
    name: 'joke',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJoke.pending, (state) => {
                state.loading = true;
                state.error = null;
            }) // это и будет action
            .addCase(fetchJoke.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(fetchJoke.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.joke = 'Failed to fetch!';
            })
    }
});

export default jokeSlice.reducer;