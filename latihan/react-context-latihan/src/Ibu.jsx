import Anak from "./Anak";

export default function Ibu(props){
    return <>
        <h1>Aku ibu</h1>
        <p>marga Ibu: {props.marga}</p>
        <Anak marga = {props.marga} />
    </>
}