import axios from "axios";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function About(){
    const { token } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    function getProducts(){
        // axios.get("url mau kemana", {configuration})
        // axios.post/put/patch("url kemana", data, {configuration})
        axios.get('https://dummyjson.com/auth/products',{ //karna mau tes autentifikasi maka ditambah /auth sebelum products
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res =>{
            setProducts(res.data.products)
        }).catch(err =>{
            console.log(err.response)
        })
    }

    useEffect(()=>{
        getProducts()
    },[])
    return <>
        <h1>ini about</h1>
        <Link to="/">home</Link>

        <ul>
            {products.map(product => 
                <li>{product.title} - ${product.price}</li>
            )}
            
        </ul>

    </>
}