const mongoose = require('mongoose');
const config = require('../config/dev');
const FakeDb = require('./FakeDB');


mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async (err) => {
      if (err) {
        console.log(err);
      }

      const fakeDb = new FakeDb();
      console.log('Starting populating Db');
      await fakeDb.populateData();
      await mongoose.connection.close();
      console.log("Db has been populated!");
    });