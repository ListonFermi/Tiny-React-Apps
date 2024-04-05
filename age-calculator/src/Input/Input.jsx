import React, { useEffect, useState } from 'react'
import './Input.css'

function Input() {

  function changeHandler(e) {
    const dob = e.target.value
    localStorage.setItem("DOB", new Date(dob).getTime());
  }

  const DOB = localStorage.getItem("DOB")

  return (
    <>{
      DOB ? '' : <div>
        <label htmlFor="">
          When did you born?
        </label>
        <input type="date" onChange={changeHandler} />
      </div>

    }


    </>
  )
}

export default Input
