import mongoose, { Schema } from 'mongoose';

const TeamSchema = new Schema(
  {
      name: {
          type: String,
          required: true,
          min: 4,
          max: 64
      },
      members: [{
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true
      }],
      manager: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true
      }
  },
  { timestamps: true }
);

export default mongoose.model("Team", TeamSchema);
