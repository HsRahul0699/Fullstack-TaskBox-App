const tasksInitialValue=[]

const tasksReducer=(state=tasksInitialValue,action)=>{
    switch(action.type){
        case 'GET_TASKS':{
            return [...action.payload]
        }

        case 'ADD_TASK':{
            return [...state,{...action.payload}]
        }

        case 'DELETE_TASK':{
            const res=state.filter((task)=>{
                return task._id!==action.payload._id
            })
            return [...res]
        }
        case 'EDIT_TASK':{
            return state.map((task)=>{
                if(task._id==action.payload._id){
                    return {...action.payload}
                }
                else {
                    return {...task}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default tasksReducer