import { useState } from "react";

export default function useForm(data) {
    const [formulir, setFormulir] = useState(data)

    function handleForm(evt,properties){
        setFormulir({...formulir,[properties]: evt.target.value})
    }

    return {
        formulir,
        handleForm
    }
}