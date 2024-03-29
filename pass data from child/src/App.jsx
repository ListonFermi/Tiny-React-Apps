import Cricketers from "./Cricketers"
import {useState} from 'react'

function App() {

  const [name, setName] = useState('')

  function changeName(newName){
    setName(newName)
  }
  console.log(name);

  return (
    <>
      <Cricketers passFn={changeName} ></Cricketers>
    </>
  )
}

export default App
