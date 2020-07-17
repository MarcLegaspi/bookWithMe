const rentals = require('./data/rental');
const Rental = require('../models/rental');

class FakeDb {
 
  clean() {
    return Rental.deleteMany({});
  }

  addData() {
    return Rental.create(rentals);
  }
  
  async populateData() {
    await this.clean();
    await this.addData();
  }

}

module.exports = FakeDb