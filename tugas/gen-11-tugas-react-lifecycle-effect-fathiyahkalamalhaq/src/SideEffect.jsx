import React, { useEffect, useState } from "react";

export default function SideEffect(props){
    const [payment,setPayment] = useState("")
    const [donationType,setDonationType] = useState("")
    const [nickname,setNickname] = useState("")
    const [display,setDisplay] = useState("")

    useEffect(()=>{
        const database = {
            payment: "BCA",
            donationType: "Social Activity",
            nickname: "The Woman",
            display: ""
        }

        setPayment(database.payment)
        setDonationType(database.donationType)
        setNickname(database.nickname)

        return () => {
            setPayment("")
            setDonationType("")
            setNickname("")
        }
    },[])

    useEffect(()=>{
        
        setDisplay(`${props.name} donated ${props.donasi} via ${payment} for ${donationType} on behalf of ${nickname}`)
    
    },[payment,donationType,nickname])

    useEffect(()=>{
        return () => {
            console.log("everytime there's a change")
        }
    })

    return <>
        <button 
        className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>setPayment('Western Union')}>
            {payment} Change
        </button>

        <button 
        className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>setDonationType('Pandemic')}>
            {donationType} Change
        </button>

        <button 
        className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>setNickname('You-Know-Who')}>
            {nickname} Change
        </button>
        <br />
        <div className="my-5 ml-14 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Summary of Side Effect</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{display}</p>
        </div>
    </>
}