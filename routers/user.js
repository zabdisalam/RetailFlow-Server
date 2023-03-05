import { getUserTickets } from '../controllers/user.js';
import express from "express";
import {
  register,
} from "../controllers/auth.js";

const router = express.Router();

// The endpoint to retrieve tickets associated with a user
router.get('/:userId/tickets', getUserTickets);

// The endpoint to add tickets associated with a user
router.post("/", register);

export default router;