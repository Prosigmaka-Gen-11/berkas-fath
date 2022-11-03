import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import ProtectedLayout from './authentication/ProtectedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Login from './authentication/Login'

import { Provider } from "react-redux"
import store from './redux/store'

const router = createBrowserRouter([
  { path: "", element: <ProtectedLayout />,children:[
    { path: "/", element: <Home />},
    { path: "/about", element: <About />},
  ] },
  { path: "/login", element: <Login/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
