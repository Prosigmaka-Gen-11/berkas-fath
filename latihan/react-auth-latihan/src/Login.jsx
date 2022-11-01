import { useState } from "react"

export default function Login(){
    const [username,setUserName]  = useState("")
    const [password,setPassword] = useState("")

    function handleLogin(){
        setUserName(username)
    }

    return <>
        <h1>ini login</h1>

        <form action="">
            <label htmlFor="">
                Username: <br />
                <input 
                    required //gabisa disubmit kalo gadiisi
                    type="text"
                    value={username}
                    onChange= {evt => setUserName(evt.target.value)}
                    />
            </label>
            <br /><br />

            <label htmlFor="">
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