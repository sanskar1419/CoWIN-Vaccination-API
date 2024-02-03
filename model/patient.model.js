// Defining PatientModel class
export default class PatientModel {
  constructor(name, userType, userName, id) {
    this._id = id;
    this.name = name;
    this.userType = userType;
    this.userName = userName;
  }
}
