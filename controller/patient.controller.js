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
        res.status(404).send("Patient already exist. Kindly create report");
      } else {
        res.status(201).send({
          Message: "Patient has been registered",
          Patient: createdRecord,
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
  async createReport(req, res) {
    try {
      const { status } = req.body;
      const { id } = req.params;
      const doctorId = req.userId;
      // console.log(doctorId);
      if (
        status != "Negative" &&
        status != "Traveled - Quarantine" &&
        status != "Symptoms - Quarantine" &&
        status != "Positive - Admit"
      ) {
        return res.status(400).send(`${status} is not valid`);
      }
      const createdReport = await this.patientRepository.addNewReport(
        doctorId,
        id,
        status
      );
      if (!createdReport) {
        res.status(404).send("Patient Not Exist. Kindly Register");
      } else {
        res.status(201).send({
          Message: "Report has been created",
          Report: createdReport,
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
  async patientAllReport(req, res) {
    try {
      const { id } = req.params;
      const reportData = await this.patientRepository.allReports(id);
      res.status(200).send({
        Message: "Here is your all reports",
        Reports: reportData,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
