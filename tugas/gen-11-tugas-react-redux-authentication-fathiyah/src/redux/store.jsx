import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice  from "./AuthSlice";
import  userSlice  from "./userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        auth: AuthSlice
    }
})

export default store