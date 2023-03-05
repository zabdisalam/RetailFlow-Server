import mongoose, { Schema } from 'mongoose';

const TeamSchema = new Schema(
  {
      name: {
          type: String,
          required: true,
          min: 4,
          max: 64
      },
  },
  { timestamps: true }
);

export default mongoose.model("Team", TeamSchema);
