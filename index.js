// Importing necessary file, module and package , and creating instances of them
import express from "express";
import doctorRouter from "./routes/doctors.route.js";
import patientRouter from "./routes/patients.route.js";

// Initializing Express
const app = new express();

// Defining route and redirecting them for the request
app.use("/api/doctors", doctorRouter);
app.use("/api/patients", patientRouter);

// Exporting app
export default app;
