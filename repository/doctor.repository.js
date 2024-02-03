// Importing necessary file, module and package , and creating instances of them
import User from "../schema/user.schema.js";

// Defining DoctorRepository class and there method
export default class DoctorRepository {
  // Method for adding doctor to db
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
  // Method for finding doctor based on user name
  async findDoctor(userName) {
    try {
      return await User.findOne({ userName });
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
