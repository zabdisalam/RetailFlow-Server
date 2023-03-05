import User from "../models/User.js";
import Task from '../models/Task.js'
import Task from '../models/Task.js'
import User from '../models/User.js';

export const getUserTickets = async(req, res, next)=> {
    const userId = req.params.userId;
  try {
    // Query the database to retrieve tickets associated with the user
    const tickets = await Task.find({ assignedTo: userId }).exec();
    // Return the tickets as a JSON response
    res.json(tickets);
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
      });
      const user = await newUser.save();
      res.status(200).json(user._doc);
      console.log(user._doc);
    } catch (err) {
      throw err;
    }
  }