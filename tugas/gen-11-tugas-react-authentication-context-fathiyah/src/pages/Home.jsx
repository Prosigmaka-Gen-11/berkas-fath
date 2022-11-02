import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../AuthProvider"

export default function Home(){
    const { userData, token, logout } = useContext(AuthContext)

    function handleLogout(){
        logout()
    }
    return <>
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex md:order-2">
                    <button
                        onClick={handleLogout}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Logout
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" >
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/">
                                <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/post">
                                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Post</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/todo">
                                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Activities</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="mt-20 p-10 w-1/2 ">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                Welcome back, <span className="text-sky-400">{userData.firstName}</span> 
            </h3>
            <p className="mt-5 w-1/2 bg-sky-100" id = "overflowText">your token: {token} </p>
        </div>
    
        <hr />
        <Outlet/>
        
    </>
}