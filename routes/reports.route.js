// Importing necessary file, module and package , and creating instances of them
import express from "express";
import ReportController from "../controller/report.controller.js";

// Initializing Router
const reportRouter = express.Router();

// Creating Instance of DoctorController
const reportController = new ReportController();

// Handling all request
reportRouter.get("/:status", (req, res) => {
  reportController.filterReports(req, res);
});

// Exporting reportRouter
export default reportRouter;
