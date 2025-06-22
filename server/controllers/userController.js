import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ success: true, token, user: { name: user.name } });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "user not found" });
    }
    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "wrong password" });
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({
      success: true,
      token,
      user: { name: user.name },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const userCredits = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      credits: user.creditBalance,
      user: {
        name: user.name,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
