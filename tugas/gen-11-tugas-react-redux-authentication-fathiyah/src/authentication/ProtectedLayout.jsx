import { useSelector,useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout(){
    const authState = useSelector( state => state.auth )
    const isLogin = authState.isLogin
    
    console.log(isLogin)
    if(isLogin) {
        return <Outlet/>
    } else{
        return <Navigate to="/login" />
    }
}