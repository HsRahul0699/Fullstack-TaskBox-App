import React,{useState} from 'react'
import { startAddTask } from '../actions/tasksAction'
import {useDispatch} from 'react-redux'

const TaskForm=(props)=>{
    const dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [completed,setCompleted]=useState(false)
    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        name=='title'?setTitle(value):setDescription(value)
    }
    const emptyInput=()=>{
        setTitle('')
        setDescription('')
        setCompleted(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('task submit')
        const taskObj={
            title,description,completed
        }
        dispatch(startAddTask(taskObj,emptyInput))
    }

    
        return (
            <div style={{border:'1px solid black',padding:'20px',width:'200px',backgroundColor:'#FFDAB9'}}>
                <h1>TaskForm</h1>
                <form onSubmit={handleSubmit}>

                    <input type='text' name='title' placeholder='Enter the task title' value={title} onChange={handleChange}/> <br /><br />

                    <textarea type='text' rows={10} name='description' placeholder='Enter the task description' value={description} onChange={handleChange}></textarea><br />
                    <label htmlFor='checkbox'>Task Completed?</label>
                    <input type='checkbox' name='checkbox'checked={completed} onChange={()=>{setCompleted(true)}} /><br />
                    <input type='submit' />

                </form>
            </div>
        )
}

export default TaskForm