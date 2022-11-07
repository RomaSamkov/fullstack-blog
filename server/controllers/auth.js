import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (user) {
      return res.status(402).json({ message: "User is already exist" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      userName,
      password: hash,
    });

    await newUser.save();

    res.json({
      newUser,
      message: "Registration is successful",
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error in registration" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(403).json({ message: "This User does not exist" });
    }

    const isPassword = bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "10d" }
    );

    res.json({
      token,
      user,
      message: "Success Login",
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error in Authorization" });
  }
};

export const getCurrent = async (req, res) => {
  try {
  } catch (error) {}
};
