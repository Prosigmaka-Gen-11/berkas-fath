import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Home (){
    const nav = useNavigate()
    const { userData, token, logout } = useContext(AuthContext)

    function handleLogout(){
        logout()
    }
    return <>
        <h1>ini home</h1>
        <h3>Hi, {userData.firstName}</h3>
        <p>your token: {token} </p>
        <Link to="/about">about</Link>
        <br /><br />
        <button onClick={handleLogout}>
            Logout
        </button>
    </>
}