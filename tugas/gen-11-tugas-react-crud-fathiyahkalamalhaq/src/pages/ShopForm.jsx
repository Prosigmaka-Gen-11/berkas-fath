import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export default function BookForm (){
    const [belanja, setBelanja] = useState([])
    const [formInput, setFormInput] = useState({ ...initialForm })
    const param = useParams()
    const isEdit = formInput.id

    async function getBelanja(){ 
        const res = await axios.get("http://localhost:3000/registrasi")
        setBelanja(res.data)
    }

    function handleInput (evt, inputName){ 
        setFormInput({ ...formInput,[inputName]: evt.target.value})
        console.log(inputName)
    }

    async function prepareEdit (){ 
        const res = await axios.get("http://localhost:3000/registrasi/"+param.shopId)
        setFormInput(res.data)
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
        console.log(formInput)
    }

    function handleCheckbox(evt){
        const {value, checked} = evt.target
    
        if (checked){
          setFormInput({ ...formInput, item:[...formInput.item, value]})
        } else {
          const newMulti = formInput.item.filter(item => item !== value)
          setFormInput({...formInput, item: newMulti})
        }
    }

    useEffect(()=>{
        prepareEdit()
    },[])

    return <>
        <div className="w-2/3 mx-auto shadow-md py-5">
            <h1 className="text-cyan-700 text-3xl font-bold font-sans text-center p-5">Form Pembelian Product</h1>
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