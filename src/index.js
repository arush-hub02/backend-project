// require("dotenv").config({path: './env});

import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import connectDB from "./db/db.js";

connectDB();

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("server is running on port ", process.env.PORT);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
