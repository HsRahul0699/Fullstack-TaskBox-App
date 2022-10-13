import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startGetTasks,startDeleteTask,startEditTask } from '../actions/tasksAction'

const TaskItem=(props)=>{
    const {_id,title,description,completed}=props
    const dispatch=useDispatch()
    const [flag,setFlag]=useState(false)
    const [newtitle,setTitle]=useState(title)
    const [newDescription,setNewDescription]=useState(description)
    console.log('task item',props)
    const handleDeleteClick=(id)=>{
        dispatch(startDeleteTask(id))
    }
    
    const changeFlag=()=>{
        setFlag(!flag)
    }

    const handleChange=(e)=>{
        const name=e.target.name
        name=='title'?setTitle(e.target.value):setNewDescription(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const editedTask={title:newtitle,description:newDescription}
        dispatch(startEditTask(_id,editedTask))
        setFlag(!flag)
    }
    const handleCancel=()=>{
        setFlag(!flag)
    }
    return (
        <div >
             
            {!flag?<div style={{backgroundColor:completed?'green':'red',width:'500px',border:'solid 1px black', margin:'5px',borderRadius:'10px', textAlign:'center',padding:'10px'}}><h1 ><abbr onClick={changeFlag} title="Click to Edit" style={{textDecoration:'none'}}>{title}</abbr></h1>
                            <h2  onClick={changeFlag}>{description}</h2>
                            
                            <button onClick={()=>{
                            handleDeleteClick(_id)}}>Remove</button><br /></div>:
                            <div style={{backgroundColor:'#ffe4c4',width:'500px',border:'solid 1px black', margin:'5px',borderRadius:'10px', textAlign:'center',padding:'10px'}}>
                            <form onSubmit={handleSubmit}>
                                    <h1 style={{color:'blue'}}>Editing {title} :</h1>
                                    <h2>Title :</h2><input type='text' name='title' value={newtitle} onChange={handleChange}/> <br />
                                    <h2>Description :</h2><input type='text' name='description' value={newDescription} onChange={handleChange}/><br /><br />
                                    <input type='submit' value='save' />
                                    <button onClick={handleCancel}>Cancel</button>
                                </form>
                                </div>
                            } 
        </div>
    )
}

export default TaskItem