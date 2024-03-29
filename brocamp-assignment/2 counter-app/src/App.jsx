import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  function incHandler() {
    setCount(c => c = c + 1)
  }

  function decHandler() {
    setCount(c => c = c - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incHandler}>+</button>
      <button onClick={decHandler}>-</button>
    </>
  )
}

export default App