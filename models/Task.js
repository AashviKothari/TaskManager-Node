const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // Make key value pairs in form of json
    // validation is required to make sure about the inclusion of al lelements
    name:{
        type:String,
        required:[true,'Please include a name'],
        trim:true,
        maxlength:[20,'name cannot exceed 20 chars']
    },
    completed:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('Task',TaskSchema)