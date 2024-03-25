/*
  Props are read only properties that are shared between components
  A parent component can send data to a child component.
  <Component key=value/>

    propTypes : To set a data type to the components. If string/number is changed, 
    It just shows error in console.
    propDefault : To set a default data types to be used when no argument is given.
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
