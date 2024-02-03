import User from "../schema/user.schema.js";

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
}
