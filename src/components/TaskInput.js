import React, { useContext, useEffect, useRef, useState } from 'react'
import { TaskListContext } from './context/TaskListContext'

const TaskInput = () => {
    const textInput = useRef(null);
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle(" ");
        } else {
            editTask(title, editItem.id);
        }
    }

    useEffect(() => {
        if (editItem !== null) {
            textInput.current.focus();
            setTitle(editItem.title)
        } else {
            setTitle('')
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                ref={textInput}
                onChange={handleChange}
                value={title}
                type="text"
                className="task-input"
                required
                placeholder="Add Task..." />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">{editItem ? "Edit Task" : "Add Task"}</button>
                <button type="submit" onClick={clearList} className="btn clear-btn ">Clear</button>
            </div>
        </form>
    )
}
export default TaskInput
