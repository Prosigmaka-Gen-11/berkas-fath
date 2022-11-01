import { createContext,useState } from "react";

export const FamilyContext = createContext() //export const membuat dia bisa diakses diluar FamilyProvider

export default function FamilyProvide(props){
    const [marga, setMarga] = useState('bambang')

    return <FamilyContext.Provider value={
        {
            'marga':marga, //bisa pake string bisa engga
            setMarga:setMarga
        }
    } >
            {props.children}
    </FamilyContext.Provider>
}