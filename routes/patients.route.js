import express from "express";
import jwtAuth from "../middleware/jwt.middleware.js";
import PatientController from "../controller/patient.controller.js";
import patientRegistrationDataMiddleware from "../middleware/patientRegistrationData.middleware.js";

const patientRouter = express.Router();

const patientController = new PatientController();

patientRouter.post(
  "/register",
  jwtAuth,
  patientRegistrationDataMiddleware,
  (req, res) => {
    patientController.registerPatient(req, res);
  }
);

patientRouter.post("/:id/create_report", jwtAuth, (req, res) => {
  patientController.createReport(req, res);
});

patientRouter.get("/:id/all_reports", (req, res) => {
  patientController.patientAllReport(req, res);
});

export default patientRouter;
