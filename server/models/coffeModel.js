import mongoose from "mongoose";
const CoffeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Coffe = mongoose.model("Coffe", CoffeSchema);
export default Coffe;

