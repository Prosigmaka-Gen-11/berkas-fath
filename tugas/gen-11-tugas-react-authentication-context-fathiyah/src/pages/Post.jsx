import { useContext, useState, useEffect} from "react";
import { AuthContext } from "../AuthProvider";
import axios from "axios";


export default function Post(){
    const { token } = useContext(AuthContext)
    const [posts, setPost] = useState([])

    function getPosts() {
        axios.get('https://dummyjson.com/auth/posts',{
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res =>{
            setPost(res.data.posts)
        }).catch(err =>{
            console.log(err.response)
        })
    }

    useEffect(()=>{
        getPosts()
    },[])
    return <>
        <h1 className="text-center p-10 text-4xl font-bold text-gray-900 dark:text-white">Today's Post</h1>
        
            {posts.map(post => (
            <div key={post.id} className="max-w-3xl mb-5 mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div  className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {post.body}
                    </p>
                    <div className="flex gap-4">
                        <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            {post.tags.join(', ')}</span>
                    </div>
                </div>
            </div>
            ))}
    </>
}