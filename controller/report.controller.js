// Importing necessary file, module and package , and creating instances of them
import ReportRepository from "../repository/report.repository.js";

// Defining ReportRepository class and there method
export default class ReportController {
  constructor() {
    //  Creating ReportRepository instance
    this.reportRepository = new ReportRepository();
  }

  // Method for filtering all reports based on status
  async filterReports(req, res) {
    try {
      const { status } = req.params;
      //   console.log(status);
      if (
        status != "Negative" &&
        status != "Traveled - Quarantine" &&
        status != "Symptoms - Quarantine" &&
        status != "Positive - Admit"
      ) {
        return res.status(400).send(`${status} is not valid`);
      }
      const reports = await this.reportRepository.filter(status);
      if (!reports) {
        res.status(404).send(`No reports with ${status} status`);
      } else {
        res.status(200).send({
          Message: `List of all reports with status : ${status} `,
          reports: reports,
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
