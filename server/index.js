import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT || 3030;

app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(DB_HOST);
    // .then(() => console.log("DB OK"))
    // .catch((error) => console.log("DB Error", error));
    app.listen(PORT, () => console.log(`Server sterted on Port:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
