import express from 'express'
import { newTask } from '../controllers/task.js'
import { getTask } from '../controllers/task.js';

const router = express.Router()

router.post('/', newTask)
// The endpoint to retrieve specific task associated with a user
router.get('/:taskId', getTask);

export default router;

