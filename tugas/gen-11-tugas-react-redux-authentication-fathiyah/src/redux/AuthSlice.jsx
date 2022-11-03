import { createContext } from "react"
import { createSlice } from "@reduxjs/toolkit";

function getUserData(){
    const savedUserData = localStorage.getItem("userData")

    if(savedUserData){
        const parsedUserData = JSON.parse(savedUserData)
        return parsedUserData
    } else {
        return {}
    }
}

function getToken(){
    const savedToken = localStorage.getItem("token")
    return savedToken ?? null 
    
}

const initialState = {
    userData: getUserData(),
    token: getToken(),
    isLogin: getToken() ? true: false
}

export const AuthSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        handleAfterLogin(state,action){
            state.userData = action.payload.userData
            state.token = action.payload.token
            
            localStorage.setItem("userData", JSON.stringify(action.payload.userData)) //ubah object ke string
            localStorage.setItem("token", action.payload.token)

            state.isLogin = action.payload.token != null
        },
        logout(state){
            localStorage.removeItem("userData")
            localStorage.removeItem("token")
            state.userData = {}
            state.token = null
            
        }

    }
})

export const { handleAfterLogin, logout } = AuthSlice.actions

export default AuthSlice.reducer