import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        ubahUsername(state,action){
            state.username = action.payload
        },
        ubahPassword(state,action){
            state.password = action.payload
        }
    
    }
})

export const { ubahUsername,ubahPassword } = userSlice.actions

export default userSlice.reducer