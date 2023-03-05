import express from 'express'
import {newTeam, getTeamTasks, getUsersUnderteam} from '../controllers/team.js'

const router = express.Router()

router.post('/', newTeam);
router.get('/:teamId', getTeamTasks);
router.get('/users/:teamId', getUsersUnderteam)

export default router;