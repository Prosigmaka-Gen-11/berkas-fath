import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import { useEffect,useState,useContext} from "react";

export default function Todo(){
    const { token } = useContext(AuthContext)
    const [todos, setTodos] = useState([])

    function getTodos() {
        axios.get('https://dummyjson.com/auth/todos',{
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res =>{
            setTodos(res.data.todos)
            console.log(res.data.todos)
        }).catch(err =>{
            console.log(err.response)
        })
    }

    useEffect(()=>{
        getTodos()
    },[])

    return <>
        <h1 className="text-center p-10 text-4xl font-bold text-gray-900 dark:text-white">Todo</h1>

        <p className="mb-5 text-center tracking-wider text-gray-500 md:text-lg dark:text-gray-400">Check all your done and undone todos! </p>
        <div className="w-1/2 mx-auto p-10 rounded-xl shadow-md bg-sky-50">
            {todos.map(i => 
            <div className=" ">
                <label key={i.id} className="inline-block p-3">
                    <input 
                        type="checkbox" 
                        className="p-2 w-4 h-4" 
                        defaultChecked={i.completed} />
                    <label className="px-2 text-gray-600 hover:text-teal-700">
                        {i.todo}
                    </label>
                </label> 
            </div>
            )}
        </div>    
    </>
}