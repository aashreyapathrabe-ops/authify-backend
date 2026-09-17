import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Server Started on Port: ${port}`));