import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'

// Initiate theme
const currentTheme =  localStorage.getItem('theme')
const htmlElement = document.querySelector('html');
htmlElement.classList.toggle(currentTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppRouter/>
  </React.StrictMode>,
)
