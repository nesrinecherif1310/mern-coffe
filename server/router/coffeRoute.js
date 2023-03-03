import {
  createCoffe,
  getAllCoffe,
  updateCoffe,
  getCoffe,
  updateImage,
} from "../controllers/coffeController.js";

import express from "express";
const coffeRoute = express.Router();

coffeRoute.post("/create", createCoffe);
coffeRoute.get("/getAll", getAllCoffe);
coffeRoute.get("/:id", getCoffe);
coffeRoute.patch("/update", updateCoffe);
coffeRoute.put("/update", updateImage);

export default coffeRoute;
