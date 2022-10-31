import axios from "axios";

export default function BookForm (){
    return <>
        <h1>Form Book</h1>
        
        <form action="">
            <label htmlFor="">
                Title: <br />
                <input type="text" />
            </label>
            <br /><br />

            <label htmlFor="">
                Author: <br />
                <input type="text" />
            </label>
            <br /><br />

            <button>Submit</button>
        </form>
    </>
}