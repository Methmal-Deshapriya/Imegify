import {
  registerUser,
  loginUser,
  userCredits,
} from "../controllers/userController.js";
import { userAuth } from "../middlewares/auth.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/credits", userAuth, userCredits);

export default userRouter;

//  localhost:5000/api/users/register
//  localhost:5000/api/users/login
//  localhost:5000/api/users/credits
