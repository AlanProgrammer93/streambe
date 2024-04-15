import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action) {
            state.user = action.payload;
        },
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;