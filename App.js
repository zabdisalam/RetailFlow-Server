import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routers/auth.js";
import userRoute from './routers/user.js';
import taskRoute from './routers/task.js'

import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/task", taskRoute)


const port = 8000;

app.listen(port, () => {
  connect();
  console.log(`RetailFlow Backend connected to port ${port}`);
});
