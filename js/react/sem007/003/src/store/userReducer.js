import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersRequest: (state) => {
            state.loading = true; // для отображения preloading
            state.error = null;
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

});
export const {fetchUsersFailure, fetchUsersSuccess, fetchUsersRequest} = usersSlice.actions;
export default usersSlice.reducer;