import { useState } from "react"
import FormHandlingCheckbox from "./FormHandlingCheckbox"
import FormHandlingEfficient from "./FormHandlingEfficient"
import FormHandlingHook from "./FormHandlingHook"

export default function App(){
  const [name, setName] = useState("fath")
  const [prodi, setProdi] = useState("")

  function handleNameInput (evt){
    //console.log(evt.target.value) //perubahan bakal terekam di console
    setName(evt.target.value)
  }

  return <div>
    <FormHandlingCheckbox/>
    <FormHandlingHook />    
    <hr />
    <FormHandlingEfficient/>
    <br /><br />
    <hr />

    {/* checkbox */}
    <label >
      Nama Saya <br />
      <input 
      type="text" 
      value={name}
      onChange={(evt) => handleNameInput(evt)} />
      <br />
      {name}
    </label>
    <br />
    <label>
      Pilih prodi <br />
      <select value={prodi} onChange={(evt) => setProdi(evt.target.value)}>
        <option value="" disabled>- pilih prodi -</option>
        <option value="TI" >TI</option>
        <option value="TE" >TE</option>
        <option value="Fisika" >Fisika</option>
      </select>
    </label>
  </div>
}