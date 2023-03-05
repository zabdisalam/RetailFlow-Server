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

export const deleteTask = async (req, res) => {
    console.log(req, res);
    const taskID = req.params.taskID;
    const deletedTask = await Task.findByIdAndDelete(taskID)
    if(deletedTask) return res.status(200).send(`${deletedTask.name} has been deleted`)
    else return res.status(404).send("Not Found")
}
