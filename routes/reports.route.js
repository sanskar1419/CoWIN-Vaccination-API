import express from "express";
import ReportController from "../controller/report.controller.js";

const reportRouter = express.Router();

const reportController = new ReportController();

reportRouter.get("/:status", (req, res) => {
  reportController.filterReports(req, res);
});

export default reportRouter;
