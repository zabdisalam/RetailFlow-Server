import express from 'express'
import { getTask } from '../controllers/task.js';
import { deleteTask, newTask } from '../controllers/task.js'

const router = express.Router()

router.post('/', newTask)
// The endpoint to retrieve specific task associated with a user
router.get('/:taskId', getTask);
router.delete('/:taskID' , deleteTask)

export default router;

