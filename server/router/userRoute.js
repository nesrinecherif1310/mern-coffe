import { register, login } from "../controllers/authController.js";
import express from "express";
const userRoute = express.Router();

userRoute.post("/auth/register", register);
userRoute.post("/auth/login", login);

export default userRoute;
