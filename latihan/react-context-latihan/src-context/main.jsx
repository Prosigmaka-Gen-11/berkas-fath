import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FamilyProvide from './FamilyProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FamilyProvide>
         <App />
    </FamilyProvide>
   
  </React.StrictMode>
)
