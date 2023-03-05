import express from "express";
import { deleteTask, newTask } from '../controllers/task.js'

const router = express.Router()

router.post('/', newTask)
router.delete('/:taskID' , deleteTask)

export default router;

