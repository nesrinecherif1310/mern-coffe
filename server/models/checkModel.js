import mongoose from "mongoose";

const CheckSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    Coffes: { type: Object, required: true },
    total: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Check = mongoose.model("CheckOut", CheckSchema);
export default Check;
