import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);//Password mchfer 
  req.body.password = hashedPass;
  const newUser = new User(req.body);
  const { email } = req.body;

  try {
    // lahne besh ylawej aala el email
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.status(400).json({ message: "this email is used" });

    const user = await newUser.save();
    // lahne besh naamel el token:
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        res.status(400).json("Invalid Password");
      } else {
        const token = jwt.sign(
          { email: user.email, id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }//ba3d nhare lezmo ya3ml login mara o5ra date limite 
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("Invalid Email");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
