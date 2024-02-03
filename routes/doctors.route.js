// Importing necessary file, module and package , and creating instances of them
import express from "express";
import DoctorController from "../controller/doctor.controller.js";
import doctorRegistrationDataMiddleware from "../middleware/doctor.registration.data.middleware.js";

// Initializing Router
const doctorRouter = express.Router();

// Creating Instance of DoctorController
const doctorController = new DoctorController();

// Handling all request
doctorRouter.post("/register", doctorRegistrationDataMiddleware, (req, res) => {
  doctorController.registerDoctor(req, res);
});
doctorRouter.post("/login", (req, res) => {
  doctorController.signIn(req, res);
});

// Exporting doctorRouter
export default doctorRouter;
