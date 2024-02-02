// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, "Name should be minimum of 3 character"],
    maxLength: [25, "Name can't be greater than 25 characters"],
  },
  userType: {
    type: String,
    enum: ["Patient", "Doctor"],
    required: [
      true,
      "Need to mention type of user, it either can be Patient or Doctor",
    ],
  },
  userName: {
    type: String,
    minLength: [3, "User Name should be minimum of 3 character"],
    maxLength: [15, "User Name can't be greater than 15 characters"],
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    },
  ],
});

// Creating variable through which we are going to access db
const User = mongoose.model("User", userSchema);

// Exporting User Model
export default User;
