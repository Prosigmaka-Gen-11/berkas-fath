import { useContext } from "react"
import Ayah from "./Ayah"
import { FamilyContext } from "./FamilyProvider"
import Ibu from "./Ibu"

export default function App(){
    const ContextDariFamily = useContext(FamilyContext)

    return <>
        <h1>hai aku kakek</h1>

        <button onClick={() => ContextDariFamily.setMarga('Simanjuntak')}>
            Ubah marga
        </button>
        <hr />
        <Ayah />
        <hr />

        <Ibu marga = {ContextDariFamily.marga}/>

    </>
}