import User from "../models/User.js";
import Task from '../models/Task.js'
import mongoose from "mongoose";

//Retrieves all Tasks assigned to a user
export const getAllUserTasks = async(req, res, next)=> {
    const userId = req.params.userId;
  try {
    // Query the database to retrieve tasks associated with the user
    const task = await Task.find({ assignedTo: mongoose.Types.ObjectId(userId) }).populate("assignedTo reportedBy");
    console.log("New Task:");
    console.log(task);

    // Return the task as a JSON response
    res.status(200).json(task);
  } catch (error) {
    // Return an error response if the query fails
    res.status(500).json({ message: error.message="UserId not found" });

  }
}

export const register = async(req, res) => {
    try {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accessToken: req.body.accessToken,
        teamId: req.body.teamId,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        refreshToken: req.body.refreshToken,
        microsoftId: req.body.microsoftId,
      });
      const user = await newUser.save();
      res.status(200).json(user._doc);
      console.log(user._doc);
    } catch (err) {
      throw err;
    }
  }

export const getAllUsers = async(req, res) => {
    const user = await User.find()
    console.log(user)
    return res.status(200).send(user)
}