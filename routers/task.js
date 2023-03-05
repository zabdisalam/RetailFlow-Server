import express from 'express'
import { deleteTask, newTask } from '../controllers/task.js'
import { updateTicketStatus } from "../controller/task.js";

const router = express.Router()

router.post('/', newTask)

router.get('/:taskId', getTask);
router.delete('/:taskID' , deleteTask);
router.put('/:taskId', updateTicketStatus);
export default router;

