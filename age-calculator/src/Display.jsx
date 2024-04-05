import React, { useEffect, useState } from 'react'
import './Display.css'

function Display() {
    const [age, setAge] = useState(0)
    const DOB = localStorage.getItem("DOB")

    useEffect(()=>{
        const intervalID = setTimeout(()=>{
            const currentTime = Date.now()
            let age= (currentTime-DOB)/(1000*60*60*24*365) 
            age = Number(age.toFixed(9))
            setAge(age)
        },100)
        return ()=>clearInterval(intervalID)
    }, [age]  )

      return (
    <div>
      <h2>{age}</h2>
    </div>
  )
}

export default Display
