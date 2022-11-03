import { logout } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";

export default function Home () {
    const dispatch = useDispatch()

    return <>
        <h1> Home </h1>

        <button onClick={()=>dispatch(logout())}>
            Logout
        </button>
    </>
}