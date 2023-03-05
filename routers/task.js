import express from 'express'
import { newTask } from '../controllers/task.js'

const router = express.Router()

router.post('/', newTask)

export default router;

