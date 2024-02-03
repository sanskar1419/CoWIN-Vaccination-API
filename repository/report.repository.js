import Report from "../schema/report.schema.js";

export default class ReportRepository {
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
