import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function BookList () {
    const [books,setBooks] = useState([])


    async function getBooks () {
        const res = await fetch("http://localhost:3000/books")
        const data = await res.json() //buat convert ke json
        setBooks(data)
    }

    useEffect(() => {
        getBooks()
    },[]) 


    return <>
        <h1>Book List</h1>
        <table border="1" width = "100%">
            <thead>
                <tr>
                    <th>Judul</th>
                    <th>Penulis</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book =>
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>
                            <Link to={'/book/'+book.id}>
                                <button>Detail</button>
                            </Link>
                            
                            <button>Edit</button>
                            <button>Hapus</button>
                        </td>
                    </tr>
                )}
            </tbody>
            
            
           
        </table>
    </>
}