// Importing necessary file, module and package , and creating instances of them
import User from "../schema/user.schema.js";
import Report from "../schema/report.schema.js";

// Defining PatientRepository class and there method
export default class PatientRepository {
  // Method for adding Patient to the db
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

  // Method for adding report to db
  async addNewReport(doctorId, id, status) {
    try {
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

      console.log(doctor);
      if (report) {
        patient.reports.push(report);
        doctor.reports.push(report);
        patient.save();
        doctor.save();
      }

      return report;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }

  // Method for getting all report of particular patient
  async allReports(id) {
    try {
      const reports = await Report.find({ patient: id })
        .populate("attendedDoctor")
        .sort("date");
      // console.log(reports);

      const reportData = reports.map((report) => {
        return {
          "Doctor Name": report.attendedDoctor.name,
          "Covid Status": report.covidStatus,
          "Check up date and time": report.date.toLocaleString(undefined, {
            timeZone: "Asia/Kolkata",
          }),
        };
      });
      return reportData;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
