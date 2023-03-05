import Team from '../models/Team.js'

export const newTeam = async(req, res)=>{
    try {
        const teamNew = new Team({
            name: req.body.name
        });
        const team = await teamNew.save()
        res.status(200).json(team._doc);
        console.log(team._doc);
    } catch(err){
        throw err;
    }
}