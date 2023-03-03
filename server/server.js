import express from "express";
import mongoose from "mongoose";
import userRoute from "./router/userRoute.js";
import coffeRoute from "./router/coffeRoute.js";
import checkRoute from "./router/checkRoute.js";
import cors from "cors";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// taplodi el images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(
  "./assets/uploads",
  express.static(path.join(__dirname, "../client/public/assets/uploads/"))
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Image uploaded successfully!");
  } catch (error) {
    res.status(500).json("Error. Image not uploaded!");
  }
});
app.use(express.static("public"));
app.use("/images", express.static("images"));

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => console.log(`server is ready on port:${port}`));

// Routes:
app.use("/", userRoute);
app.use("/coffe", coffeRoute);
app.use("/check", checkRoute);
