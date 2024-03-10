import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Register from './Register.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter.jsx'

// Initiate theme
const currentTheme =  localStorage.getItem('theme')
const htmlElement = document.querySelector('html');
htmlElement.classList.toggle(currentTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
)
