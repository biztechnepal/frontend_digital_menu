import { TextField } from '@mui/material'
import { useState } from 'react'
import Router from './routes'
import ThemeProvider from './theme'
// import logo from './logo.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>
        <Router />
    </HelmetProvider>
  )
}

export default App
