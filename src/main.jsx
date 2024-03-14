import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/index.jsx'

// Initiate theme
const currentTheme = localStorage.getItem('theme')
const htmlElement = document.querySelector('html');
htmlElement.classList.toggle(currentTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
