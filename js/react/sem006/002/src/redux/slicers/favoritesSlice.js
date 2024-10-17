import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
}

const favoriteSlice = createSlice({
    name: "favorite", 
    initialState, 
    reducers: { 
        addFavorite: (state, action) => {
            // через includes
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload); 
            }
            // через коллекцию (но так не пишется, так как код должен быть понятен)
            // state.favorites = [...new Set([...state.favorites, action.payload])];
        },
        deleteFavorite: (state, action) => {
            state.favorites = state.favorites.filter(id => id !== action.payload);
        }
    }
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer; // создается автоматически через createSlice