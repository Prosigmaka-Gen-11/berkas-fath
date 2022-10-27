import axios from "axios"

function App() {
  // console.log("aku pertama")
  
  // setTimeout(() => {
  //   console.log("aku selesai nanti")
  // },1000)

  // console.log("aku terakhir")
  console.log("aku diatas");
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(1+1===3){
            resolve("berhasil")
          } else{
            reject("gagal")
          }
    },3000)
    
  })
  console.log("aku dibawah")

  myPromise
  .then(function(data){//run kalo resolve dipilih
    console.log(data)
  })
  .catch(function(err){
    console.log(err)
  })
  

  return <>
    <h1>hi fath</h1>
  </>
}

export default App
