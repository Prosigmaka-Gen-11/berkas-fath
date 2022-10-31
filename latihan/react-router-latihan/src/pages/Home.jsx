import { Link } from "react-router-dom"

export default function Home(){
    return <>
        <h1 className="text-3xl font-bold">ini home</h1>
        <Link to="/about">ke about</Link>
    </>
}