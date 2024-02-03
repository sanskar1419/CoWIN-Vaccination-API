// Importing necessary file, module and package , and creating instances of them
import express from "express";
import swagger from "swagger-ui-express";
import cors from "cors";

import loggerMiddleware from "./middleware/logger.middleware.js";
import doctorRouter from "./routes/doctors.route.js";
import patientRouter from "./routes/patients.route.js";
import reportRouter from "./routes/reports.route.js";
import bodyParser from "body-parser";
import apiDocs from "./swagger.json" assert { type: "json" };

// Initializing Express
const app = new express();

app.use(cors());
app.use(loggerMiddleware);

// Using body parser to parse client data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Defining route and redirecting them for the request
app.use("/api/doctors", doctorRouter);
app.use("/api/patients", patientRouter);
app.use("/api/reports", reportRouter);
app.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

app.use((req, res) => {
  res
    .status(404)
    .send(
      "API not found. Please check our documentation for more information at http://127.0.0.1:8000/api-docs/"
    );
});

// Exporting app
export default app;
