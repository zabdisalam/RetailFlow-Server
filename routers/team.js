import express from 'express'
import {newTeam} from '../controllers/team.js'

const router = express.Router()

router.post('/', newTeam);

export default router;