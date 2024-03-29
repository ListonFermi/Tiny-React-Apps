import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function taskInputHandler(event) {
        setNewTask(event.target.value)
    }

    function addTaskHandler() {
        if (newTask.trim().length) {
            setTasks(t => [...t, newTask])
            setNewTask('') //empty the newTask state
        }
    }

    function moveUpHandler(index) {
        if (index === 0) return null

        const updatedTasks = [...tasks]

        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index - 1];
        updatedTasks[index - 1] = temp;

        return setTasks(updatedTasks)
    }

    function moveDownHandler(index) {
        if (index === tasks.length - 1) return null

        const updatedTasks = [...tasks]

        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index + 1];
        updatedTasks[index + 1] = temp;

        return setTasks(updatedTasks)
    }

    function deleteHandler(index) {
        const updatedTasks = [...tasks].filter((_, i) => i !== index)
        return setTasks(updatedTasks)
    }

    return (
        <div className="body">
            <div className="container">
                <h1 className="heading">To-Do List</h1>
                <div className="inputItems">
                    <input className="input" type="text" placeholder="Enter new task" onChange={taskInputHandler} maxLength="15" value={newTask} />
                    <button onClick={addTaskHandler} className="btn" >➕</button>
                </div>
                <table className="tableContainer">
                    {tasks.map((task, index) => {
                        return (
                            <tr key={index} >
                                <td className="tasks">{index + 1 + '.'}</td>
                                <td className="tasks">{task}</td>
                                <td className="tasks tasks-btn" onClick={moveUpHandler.bind(null, index)}>🔼</td>
                                <td className="tasks tasks-btn" onClick={moveDownHandler.bind(null, index)}>🔽</td>
                                <td className="tasks tasks-btn" onClick={deleteHandler.bind(null, index)}>🗑️</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default ToDoList