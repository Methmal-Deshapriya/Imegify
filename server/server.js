import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
connectDB();
app.get("/", (req, res) => {
  res.send("Back end is working");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
