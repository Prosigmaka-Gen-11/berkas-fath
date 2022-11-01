import Anak from "./Anak";

export default function Ibu (props){
    return <>
        <h1>ini Ibu</h1>
        <p>marganya: {props.marga} </p>
        <Anak />
    </>

}