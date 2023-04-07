import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ViewContextProvider } from './contexts/ViewContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ViewContextProvider> */}
    <BrowserRouter basename='/front'>
      <App />
    </BrowserRouter>
    {/* </ViewContextProvider> */}
  </React.StrictMode>
)
