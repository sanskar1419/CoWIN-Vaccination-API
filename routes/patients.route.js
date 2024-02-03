import express from "express";
import jwtAuth from "../middleware/jwt.middleware.js";
import PatientController from "../controller/patient.controller.js";

const patientRouter = express.Router();

const patientController = new PatientController();

patientRouter.post("/register", jwtAuth, (req, res) => {
  patientController.registerPatient(req, res);
});

export default patientRouter;
