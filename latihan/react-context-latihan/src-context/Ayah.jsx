import { useContext } from "react"
import Anak from "./Anak"
import { FamilyContext } from "./FamilyProvider"

export default function Ayah(){
    const {marga,setMarga} = useContext(FamilyContext)
    return <>
        <h1>Aku Ayah</h1>
        <button onClick={()=> setMarga('Bakrie')}>
            Ubah marga dari ayah
        </button>
        <p>marga ayah: {marga} </p>
        <Anak />
    </>
}