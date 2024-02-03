import "../env.js";
import DoctorRepository from "../repository/doctor.repository.js";
import DoctorModel from "../model/doctor.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default class DoctorController {
  constructor() {
    this.doctorRepository = new DoctorRepository();
  }

  async registerDoctor(req, res) {
    try {
      //   console.log(req.body);
      const { name, userName, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = new DoctorModel(name, "Doctor", userName, hashPassword);
      const createdRecord = await this.doctorRepository.add(newUser);
      if (!createdRecord) {
        res.status(404).send("Doctor Already exist");
      } else {
        res.status(201).send({
          Message: "Doctor has been registered",
          Doctor: createdRecord,
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
  async signIn(req, res) {
    try {
      const { userName, password } = req.body;
      const doctor = await this.doctorRepository.findDoctor(userName);
      if (!doctor) {
        return res.status(400).send("Invalid Credentials");
      }
      const passwordMatch = await bcrypt.compare(password, doctor.password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            userId: doctor._id,
            userName: doctor.userName,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).send(token);
      } else {
        return res.status(400).send("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
