import Task from "../models/Task.js"

export const newTask = async (req, res, next) => {
    try {
        const taskNew = new Task({
            name: req.body.name,
            description: req.body.description,
            createDate: req.body.createDate,
            priority: req.body.priority,
            assignedTo: req.body.assignedTo,
            reportedBy: req.body.reportedBy,
            status: req.body.status,
            comments: req.body.comments
        });
        const task = await taskNew.save();
        res.status(200).json(task._doc);
        console.log(task._doc)
    } catch(err){
        throw(err)
    }
}

//Retrieves a specific Task  
export const getTask = async(req, res, next)=> {
    const taskId = req.params.taskId;
  try {
    console.log(taskId);
    // Query the database to retrieve tickets associated with the user
    const task = await Task.find({ _id: taskId });
    console.log("One Task:");
    console.log(task);
  
    // Return the tickets as a JSON response
    res.status(200).json(task);
  } catch (error) {
    // Return an error response if the query fails
    res.status(500).json({ message: error.message="taskId not found" });
  
  }
  }
 
export const deleteTask = async (req, res) => {
    console.log(req, res);
    const taskID = req.params.taskID;
    const deletedTask = await Task.findByIdAndDelete(taskID)
    if(deletedTask) return res.status(200).send(`${deletedTask.name} has been deleted`)
    else return res.status(404).send("Not Found")
}

