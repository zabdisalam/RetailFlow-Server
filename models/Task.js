import mongoose, {Schema} from "mongoose";

const TaskSchema = new Schema(
  {
    name: {
      type: String,
      max: 64,
      min: 5,
      unique: true,
      required: true,
    },

    description: {
      type: String,
      max: 10000,
      min: 5,
      unique: true,
      required: true,
    },

    createDate: {
      type: Date,
      required: true,
      default: Date.now
    },

    priority: {
      type: String,
      enum: ["High","Medium", "Low"],
      required: true,
    },

    assignedTo: {
      type: String,
      max: 64,
      required: true,
    },

    reportedBy: {
      type: String,
      max: 64,
      required: true,
    },

    status: {
      type: String,
      enum: ["ToDo","Inprogress", "InReview", "Completed"],
      required: true,
    },

    Comments: [String],

  },
  
  { timestamps: true }
  
);

export default mongoose.model("Task", TaskSchema);
