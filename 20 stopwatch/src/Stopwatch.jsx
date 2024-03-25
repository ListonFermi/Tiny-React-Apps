import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const startTimeRef = useRef(0)
    const intervalId = useRef(null)

    useEffect(() => {
        if (isRunning) {
            intervalId.current = setInterval(() => setElapsedTime(new Date() - startTimeRef.current), 10)
        }
        return ()=>clearInterval(intervalId.current)
    }, [isRunning])


    function formattedTime(elapsedTime) {
        
        let minutes = Math.floor(elapsedTime / (1000 * 60) %60 )
        let seconds = Math.floor(elapsedTime / 1000 %60)
        let milliseconds = Math.floor(elapsedTime%1000 /10)

        minutes = minutes.toString().padStart(2, "0")
        seconds = seconds.toString().padStart(2, "0")
        milliseconds = milliseconds.toString().padStart(2, "0")

        return `${minutes}:${seconds}:${milliseconds}`
    }

    function start() {
        setIsRunning(true)
        startTimeRef.current= new Date() -elapsedTime
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }

    return (
        <div className="stopwatch-container">
            <div className="stopwatch">{formattedTime(elapsedTime)}</div>
            <div className="buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch