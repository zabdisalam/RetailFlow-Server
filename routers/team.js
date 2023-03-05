import express from 'express'
import {newTeam, getTeamTasks} from '../controllers/team.js'

const router = express.Router()

router.post('/', newTeam);
router.get('/:teamId', getTeamTasks);

export default router;