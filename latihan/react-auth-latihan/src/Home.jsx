import { Link } from "react-router-dom";

export default function Home (){
    return <>
        <h1>ini home</h1>
        <Link to="/about">about</Link>
        <br />
        <button>Logout</button>
    </>
}