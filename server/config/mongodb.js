import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    if (!MONGODB_URL) {
      throw new Error("MONGODB_URL is not set");
    }
    await mongoose.connect(MONGODB_URL);

    console.log(`Connected to the database...`);
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.log(error);
  }
};

export default connectDB;
