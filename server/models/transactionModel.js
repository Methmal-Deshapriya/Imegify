import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  payment: {
    type: Boolean,
    default: false,
  },
});

const transactionModel = mongoose.model("transaction", transactionSchema);

export default transactionModel;
