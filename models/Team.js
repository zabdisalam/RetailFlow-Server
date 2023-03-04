import mongoose from "mongoose";

const TeamSchema = mongoose.Schema(
  {
    //Demo
    // accessToken: {
    //   type: String,
    //   min: 64,
    //   unique: true,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    // },
    // organization: {
    //   type: String,
    //   min: 6,
    //   unique: true,
    //   required: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   min: 6,
    //   max: 1050,
    // },
    // terminal: [
    //   {
    //     name: String,
    //     number: String,
    //     location: String,
    //   },
    // ],
  },
  { timestamps: true }
);

export default mongoose.model("Team", TeamSchema);
