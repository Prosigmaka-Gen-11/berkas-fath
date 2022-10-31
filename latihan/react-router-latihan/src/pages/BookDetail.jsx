import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BookDetail () {
    const params = useParams()
    const [book, setBook] = useState({})

    async function getBookDetail (){
        const res = await fetch('http://localhost:3000/books/'+params.bookId)
        const data = await res.json()
        setBook(data)
    }

    useEffect(()=>{
        getBookDetail()
    },[])
    return <>
        <h1>Book Details</h1>
        <ul>
            <li>Title: {book.title}</li>
            <li>Author: {book.author}</li>
        </ul>
    </>
}   