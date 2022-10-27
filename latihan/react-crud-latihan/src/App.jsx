import axios from "axios";
import { useEffect, useState } from "react";
import useForm from "./useForm";
import useList from "./useList";

const initialForm = {
  title: "",
  author: ""
}//diluar sini biar bisa bersihin form setelah disubmit

export default function App() {
  // const [articles, setArticles] = useState([]) //hook useList
  // const [formInput, setFormInput] = useState({ ...initialForm }) //id udh otomatis dibuat sama json server //hook useForm
  const {formInput, setFormInput,handleInput,prepareEdit} = useForm({...initialForm})
  const {articles, getArticles, deleteArticle}  = useList([])


  const isEdit = formInput.id

  // async function getArticles(){ //useList
  //   const res = await axios.get("http://localhost:3000/articles")
  //   setArticles(res.data)
  // }

  // function handleInput (evt, inputName){ //useForm
  //   setFormInput({ ...formInput,[inputName]: evt.target.value})
  // }

  async function handleSubmit (evt) { //no hook
    evt.preventDefault()

    if(isEdit){
      await axios.put(`http://localhost:3000/articles/${formInput.id}`, formInput) //bisa juga pake patch
    } else {
      await axios.post("http://localhost:3000/articles", formInput)
    }
    
    getArticles() //buat refresh list
    setFormInput({ ...initialForm})
  }

  // function prepareEdit (article){ //useform
  //   setFormInput({...article})
  // }

  // async function deleteArticle(id){ //tiap fungsi yg pake async dalemnya bisa di await //useList
  //   await axios.delete(`http://localhost:3000/articles/${id}`)
  //   getArticles() //gaperlu pake await karna bisa paralel
  // }

  //supaya setiap render bisa get articles maka masukkan ke useeffect
  useEffect(() =>{
    getArticles()
  },[])

  return <>
    <h1>Daftar Artikel</h1>

    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Author</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        {articles.map(article =>
          <tr key={article.id}>
          <td>{article.title}</td>
          <td>{article.author}</td>
          <td>
            <button onClick={() => prepareEdit(article)}>
              Edit
            </button>
            <button onClick={() => deleteArticle(article.id)}>
              Hapus
            </button>
          </td>
        </tr>
          )}
      </tbody>
    </table>

    <br /><hr /><br />
    <h1>Form Artikel</h1>

    <form onSubmit={handleSubmit}>
          <label >
            Judul <br />
            <input type="text"  value={formInput.title} onChange = {evt => handleInput(evt, "title")} />
          </label>
          <br /><br />

          <label >
            Penulis <br />
            <input type="text"  value={formInput.author} onChange = {evt => handleInput(evt, "author")} />
          </label>
          <br /><br />

          {/* button dalam form otomatis type="Submit" */}
          <button>
            submit
          </button>

    </form>
  </>
}
