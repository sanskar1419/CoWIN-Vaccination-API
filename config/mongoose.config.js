// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";
import "../env.js";

// Accessing environment variable using process.env
const URL = process.env.DB_URL;

// Configuring mongoose for connecting to MongoDb
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb connected using mongoose");
  } catch (error) {
    console.log(error);
    throw new Error("Error in connecting to DB");
  }
};
