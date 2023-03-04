import express from "express";
import {
  register,
} from "../controllers/user.js";

import {
  getUserTickets,
} from "../controllers/user.js";

const router = express.Router();

router.post("/", register);
// The endpoint to retrieve tickets associated with a user
router.get('/:userId/tickets', getUserTickets);

export default router;