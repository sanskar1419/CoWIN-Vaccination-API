import PatientRepository from "../repository/patient.repository.js";
import PatientModel from "../model/patient.model.js";

export default class PatientController {
  constructor() {
    this.patientRepository = new PatientRepository();
  }

  async registerPatient(req, res) {
    try {
      //   console.log(req.body);
      const { name, userName } = req.body;
      const newPatient = new PatientModel(name, "Patient", userName);
      const createdRecord = await this.patientRepository.add(newPatient);
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
