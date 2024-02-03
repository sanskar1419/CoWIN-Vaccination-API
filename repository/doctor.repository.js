import User from "../schema/user.schema.js";

export default class DoctorRepository {
  async add(newUser) {
    try {
      const existingDoctor = await User.findOne({ userName: newUser.userName });
      if (existingDoctor) {
        return;
      }
      const newDoctorRecord = await User.create(newUser);
      return newDoctorRecord;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }

  async findDoctor(userName) {
    try {
      return await User.findOne({ userName });
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
