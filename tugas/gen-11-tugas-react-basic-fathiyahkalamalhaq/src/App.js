import React from "react"
import Donatur from "./Donatur"
import ButtonName from "./ButtonName"

export default function App(){
  const [name,setName] = React.useState("Fath")
  const [gender, setGender] = React.useState("Female")
  const [donasi,setDonasi] = React.useState("yes")
  const ubahGender = (a) => {
    alert(a);
  }
  const ubahDonasi = (a) => {
    alert(a);
  }

  return <div>
    <div className="w-4/6 mx-auto mt-10 text-center">
      <h1 className="text-3xl font-serif mb-5">Contributor's Biodata </h1>
    </div>
    
    <div className="w-1/2 mx-auto overflow-x-auto relative shadow">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Name</th>
            <th>Gender</th>
            <th>Donate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-6">{name}</td>
            <td>{gender}</td>
            <td><Donatur donasi={donasi}/></td>
          </tr>
          <tr>
            <td className="py-3">
              <ButtonName pasdiklik={()=>setName("Sherlock")}/>
            </td>
            <td>
            <button type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
             onClick={
              function(){
                setGender("Male")
                ubahGender('the gender will change to \'male\', are you sure?')
              }}>Change gender</button>
            </td>
            <td>
            <button type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={
              function(){
                setDonasi("no")
                ubahDonasi('the subject will change to \'no\', are you sure?')
              }}>not donate</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}