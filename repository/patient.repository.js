import User from "../schema/user.schema.js";
import Report from "../schema/report.schema.js";

export default class PatientRepository {
  async add(newPatient) {
    try {
      const existingPatient = await User.findOne({
        userName: newPatient.userName,
      });
      if (existingPatient) {
        return;
      }
      const newPatientRecord = await User.create(newPatient);
      return newPatientRecord;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }

  async addNewReport(doctorId, id, status) {
    const patient = await User.findOne({ _id: id });
    const doctor = await User.findOne({ _id: doctorId });
    if (!patient) {
      return;
    }
    const report = await Report.create({
      patient: id,
      attendedDoctor: doctorId,
      covidStatus: status,
      date: new Date(),
    });

    if (report) {
      patient.reports.push(report);
      doctor.reports.push(report);
      patient.save();
      doctor.save();
    }

    return report;
  }
}
