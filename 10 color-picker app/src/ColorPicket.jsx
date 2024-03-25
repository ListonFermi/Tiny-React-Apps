import { useState } from "react"

function ColorPicker(){

    const [color, setColor] = useState('red')

    return (
        <>
            <div className="color-box"></div>
            <input type="color" />
        </>
    )
}

export default ColorPicker