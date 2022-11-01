import { useState } from "react"
import Ayah from "./Ayah"
import Ibu from "./Ibu"

export default function App() {
  const [marga, setMarga] = useState('Nasution')
  
  return <>
    <h1>ini kakek</h1>
    <button onClick={()=> setMarga('simanjuntak')}>
      Ubah marga
    </button>

    <hr />
    <Ayah marga = {marga}/>

    <hr />
    <Ibu marga = {marga} />
  </>
}