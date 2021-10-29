import './Todolist.css'
import React from 'react'
// import CheckIcon from '@material-ui/icons/Check'
// import EditIcon from '@material-ui/icons/Edit'
// import CloseIcon from '@material-ui/icons/Close'
import { AiOutlineCheck } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

import axios from 'axios'
function Todolist(props) {
    const todolist = props.todolist.map((task,index) => {
        const taskComplete = task => {
            axios.put(`http://localhost:8000/api/tasks/${task._id}` , {
                _id : task._id,
                todo: task.todo,
                isComplete : !task.isComplete
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }
        const removeTask = id => {
            axios.delete(`http://localhost:8000/api/tasks/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        } 
        return <li key = {index}>
            <div style = {{display : 'flex'}}>
               <AiOutlineCheck className = {task.isComplete ? 'isComplete' : 'checkicon'}/>
               <p className = {task.isComplete ? 'taskcomplete' : ''} onClick = {() => {
                   taskComplete(task)
               }}>{task.todo}</p>
            </div>
            <div>
                <GrEdit className = 'edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}/>
                <IoClose className = 'close' onClick = {() => {
                    removeTask(task._id)
                }}/>
            </div>
        </li>
    })
    return (
        <div className = 'tasklist'>
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default Todolist
