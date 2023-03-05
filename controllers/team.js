import Team from "../models/Team.js";
import Task from "../models/Task.js";
import mongoose from "mongoose";

export const getUsersUnderteam = async(req, res, next)=> {
}

export const newTeam = async (req, res) => {
  try {
    const teamNew = new Team({
      name: req.body.name,
    });
    const team = await teamNew.save();
    res.status(200).json(team._doc);
    console.log(team._doc);
  } catch (err) {
    throw err;
  }
};

//Retrieves all Tasks assigned to a Team
export const getTeamTasks = async (req, res, next) => {
  const teamId = req.params.teamId;
  try {
    const tasks = await Task.find({
      teamId: mongoose.Types.ObjectId(teamId),
    }).populate("assignedTo reportedBy");
    console.log("Get Tasks Under Team", tasks);
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message="TeamID not found" });
  }
};
