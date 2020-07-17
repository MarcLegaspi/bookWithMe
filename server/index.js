const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./config/dev');

const rentalRoutes = require('./routes/rentals');

//Models
//const Rental = require('./models/rental');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to DB!");
  });

// Middleware
// parse application/json
app.use(bodyParser.json())

app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})