// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining Report schema
const reportSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Patient is required"],
  },
  attendedDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Attended Doctor is required"],
  },
  covidStatus: {
    type: String,
    enum: {
      values: [
        "Negative",
        "Traveled - Quarantine",
        "Symptoms - Quarantine",
        "Positive - Admit",
      ],
      message: "{VALUE} is not supported",
    },
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
});

// Creating variable through which we are going to access db
const Report = mongoose.model("Report", reportSchema);

// Exporting Report Model
export default Report;
