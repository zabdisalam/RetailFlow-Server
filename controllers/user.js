import Task from '../models/Task.js'

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