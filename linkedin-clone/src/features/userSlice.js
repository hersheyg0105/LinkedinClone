import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initializeState: {
        value: 0,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.user += null;
        },
    },
})

export const { login, logout } = userSlice.actions;

//selectors, allow us to pull information
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;