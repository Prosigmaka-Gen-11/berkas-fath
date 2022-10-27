import { useState } from "react";
import axios from "axios";



export default function useForm (data){
    const [formInput, setFormInput] = useState(data)  

    function handleInput (evt, inputName){ //useForm
        setFormInput({ ...formInput,[inputName]: evt.target.value})
    }

    function prepareEdit (article){ //useform
        setFormInput({...article})
    }

    return {
        formInput,
        setFormInput,
        handleInput,
        prepareEdit
    }
}