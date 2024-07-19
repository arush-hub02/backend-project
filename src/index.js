// require("dotenv").config({path: './env});

import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
}); 

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });
