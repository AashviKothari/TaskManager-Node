const express = require('express')
const app = express();
const cors = require('cors')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(cors())

//Get Request is Used to Get All the tasks displayed

app.use('/api/v1/tasks', tasks)



const port = 3000;

const start = async() =>{
    try {
        await connectDB(process.env.MONGO)
        app.listen(port, console.log(`Server Running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()


/*
To get all tasks ==> /api/v1/tasks
To get specific task ==> /api/v1/tasks/:id

To post and create a new task ==> /api/v1/task with .post request
*/ 