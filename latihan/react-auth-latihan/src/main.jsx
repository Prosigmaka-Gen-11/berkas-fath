import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './About'
import Home from './Home'
import Login from './Login'

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/about", element: <About/> },
  { path: "/login", element: <Login /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
