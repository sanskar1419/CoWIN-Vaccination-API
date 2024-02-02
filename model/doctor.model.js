export default class DoctorModel {
  constructor(name, userType, userName, password, id) {
    this._id = id;
    this.name = name;
    this.userType = userType;
    this.userName = userName;
    this.password = password;
  }
}
