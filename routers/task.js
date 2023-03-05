import express from 'express'
import { deleteTask, newTask, updateTicketStatus, getTask, updateTicketAssignedTo } from '../controllers/task.js'

const router = express.Router()

router.post('/', newTask)

router.get('/:taskId', getTask);
router.delete('/:taskID' , deleteTask);
router.put('/status/:taskId', updateTicketStatus);
router.put('/assignedto/:taskId', updateTicketAssignedTo)
export default router;

