import axios from 'axios'

export const startGetTasks=()=>{
    return (dispatch,getState)=>{
        axios.get('http://localhost:3040/api/tasks')
        .then((tasks)=>{
            console.log(tasks)
            dispatch(getTasks(tasks.data))
       })
       .catch((err)=>{
           console.log(err.message)
       })
    }
}

const getTasks=(tasks)=>{
    return {
        type:'GET_TASKS',
        payload:tasks
    }
}

export const startAddTask=(taskObj,emptyInput)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3040/api/tasks',taskObj)
        .then((task)=>{
            console.log(task)
            if(task.data.title==undefined||task.data.description==undefined){
                alert('Title or description cannot be empty')
            }
            else {
            dispatch(addTask(task.data))
            emptyInput()
            }
       })
       .catch((err)=>{
           console.log(err.message)
       })
    }
}

const addTask=(task)=>{
    return {
        type:'ADD_TASK',
        payload:task
    }
}

export const startEditTask=(id,body)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3040/api/tasks/${id}`,body)
        .then((task)=>{
            console.log(task)
            dispatch(editTask(task.data))
       })
       .catch((err)=>{
           console.log(err.message)
       })
    }
}

const editTask=(data)=>{
    return {
        type:'EDIT_TASK',
        payload:data
    }
}

export const startDeleteTask=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3040/api/tasks/${id}`)
        .then((task)=>{
            console.log(task)
            dispatch(deleteTask(task.data))
       })
       .catch((err)=>{
           console.log(err.message)
       })
    }
}

const deleteTask=(task)=>{
    return {
        type:'DELETE_TASK',
        payload:task
    }
}

