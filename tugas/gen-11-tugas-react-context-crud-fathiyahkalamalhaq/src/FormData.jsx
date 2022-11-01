//buat form data yang ketika disubmit akan masuk kedalam context yang akan dipanggil di list data

import { useContext } from "react"
import { ProviderContext } from "./ProviderThing"
import axios from "axios"
import { useState, useEffect, createContext } from "react"


export default function FormData(){
    const [data, setData] = useState([])
    const {form, setForm} = useContext(ProviderContext)
   
    console.log(form)

    async function getList(){
        const res = await axios.get("http://localhost:3000/list")
        setData(res.data)
    }

    async function handleInput(e,inputName){
        setForm({ ...form, [inputName]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        await axios.post("http://localhost:3000/list", form)
        getList()
        setForm({...form})
        
    }
    useEffect(()=>{
        getList()
    },[])

    return <>
            <h1>Form Penambahan Produk</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Nama Item: <br />
                <input type="text" 
                value={form.nama} onChange = {e => handleInput(e,"nama")} />
            </label>
            <br /><br />

            <label>
                Harga Item: <br />
                <input type="number"
                value={form.harga} onChange = {e => handleInput(e,"harga")} />
            </label>
            <br /><br />

            <label>
                Deskripsi Item: <br />
                <textarea cols="30" rows="10"
                value={form.deskripsi} onChange = {e => handleInput(e,"deskripsi")} ></textarea>
            </label>
            <br /><br />

            <button>
                Tambahkan
            </button>
        </form>
        
        
        
    </>
}