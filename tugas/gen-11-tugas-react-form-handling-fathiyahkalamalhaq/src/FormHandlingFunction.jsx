import React from "react";
import useForm from "./useForm";

export default function FormHandlingFunction(){
    const {formulir,handleForm} = useForm({
        name: "",
        gender: "",
        totalDonasi: "",
        payment: "",
        category: "",
        donationDate:"",
        textMessage:""
    })
    
    function handleSubmit(evt){
        evt.preventDefault()
        console.log(formulir)
    }

    return <>
        
        <div className="grid grid-cols-2 gap-5 w-4/6 mx-auto">
            <div>
                <h1 className="text-3xl font-bold font-serif">Donation Form</h1>
                <form onSubmit={evt => handleSubmit(evt)}> 
                    <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-300" >
                        Name <br />
                        <input className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={formulir.name} onChange={evt => handleForm(evt,'name')} />
                    </label>

                    <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Gender <br />
                        <input className="mt-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="radio" name="gender" value="Male" onChange={evt => handleForm(evt,'gender')} />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label><br />
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="radio" name="gender" value="Female" onChange={evt => handleForm(evt,'gender')} />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label><br />
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="radio" name="gender" value="Prefer not to tell" onChange={evt => handleForm(evt,'gender')} />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prefer not to tell</label><br />
                    </label>

                    <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Total Donation <br />
                        <input className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         type="number" value={formulir.totalDonasi} onChange={evt => handleForm(evt,'totalDonasi')}/>
                    </label>

                    <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Payment <br />
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formulir.payment} onChange={evt => handleForm(evt,'payment')}>
                            <option value="" disabled>- choose payment-</option>
                            <option value="bsi">BSI</option>
                            <option value="bri">BRI</option>
                            <option value="bjb">BJB</option>
                        </select>
                    </label>

                    <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Donation Date <br />
                        <input className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="date" value={formulir.donationDate} onChange={evt => handleForm(evt,'donationDate')} />
                    </label>

                    <label className="block mb-5 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Category <br />
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="checkbox" value="Yatim dan Dhuafa" onChange={evt => handleForm(evt,'category')}/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yatim dan Dhuafa</label> <br />
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="checkbox" value="Social Activity" onChange={evt => handleForm(evt,'category')}/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Social Activity</label><br />
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="checkbox" value="Natural Disaster" onChange={evt => handleForm(evt,'category')}/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Natural Disaster</label><br />
                    </label>
                    
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea value={formulir.textMessage} onChange={evt => handleForm(evt,'textMessage')}  id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Submit
                    </button>
                </form>

            </div>
            <div>
                <h1 className="text-3xl font-bold font-serif">Summary</h1>
                <p>Name: {formulir.name}</p> 
                <p>Gender: {formulir.gender}</p> 
                <p>Total Donation: {formulir.totalDonasi}</p> 
                <p>Donation Date: {formulir.donationDate}</p> 
                <p>Donation Category: {formulir.category}</p> 
                <p>Payment: {formulir.payment}</p> 
                <p>Message: {formulir.textMessage}</p>
            </div>
        </div>
        
    </>
}