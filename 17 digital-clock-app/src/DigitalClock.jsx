import { useEffect, useState } from "react"

function DigitalClock() {

    const [time, setTime] = useState(new Date())

    // useEffect(function, [dependencies])
    useEffect(()=>{
        const intervalId= setInterval(()=>{console.log('heyy');  setTime(new Date)},1000)
        return ()=> clearInterval(intervalId)
    },[])

    function formattedTime(time) {
        const hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiam = hours >= 12 ? "PM" : "AM"  

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiam}`
    }

    function padZero(time){
        return time<10? '0'+time: time
    }


    return (
        <div className="clock-container">
            <div className="clock">{formattedTime(time)}</div>
        </div>
    )

}

export default DigitalClock