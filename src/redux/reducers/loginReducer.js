import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    userList: [],
    userId: "",
    userPw: "",
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsers(state, action) {
            state.userId = action.payload;
        },
        getSingleLogin(state, action) {
            state.userList = action.payload;
        },
    },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
