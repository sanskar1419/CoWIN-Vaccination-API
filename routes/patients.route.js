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

export default patientRouter;
