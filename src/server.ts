import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db";
import indexRoutes from "./routes/index";

const app = express();

// routes
app.use("/", indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server is running on port 5000");

  //   connect db
  connectDB();
});
