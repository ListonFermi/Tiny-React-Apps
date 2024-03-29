import { useRef } from "react"
import { useState } from "react"

function Form() {
    const inputRef = useRef(null)

    function handleChange(e) {
        inputRef.current = e.target.value



    }

    function submitHandler(e){

    }

    return (
        <>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" ref={inputRef} onChange={handleChange} />
                <button type="submit" onSubmit={submitHandler}>Submit</button>
            </form>
        </>
    )

}

default export Form