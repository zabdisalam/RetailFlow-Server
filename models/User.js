import mongoose, { Schema}  from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 4,
      max: 64
    },
    lastName: {
      type: String,
      required: true,
      min: 4,
      max: 64
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 4,
      max: 64
    },
    accessToken: {
      type: String,
      min: 64,
      required: true,
      unique: true
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
