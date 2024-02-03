import ReportRepository from "../repository/report.repository.js";

export default class ReportController {
  constructor() {
    this.reportRepository = new ReportRepository();
  }

  async filterReports(req, res) {
    try {
      const { status } = req.params;
      //   console.log(status);
      const reports = await this.reportRepository.filter(status);
      if (!reports) {
        res.status(404).send(`No reports with ${status} status`);
      } else {
        res.status(201).send({
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
