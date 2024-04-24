// Libraries
const mongoose = require('mongoose');
const db_url = "mongodb+srv://Vansh:Vansh@freelancing.ioxxoqc.mongodb.net/?retryWrites=true&w=majority&appName=FreeLancing";

// Database Connection
mongoose.connect(db_url, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully");
  }
})