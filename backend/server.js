import dotenv from "dotenv";
import cors from "cors";
import express, { Router } from "express";
import mongoose from "mongoose";
import apiroutes from "./route/chatRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

import connectDB from "./config/db.js";
connectDB();

app.use("/api", apiroutes);

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const server = app.listen(PORT , "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("close", () => {
  console.log("Express server has closed!");
});

server.on("error", (err) => {
  console.error("Server error:", err);
});




