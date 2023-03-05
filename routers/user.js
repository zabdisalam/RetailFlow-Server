import { getAllUserTasks } from '../controllers/user.js';
import express from "express";
import {
  register,
} from "../controllers/user.js";


const router = express.Router();


// The endpoint to add tasks associated with a user
router.post("/", register);
// The endpoint to retrieve all tasks associated with a user
router.get('/:userId', getAllUserTasks);

export default router;