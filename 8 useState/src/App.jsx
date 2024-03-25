import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState(false)

  const reset = () => setCount(0)

  const decrementBtn = () => setCount(count - 1)

  const incrementBtn = () => setCount(count + 1)

  const toggleBtn = () => setMode(!mode)
  

  return (
    <>
      <div className="container"> 
        <div className="count">{count}</div>
        <button onClick={decrementBtn} className="btn" >Decrement</button>
        <button onClick={reset} className="btn">Reset</button>
        <button onClick={incrementBtn} className="btn">Increment</button>
      </div>
      <div>
        <button onClick={toggleBtn} className="btn">{mode ? "off":"on"}</button>
      </div>
    </>
  )
}

export default App
