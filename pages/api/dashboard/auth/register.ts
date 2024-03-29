import connectDB from "@/db/connect";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { registerUser } from "@/controller/dashboard/authController";

const app = express();

dotenv.config();

app.use(cors());

app.post("/api/dashboard/auth/register", registerUser);

const startServer = async (): Promise<void> => {
  try {
    await connectDB(process.env.URL);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

startServer();

export default app;
