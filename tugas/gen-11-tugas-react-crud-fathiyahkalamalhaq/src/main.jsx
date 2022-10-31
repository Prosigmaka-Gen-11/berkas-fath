import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import ShopDetail from './pages/ShopDetail'
import ShopForm from './pages/ShopForm'
import ShopList from './pages/ShopList'


const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/shop", element: <Home/>, children: [
    { path: "list", element: <ShopList/>},
    { path: "form", element: <ShopForm/>,children:[
      { path: ":shopId", element:<ShopForm/>}
    ]},
    { path: ":shopId", element: <ShopDetail/>},
  ] },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
