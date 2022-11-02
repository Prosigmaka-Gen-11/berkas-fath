import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AuthProvider from './AuthProvider'
import Login from './Login'
import Home from './pages/Home'
import Post from './pages/Post'
import Todo from './pages/Todo'
import Protected from './Protected'

const router = createBrowserRouter([
  {path: "", element: <Protected/>, children:[
    {path: "/", element: <Home/>,children:[
      {path: "/post", element: <Post/>},
      {path: "/todo", element: <Todo/>}
    ]},
    
  ]} ,

  {path: "/login", element: <Login/>}
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router}/>
  </AuthProvider>
 
)
