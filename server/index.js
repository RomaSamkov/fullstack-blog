import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Success" });
});

const { DB_HOST } = process.env;
const PORT = process.env.PORT || 3030;

const start = async () => {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(PORT, () => console.log(`Server sterted on Port:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
