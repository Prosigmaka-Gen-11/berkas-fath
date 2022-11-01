import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProviderThing from './ProviderThing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderThing>
      <App />
    </ProviderThing>
  </React.StrictMode>
)
