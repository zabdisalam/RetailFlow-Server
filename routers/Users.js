import { getUserTickets } from '../controllers/user.js';

import express from "express";
const router = express.Router();
import Task from '../models/Task.js'

// The endpoint to retrieve tickets associated with a user
router.get('/:userId/tickets', getUserTickets);

export default router;