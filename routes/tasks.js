const express = require('express')
const router = express.Router();
const {getAllTask, getTask, createTask, updateteTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateteTask).delete(deleteTask)

module.exports = router

// You create a function to be passed in the api request in the controllers folder