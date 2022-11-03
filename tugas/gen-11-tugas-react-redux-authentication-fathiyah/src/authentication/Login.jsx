import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { handleAfterLogin } from "../redux/AuthSlice";
import { ubahPassword, ubahUsername } from "../redux/userSlice";
import axios from 'axios'


export default function Login(){
    const authState = useSelector( state => state.auth )
    const userState = useSelector( state => state.user)
    const dispatch = useDispatch()

    const username = userState.username
    const password = userState.password
    const isLogin = authState.isLogin

    console.log( authState )
    console.log( userState )

    function handleLogin(evt){
        evt.preventDefault()
        axios.post("https://dummyjson.com/auth/login", {
            username,password
        }).then(res=>{
            dispatch( handleAfterLogin({userData: res.data, token: res.data.token}) )
            console.log(res.data)
        }).catch(err=>{
            console.log(err.response) 
        })
    }

    if(isLogin){
        return <Navigate to="/"/> 

    }

    return <>
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
            <label>
                Username: <br />
                <input 
                    required 
                    type="text"
                    value={username}
                    onChange= {evt => dispatch(ubahUsername((evt.target.value)))}
                    />
            </label>
            <br /><br />

            <label>
                Password: <br />
                <input 
                    type="password"
                    required 
                    value={password}
                    onChange= {(evt) => dispatch(ubahPassword(evt.target.value))}
                />
                    
            </label>
            <br /><br />

            <button>Login</button>
        </form>
    </>
}