import { useEffect, useState } from 'react'
import './App.css'
import Component1 from './Component'

function App() {
  const [count, setCount] = useState(1)
  const [userInfo, setUserInfo] = useState({
    id: 0,
    name: 'Empty',
    email: 'empty'
  })

  function incHandler() {
    setCount(c => c = c + 1)
  }

  function decHandler() {
    setCount(c => c = c - 1)
  }

  useEffect(() => {
    (async function publicAPI() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/'+count)
      const data = await response.json()
      console.log(data)
      setUserInfo(data)
    })()
  }, [count])



  return (
    <>
      <h1>{count}</h1>
      <button onClick={incHandler}>+</button>
      <button onClick={decHandler}>-</button>
      <Component1 data={userInfo}></Component1>
    </>
  )
}

export default App