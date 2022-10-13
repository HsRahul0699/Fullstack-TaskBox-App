import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startGetTasks } from '../actions/tasksAction'
import TaskItem from './taskItem'
const TaskList=(props)=>{
    const tasks=useSelector(state=>state.tasks)
    const [search,setSearch] = useState('')   
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startGetTasks())
    },[])

    
    return (
        <div style={{textAlign:'center'}}>
            <h1 >Listing tasks - {tasks.length}</h1>
            {tasks.length?
            <>
            <form>
                <input type='text' value={search} placeholder='Search a Task' onChange={(e)=>{setSearch(e.target.value)}} />
            </form>
            
        { tasks.filter(ele=>ele.title.toLowerCase().includes(search.toLowerCase())).length?
        tasks.filter(ele=>ele.title.toLowerCase().includes(search.toLowerCase())).map((task)=>{
                return(
                    <div style={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}} key={task._id}>
                        <TaskItem {...task}  />
                        
                    </div>
                
                )
            }):<h1>No Results found</h1>}
        
         </>:<h1>No Tasks found. Add your first task</h1>   
        }
               
        </div>
    )
}

export default TaskList