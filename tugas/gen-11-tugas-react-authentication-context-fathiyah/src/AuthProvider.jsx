import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({ children }){
    const [userData, setUserData] = useState(function(){
        const savedUserData = localStorage.getItem("userData")

        if(savedUserData){
            const parsedUserData = JSON.parse(savedUserData)
            return parsedUserData
        } else {
            return {}
        }
    }) //data setelah berhasil login

    const [token, setToken] = useState(function(){
        const savedToken = localStorage.getItem("token")
        return savedToken ?? null //~= savedToken ? savedToken : null
    }) //ini juga dapet dari data diatas

    const isLogin = token != null

    function handleAfterLogin(data){
        setUserData(data)
        setToken(data.token)
        localStorage.setItem("userData", JSON.stringify(data)) //ubah object ke string
        localStorage.setItem("token", data.token)

    }

    function logout (){
        localStorage.removeItem("userData")
        localStorage.removeItem("token")
        setUserData({})
        setToken(null)
    }

    return <AuthContext.Provider value={{
        userData,
        token,

        setUserData,
        setToken,
        handleAfterLogin,

        isLogin,
        logout
    }} >
        {children}
    </AuthContext.Provider>
}