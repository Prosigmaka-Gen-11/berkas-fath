import axios from "axios"
import { useEffect, useState } from "react";

const initialForm = {
  nama: "",
  hp: 0,
  tanggal: "",
  item: [],
  opsi: "",
  jasa: "",
  saran: ""
}

const items = ['gamis','kerudung','mukena']


export default function App() {
  const [belanja, setBelanja] = useState([])
  const [formInput, setFormInput] = useState({ ...initialForm })
  const isEdit = formInput.id

  async function getBelanja(){ 
    const res = await axios.get("http://localhost:3000/registrasi")
    setBelanja(res.data)
  }

  function handleInput (evt, inputName){ 
      setFormInput({ ...formInput,[inputName]: evt.target.value})
  }

  async function handleSubmit (evt) { 
    evt.preventDefault()

    if(isEdit){
      await axios.put(`http://localhost:3000/registrasi/${formInput.id}`, formInput)
    } else {
      await axios.post("http://localhost:3000/registrasi", formInput)
    }
    
    getBelanja() 
    setFormInput({ ...initialForm})
  }

  function prepareEdit (belanja){ 
    setFormInput({...belanja})
  }

  async function deleteBelanjaan(id){ 
    await axios.delete(`http://localhost:3000/registrasi/${id}`)
    getBelanja() 
  }

  useEffect(() =>{
    getBelanja()
  },[])

  function handleCheckbox(evt){
    const {value, checked} = evt.target

    if (checked){
      setFormInput({ ...formInput, item:[...formInput.item, value]})
    } else {
      const newMulti = formInput.item.filter(item => item !== value)
      setFormInput({...formInput, item: newMulti})
    }
  }
  return <>
    <h1 className="text-3xl font-bold font-sans text-center p-5">Daftar Pembelian Product</h1>
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" className="py-3 px-6">Nama</th>
        <th scope="col" className="py-3 px-6">No HP</th>
        <th scope="col" className="py-3 px-6">Tanggal Pemesanan</th>
        <th scope="col" className="py-3 px-6">Item</th>
        <th scope="col" className="py-3 px-6">Opsi Pembayaran</th>
        <th scope="col" className="py-3 px-6">Jasa Pesan Antar</th>
        <th scope="col" className="py-3 px-6">Kritik dan saran</th>
        <th scope="col" className="py-3 px-6">Aksi</th>
      </tr>
      </thead>
      <tbody>
        {belanja.map((i) =>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          key={i.id}>
          <td className="py-4 px-6">{i.nama}</td>
          <td className="py-4 px-6">{i.hp}</td>
          <td className="py-4 px-6">{i.tanggal}</td>
          <td className="py-4 px-6">{i.item.join(", ")}</td>
          <td className="py-4 px-6">{i.opsi}</td>
          <td className="py-4 px-6">{i.jasa}</td>
          <td className="py-4 px-6">{i.saran}</td>
          <td className="py-4 px-6">
            <button className="mr-2" onClick={() => prepareEdit(i)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            </button>

            <button onClick={() => deleteBelanjaan(i.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </button>
          </td>
        </tr>
          )}
      </tbody>
    </table>
    <br />
    <hr />
    <br />
    </div>

    <div className="w-2/3 mx-auto">
        <h1 className="text-3xl font-bold font-sans text-center p-5">Form Pembelian Product</h1>
      <form 
      className="pl-24 text-sm"
      onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Nama Pemesan: <br />
              <input 
                type="text"
                className="block p-2 w-2/3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formInput.nama}
                onChange = {evt => handleInput(evt, "nama")} />
            </label>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              No Handphone: <br />
              <input 
                type="number"
                value={formInput.hp}
                className="block p-2 w-2/3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange = {evt => handleInput(evt, "hp")} />
            </label>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Tanggal Pengiriman: <br />
              <input type="date"
                value={formInput.tanggal}
                className="block p-2 w-2/3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange = {evt => handleInput(evt, "tanggal")} />
            </label>
            
            <div >
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item yang dibeli: </p>
              {items.map(
                item =>
                <label 
                className=" text-sm font-medium text-gray-900 dark:text-gray-300"
                key={item} >
                  <input 
                    type="checkbox"
                    value={item}
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={formInput.item.indexOf(item) !== -1}
                    onChange={handleCheckbox} /> 
                  {item} <br />
                </label>
              )}
            </div>
            
            
          </div>
          <div>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Opsi Pembayaran <br />
              <select 
                className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formInput.opsi}
                onChange = {evt => handleInput(evt, "opsi")}>
                <option value="" disabled>- pilih opsi pembayaran -</option>
                <option value="BSI">BSI</option>
                <option value="BNI">BNI</option>
              </select>
            </label>

            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Jasa Pesan Antar <br />
              <input type="radio"
                name="jasa" 
                className="w-4 h-4 m-2 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                value="JNE"
                onChange={evt => handleInput(evt, "jasa")} 
                />
              <label 
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
              value="JNE">JNE</label> <br />
              <input type="radio"
                name="jasa" 
                className="w-4 h-4 m-2 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                value="JNT"
                onChange={evt => handleInput(evt, "jasa")}
              />
              <label 
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
              value="JNT">JNT</label> <br />
            </label>

            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Kritik dan saran <br />
            <textarea 
              className="block p-2.5 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Leave a comment..."
              value={formInput.saran}
              onChange = {evt => handleInput(evt, "saran")}
              cols="30" rows="5"></textarea>
            </label>

          </div>
        </div>
        

        
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
          Kirim
        </button>
      </form>
    </div>
    


  </>
}