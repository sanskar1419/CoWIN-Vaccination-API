import DoctorRepository from "../repository/doctor.repository.js";
import DoctorModel from "../model/doctor.model.js";

export default class DoctorController {
  constructor() {
    this.doctorRepository = new DoctorRepository();
  }

  async registerDoctor(req, res) {
    try {
      //   console.log(req.body);
      const { name, userName, password } = req.body;
      const newUser = new DoctorModel(name, "Doctor", userName, password);
      const createdRecord = await this.doctorRepository.add(newUser);
      if (!createdRecord) {
        res.status(404).send("Doctor Already exist");
      } else {
        res.status(201).send(createdRecord);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
