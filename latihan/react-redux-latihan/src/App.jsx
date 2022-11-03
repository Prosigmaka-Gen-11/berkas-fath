import { useSelector, useDispatch } from "react-redux"
import { ubahJudul, ubahSemua, ubahTipe } from "./BookSlice"

export default function App(){
  const bookState = useSelector(state => state.book)
  const dispatch = useDispatch()

  console.log(bookState.author)
  return <>
      <h1>My Book</h1>
      <ul>
        <li>Title: {bookState.title}</li>
        <li>Title: {bookState.type}</li>
        <li>Title: {bookState.author}</li>
      </ul>

      <button onClick={()=>dispatch(ubahJudul())}>
        ubah judul
      </button>

      <br /><br />
      {/* ubahTipe('Light Novel') akan langsung ganti nama tipe */}
      <button onClick={()=>dispatch(ubahTipe('Light Novel'))}> 
        ubah tipe
      </button>
      <button onClick={()=>dispatch(ubahTipe({
          tipeBuku: 'Light Novel',
          penulis: 'orang'
        }))}> 
        ubah tipe 2
      </button>
      <button onClick={()=>dispatch(ubahSemua())}>
        ubahSemua
      </button>
    </>
}