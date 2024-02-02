import express from "express";
import DoctorController from "../controller/doctor.controller.js";
import doctorRegistrationDataMiddleware from "../middleware/doctor.registration.data.middleware.js";

const doctorRouter = express.Router();

const doctorController = new DoctorController();

doctorRouter.post("/register", doctorRegistrationDataMiddleware, (req, res) => {
  doctorController.registerDoctor(req, res);
});
doctorRouter.post("/login", (req, res) => {
  doctorController.signIn(req, res);
});

export default doctorRouter;
