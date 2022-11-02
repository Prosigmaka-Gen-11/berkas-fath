import { useContext, useState } from "react"
import axios from 'axios'
import { Navigate } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

export default function Login(){
    const { handleAfterLogin, isLogin } = useContext(AuthContext)
    const [username,setUserName]  = useState("")
    const [password,setPassword] = useState("")

    function handleLogin(evt){
        evt.preventDefault()
        axios.post("https://dummyjson.com/auth/login", {
            username,password
        }).then(res=>{
            handleAfterLogin(res.data)

        }).catch(err=>{
            console.log(err.response) 
        })
    }

    if(isLogin){
        return <Navigate to="/"/> 
    } 

    return <>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-center p-5 text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Login</h1>
        <div className="grid grid-cols-2 gap-5 w-1/2 h-[400px] bg-sky-50 mx-auto rounded-xl shadow-md">
            <div>
                <img
                    className="rounded-md h-[400px] w-full" 
                    src="https://source.unsplash.com/RLw-UC03Gwc/400x500" alt="front-img" />
            </div>
            <div className="p-10 mt-5">
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange= {evt => setUserName(evt.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange= {evt => setPassword(evt.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>
                   
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>
    </>
}