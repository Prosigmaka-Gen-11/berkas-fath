//akan menampilkan data dari context yg disubmit di form

import { useEffect } from "react"
import { useContext } from "react"
import { ProviderContext } from "./ProviderThing"
import axios from "axios"
import { useState } from "react"

const initialForm = {
    nama: "",
    harga: 0,
    deskripsi: ""
  }

export default function ListData(){
    const [data, setData] = useState([])
    // const [form,setForm] = useState({})
    // const {form, setForm} = useContext(ProviderContext)
    
    async function getList(){
        const res = await axios.get("http://localhost:3000/list")
        setData(res.data)
    }
    console.log(data)

    useEffect(()=>{
        getList()
    },[data])

    return <>
        <h1>Ini list data</h1>

        <table border="1" width="50%">
            <thead>
                <tr>
                    <th>Nama Item</th>
                    <th>Harga</th>
                    <th>Deskripsi</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((i) => 
                        <tr key={i.id}>
                            <td>{i.nama}</td>
                            <td>{i.harga}</td>
                            <td>{i.deskripsi}</td>
                        </tr>
                        )
                }
                
            </tbody>
        </table>
    </>
}