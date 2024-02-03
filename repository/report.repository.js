// Importing necessary file, module and package , and creating instances of them
import Report from "../schema/report.schema.js";

// Defining DoctorRepository class and there method
export default class ReportRepository {
  // Method for filtering all reports based on status
  async filter(status) {
    try {
      const reports = await Report.find({ covidStatus: status });
      return reports;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
