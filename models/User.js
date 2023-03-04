import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {

  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
