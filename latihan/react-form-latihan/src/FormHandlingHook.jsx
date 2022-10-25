import { useState } from "react"
import useFormInput from "./useFormInput"

export default function FormHandlingHook(){
    

    const {formInput, handleFormInput} = useFormInput({
        name: "",
        age: ""
    })

    function handleSubmit(evt){
        evt.preventDefault()
        console.log(formInput)
        console.log(formInput.name)
    }

    return <>
        <h1>Hi fath, ini dari form handling Hook</h1>
        <p>name: {formInput.name}</p>
        <p>Age: {formInput.age}</p>
        
        <form onSubmit={evt => handleSubmit(evt)}>
            <label >
                Name <br />
                <input type="text" value={formInput.name} onChange={evt => handleFormInput(evt,'name')} />
            </label>

            <br /><br />
            <label>
                Age <br />
                <input type="number" value={formInput.age} onChange={evt => handleFormInput(evt,'age')}/>
            </label>

            <br /><br />
            <button>
                Submit
            </button>
        </form>
       
    </>
}