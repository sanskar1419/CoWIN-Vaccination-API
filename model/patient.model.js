export default class PatientModel {
  constructor(name, price, sizes, imageURL, category, description, id) {
    this._id = id;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }
}
