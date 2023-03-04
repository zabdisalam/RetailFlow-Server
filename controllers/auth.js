import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Joi from "joi";
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
  // try {
  //   const newUser = new User({
  //     accessToken: req.body.accessToken,
  //     organization: req.body.organization,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });
  //   const user = await newUser.save();
  //   res.status(200).json(user._doc);
  //   console.log(user._doc);
  // } catch (err) {
  //   throw err;
  // }
};

export const login = async (req, res, next) => {
  // try {
  //   const user = await User.findOne({ email: req.body.email });
  //   if (!user) return res.status(404).send(`"username" not found`);

  //   const isPassCorrect = bcrypt.compareSync(req.body.password, user.password);
  //   if (!isPassCorrect)
  //     return res.status(401).send("username or password is incorrect");

  //   const token = jwt.sign(user._doc, process.env.JWT_SECRET);
  //   const userWithToken = {...user._doc, token}
  //   res.status(200).json(userWithToken);
  // } catch (err) {
  //   throw err;
  // }
};
