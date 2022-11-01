import { useContext } from "react";
import FormData from "./FormData";
import ListData from "./ListData";
import { ProviderContext } from "./ProviderThing";


export default function App(){
  const ContextApp = useContext(ProviderContext)
  console.log(ContextApp.form);
  return <>
    <h1>Home</h1>

   
    
    <br /><hr /><br />

    <ListData />
    <br /><hr /><br />

    <FormData />

  </>
}