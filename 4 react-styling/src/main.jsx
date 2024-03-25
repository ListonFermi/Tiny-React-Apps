/*
There are 3 ways we can apply styling in React
(Not using external libraries)

1. External  eg: Button1
2. Module eg: Button2
3. Inline eg: Button3

*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
