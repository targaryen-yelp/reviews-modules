const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviewsDB');
//{ useNewUrlParser: true }

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function() {
  console.log('Now connected to the reviews DB')
});

module.exports = db;