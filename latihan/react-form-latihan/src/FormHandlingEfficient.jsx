import { useState } from "react"

export default function FormHandlingEfficient(){
    
    // const fruits = [
    //    'banana', 'papaya','mango'
    // ]
    // //spread operator buat naikin array 1 level keluar
    // const newFruits = ['apple','pineapple', ...fruits]
    
    // console.log(newFruits)

    const [formInput, setFormInput] = useState({
        title: "",
        author: "",
        category: "",
        content: "",
        publish_date: ""
    })

    function handleFormInput(evt,propName){
        setFormInput({ ...formInput, [propName]: evt.target.value })
    }

    return <>
        <h1>Hi fath, ini dari form handling efficient</h1>
        <p>Title: {formInput.title}</p>
        <p>Author: {formInput.author}</p>
        <p>Category: {formInput.category}</p>
        <p>Content: {formInput.content}</p>
        <p>Publish Date: {formInput.publish_date}</p>
        
        
        <label >
            Title <br />
            <input type="text" value={formInput.title} onChange={evt => handleFormInput(evt,'title')} />
        </label>
        <br /><br />
        <label>
            Author <br />
            <input type="text" value={formInput.author} onChange={evt => handleFormInput(evt,'author')}/>
        </label>

        <br /><br />
        <label >
            category <br />
            <select value={formInput.category} onChange={evt => handleFormInput(evt,'category')} >
                <option value="agama">Agama</option>
                <option value="politik">politik</option>
                <option value="kebudayaan">kebudayaan</option>
            </select>
        </label>
        <br /><br />
        <label>
            Publish Date <br />
            <input type="date" value={formInput.publish_date} onChange={evt => handleFormInput(evt,'publish_date')} />
        </label>
        <br /><br />
        <label >
            Content <br />
            <textarea value={formInput.content} onChange={evt => handleFormInput(evt,'content')}></textarea>
        </label>
        <br /><br />
        <button>
            Submit

        </button>
    </>
}