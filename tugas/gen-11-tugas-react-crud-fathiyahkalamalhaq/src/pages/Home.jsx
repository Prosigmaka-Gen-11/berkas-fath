import { Outlet, Link } from "react-router-dom";

export default function Home () {
    return <>
        <div className="bg-teal-100">
            <h1 className="text-3xl font-bold p-5 ">Home</h1>
            <p className="inline p-10 text-slate-600 ">Choose your activity :</p>
            <Link  to="/shop/form">
                <button 
                    type="button" 
                    className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Order Now
                </button>
            </Link>
            
            <Link to="/shop/list" >
                <button 
                    type="button" 
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Order List
                </button>
            </Link>
        </div>

        <br /><hr /><br />
        <Outlet/>
        
    </>
}