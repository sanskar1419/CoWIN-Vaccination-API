import ReportRepository from "../repository/report.repository.js";

export default class ReportController {
  constructor() {
    this.reportRepository = new ReportRepository();
  }

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
