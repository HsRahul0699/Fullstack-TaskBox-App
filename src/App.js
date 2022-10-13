import React from 'react'
import TaskForm from './components/taskForm'
import TaskList from './components/taskList'
const App=(props)=>{
  return (
    <div style={{border:'solid 1px black',padding:'20px'}}>

      <h1 style={{textAlign:'center'}}>TaskBox</h1>
      <div style={{width: '50%',float: 'left'}}>
      <TaskList />
      </div>
      <div style={{width: '50%',float: 'right', marginTop:'100px'
}}>
      <TaskForm />
      </div>
      
    </div>
  )
}

export default App