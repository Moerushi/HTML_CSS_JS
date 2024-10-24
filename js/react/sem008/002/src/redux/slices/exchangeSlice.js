import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey } from './config';

export const fetchExchange = createAsyncThunk(
    'joke/fetchJoke',
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            const { exchange } = getState();
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/RUB`);
            if (!response.ok) throw new Error({ message: response.status });
            const data = await response.json();
            if (!exchange.currencyList.length) {
                dispatch(setCurrencyList(Object.keys(data.conversion_rates)));
            }
            return data.conversion_rates;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

const initialState = {
    amount: '',
    currency: '',
    currencyList: [],
    result: '',
    loading: false,
    error: null // приходит объект
};

const exchangeSlice = createSlice({
    name: 'exchange',
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
        setCurrencyList: (state, action) => {
            state.currencyList = action.payload;
        }
    },
    extraReducers: (builder) => { // это от fetchExchange
        builder
            .addCase(fetchExchange.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchExchange.fulfilled, (state, action) => {
                state.loading = false;
                if (state.currency && state.amount) {
                    state.result = (action.payload[state.currency] * state.amount).toFixed(2);
                }
            })
            .addCase(fetchExchange.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const { setAmount, setCurrency, setCurrencyList } = exchangeSlice.actions;
export default exchangeSlice.reducer;