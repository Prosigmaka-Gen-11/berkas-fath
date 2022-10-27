import { useState } from "react"
import axios from "axios"

export default function useList(data){
    const [articles, setArticles] = useState(data)

    async function getArticles(){ //useList
        const res = await axios.get("http://localhost:3000/articles")
        setArticles(res.data)
    }
    
    async function deleteArticle(id){ //tiap fungsi yg pake async dalemnya bisa di await //useList
        await axios.delete(`http://localhost:3000/articles/${id}`)
        getArticles() //gaperlu pake await karna bisa paralel
    }

    return {
        articles,
        getArticles,
        deleteArticle
    }
}