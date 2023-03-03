import Check from "../models/checkModel.js";
// create Checkout
export const check = async (req, res) => {
  const newCheck = new Check(req.body);

  try {
    const savedCheck = await newCheck.save();
    res.status(200).json(savedCheck);
  } catch (error) {
    res.status(500).json(error);
  }
};
