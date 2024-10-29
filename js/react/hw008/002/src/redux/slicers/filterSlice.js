import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInFilter: []
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addToFilter: (state, action) => {
            state.itemsInFilter.push(action.payload);
        },
        deleteFromFilter: (state, action) => {
            state.itemsInFilter = state.itemsInFilter.filter(item => item !== action.payload);
        }
    }
});

export const { addToFilter, deleteFromFilter } = filterSlice.actions;
export default filterSlice.reducer;