import express from 'express'
import { deleteTask, newTask, getTask, updateTicketStatus} from '../controllers/task.js'

const router = express.Router()

router.post('/', newTask)

router.get('/:taskId', getTask);
router.delete('/:taskID' , deleteTask);
router.put('/:taskId', updateTicketStatus);
export default router;

