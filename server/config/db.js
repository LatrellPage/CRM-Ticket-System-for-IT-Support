require('dotenv').config({ path: '../.env' });
console.log(`MONGODB_URI: ${process.env.MONGODB_URI}`);


const mongoose = require('mongoose');

const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Export the Mongoose connection
module.exports = mongoose;