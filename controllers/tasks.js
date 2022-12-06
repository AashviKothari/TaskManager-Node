const Task = require('../models/Task')
const getAllTask = async (req,res) =>{
    try {
        const allTasks = await Task.find({})
        res.status(200).json({allTasks})
    } catch (error) {
        res.status(500).json({msg:error})  
    }
    
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
    res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error}) 
    }
    
}

const getTask = async (req,res)=>{
    try {
        const oneTask = await Task.findOne({_id:req.params.id})

        if(!oneTask){
            // Works if the number of characters are same
            return res.status(400).json({msg:'No task Found'})
        }
        res.status(200).json({oneTask})
    } catch (error) {
        res.status(500).json({msg:error}) 
    }
}

const updateteTask = async (req,res)=>{
   try {
    const {id:taskId} = req.params;
    const task = await Task.findByIdAndUpdate({_id:taskId},req.body,{
        new:true,
        runValidators: true,
    }
        )

    if(!task){
        // Works if the number of characters are same
        return res.status(400).json({msg:'No task Found'})
    }

    res.status(200).json({task})
   } catch (error) {
    res.status(500).json({msg:error})
   }
}

const deleteTask = async (req, res, next) => {
    try{
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(400).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({ task })
  }
  catch(error){
    res.status(500).json({msg:error})
  }
}


module.exports={
    getAllTask,
    getTask,
    deleteTask,
    updateteTask,
    createTask
}