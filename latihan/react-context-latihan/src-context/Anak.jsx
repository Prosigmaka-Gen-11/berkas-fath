import { useContext } from "react"
import { FamilyContext } from "./FamilyProvider"

export default function Anak(props){
    const ContextDariKakek = useContext(FamilyContext)
    //ContextDariKakek ni penggunaannya kaya props di tag html
    
    return <>
        <h3>Aku anak</h3>
        <p>margaku: {ContextDariKakek.marga} </p> 
    </>
}