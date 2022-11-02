import { useContext, useState } from "react"
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

export default function Login(){
    const nav = useNavigate() //untuk mengarahkan ke page tertentu setelah sesuatu terjadi
    const { handleAfterLogin, isLogin } = useContext(AuthContext)
    const [username,setUserName]  = useState("")
    const [password,setPassword] = useState("")

    function handleLogin(evt){
        evt.preventDefault()
        axios.post("https://dummyjson.com/auth/login", {
            username,password
        }).then(res=>{
            //localstorage akan menyimpan data login walaupun sudah mematikan laptop atau menutup browser
            //sessionstorage akan menghapus data login jika sesinya udh expired
            handleAfterLogin(res.data)

        }).catch(err=>{
            console.log(err)
            console.log(err.request)
            console.log(err.response) //error dari user
        })
    }

    if(isLogin){
        return <Navigate to="/"/> //kalo not login yg ini gakan ke run

    } 
    return <>
        <h1>ini login</h1>

        <form onSubmit={handleLogin}>
            <label>
                Username: <br />
                <input 
                    required //gabisa disubmit kalo gadiisi
                    type="text"
                    value={username}
                    onChange= {evt => setUserName(evt.target.value)}
                    />
            </label>
            <br /><br />

            <label>
                Password: <br />
                <input 
                    type="password"
                    required //gabisa disubmit kalo gadiisi
                    value={password}
                    onChange= {evt => setPassword(evt.target.value)}
                />
                    
            </label>
            <br /><br />

            <button>Login</button>
        </form>
    </>
}