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

    startDate: {
      type: Date,
      required: true,
      default: Date.now
    },

    endDate: {
      type: Date,
      required: true,
      default: Date.now() + 7*24*60*60*1000
    },

    priority: {
      type: String,
      enum: ["High","Medium", "Low"],
      required: true,
    },

    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    reportedBy: {
      type: Schema.Types.ObjectId,
          ref: 'User',
      required: true,
    },

      /**
       *   teamId: {
       *       type: Schema.Types.ObjectId,
       *       ref: 'Team',
       *       required: true
       *     },
       */

    status: {
      type: String,
      enum: ["ToDo","Inprogress", "InReview", "Completed"],
      required: true,
    },

    comments: [String],

  },
  
  { timestamps: true }

);

export default mongoose.model("Task", TaskSchema);
