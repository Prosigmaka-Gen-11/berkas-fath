import axios from "axios"
import { useState } from "react"

export default function App (){
  const [message,setMessage] = useState('')

  function getAPIThenCatch(){
     axios.get("https://dog.ceo/api/breeds/image/random")
      .then(function(result){
        setMessage(result.data.message)
      })
      .catch(function(error){
        alert(error.message)
        console.log(error)
      })
  }

  async function getAPIAsyncAwait(){
    try{
      const response2 = await axios.get("https://dog.ceo/api/breeds/image/random")
       setMessage(response2.data.message)

    } catch (error){
       alert(error.message)
       console.log(error)
    }
 }


  return <>
    <h1>Tugas React Async-Promise</h1>
    <button onClick={getAPIThenCatch}>
      get API
    </button>
    <p>Random dog: {message}</p>
    <img src={message} alt="random dog" />
    <br />
    <hr />
    <button onClick={getAPIAsyncAwait}>
      get API Async Await
    </button>
    <br />
    <p>Random dog: {message}</p>
    <img src={message} alt="random dog" />
    <hr />
  </>
}