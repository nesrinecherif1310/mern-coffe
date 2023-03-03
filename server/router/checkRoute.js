import { check } from "../controllers/checkController.js";
import express from "express";

const checkRoute = express.Router();

checkRoute.post("/add", check);

export default checkRoute;

