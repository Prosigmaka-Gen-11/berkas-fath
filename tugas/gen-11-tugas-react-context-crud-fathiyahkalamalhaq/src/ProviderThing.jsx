import { useState } from "react"
import { createContext } from "react"

//inisiasi variabel context yg bisa diakses dari luar
export const ProviderContext = createContext()

export default function ProviderThing(props){
    const [form, setForm] = useState({
        nama: "",
        harga: 0,
        deskripsi: ""
    })

    return <ProviderContext.Provider value={{form: form, setForm:setForm}} >
        {props.children}
    </ProviderContext.Provider>
}