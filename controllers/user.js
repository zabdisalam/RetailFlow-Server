import User from "../models/User.js";

export const register = async(req, res) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      accessToken: req.body.accessToken,
      teamId: req.body.teamId,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
    });
    const user = await newUser.save();
    res.status(200).json(user._doc);
    console.log(user._doc);
  } catch (err) {
    throw err;
  }
}