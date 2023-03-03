import Coffe from "../models/coffeModel.js";

// create Coffe

export const createCoffe = async (req, res) => {
  const newCoffe = new Coffe(req.body);
  try {
    const savedCoffe = await newCoffe.save();
    res.status(200).json(savedCoffe);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get All coffe

export const getAllCoffe = async (req, res) => {
  const coffe = await Coffe.find();
  res.send(coffe);
};

// get one Coffe

export const getCoffe = async (req, res) => {
  const coffe = await Coffe.findOne({ _id: req.params.id });
  if (coffe) {
    res.send(coffe);
  } else {
    res.status(404).json("Coffe not Found");
  }
};

// update coffe

export const updateCoffe = async (req, res) => {
  const coffe = await Coffe.findById(req.body._id);
  // if coffe exist:
  if (coffe) {
    coffe.name = req.body.name || coffe.name;
    coffe.description = req.body.description || coffe.description;
    coffe.price = req.body.price || coffe.price;
    coffe.image = req.body.image || coffe.image;

    const updateCoffe = await coffe.save();
    res.send({
      _id: updateCoffe._id,
      name: updateCoffe.name,
      description: updateCoffe.description,
      price: updateCoffe.price,
    });
  } else {
    res.status(401).send({ message: "Coffe not found" });
  }
};

// update Image

export const updateImage = async (req, res) => {
  if (req.body.coffeId === req.params.id) {
    try {
      await Coffe.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Image Updated");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("Error!");
  }
};
