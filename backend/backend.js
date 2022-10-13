const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const port =3040

app.use(express.json())
app.use(cors())

const Schema=mongoose.Schema
mongoose.connect('mongodb://localhost:27017/taskbox')
    .then(()=>{
        console.log('Successfully connected to DB')
    })
    .catch((err)=>{
        console.log(err.message)
    })

const taskSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task=mongoose.model('Task',taskSchema)

//Api's

app.get('/api/tasks',(req,res)=>{
    Task.find()
    .then((tasks)=>{
         res.json(tasks)
    })
    .catch((err)=>{
        res.json(err.message)
    })
})

app.get('/api/tasks/:id',(req,res)=>{
    const id=req.params.id
    Task.findById(id)
    .then((task)=>{
        res.json(task)
   })
   .catch((err)=>{
       res.json(err.message)
   })
})

app.post('/api/tasks',(req,res)=>{
    const body=req.body
    const task=new Task(body)
    task.save()
    .then((task)=>{
        res.json(task)
   })
   .catch((err)=>{
       res.json(err.message)
   })
})


app.delete('/api/tasks/:id',(req,res)=>{
    const id=req.params.id
    Task.findByIdAndDelete(id)
    .then((task)=>{
        res.json(task)
   })
   .catch((err)=>{
       res.json(err.message)
   })
})

app.put('/api/tasks/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    Task.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((task)=>{
        res.json(task)
   })
   .catch((err)=>{
       res.json(err.message)
   })
})

app.listen(port,()=>{
    console.log('server is running on port',port)
})