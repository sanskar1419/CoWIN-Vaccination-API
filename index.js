// Importing necessary file, module and package , and creating instances of them
import express from "express";
import doctorRouter from "./routes/doctors.route.js";
import patientRouter from "./routes/patients.route.js";
import reportRouter from "./routes/reports.route.js";
import bodyParser from "body-parser";

// Initializing Express
const app = new express();

// Using body parser to parse client data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Defining route and redirecting them for the request
app.use("/api/doctors", doctorRouter);
app.use("/api/patients", patientRouter);
app.use("/api/reports", reportRouter);

// Exporting app
export default app;
