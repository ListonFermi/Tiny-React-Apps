import React, { useEffect, useState } from 'react'
import About from '../About'

function SideBar() {
  const [heading, setHeading] = useState('/')
  const [component,setComponent] = useState()

  function submitHandler(event) {
    event.preventDefault()
    setHeading('/' + event.target.heading.value)
  }

  useEffect(() => {
    console.log(heading)
    if (heading === '/about') {
      setComponent(<About />)
    }else{
      setComponent('')
    }
  }, [heading])

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input id='heading' type="text" />
        <button type='submit' >Go</button>
      </form>
      <a href={heading}>{heading}</a>
      {component}
    </div>
  )
}

export default SideBar
