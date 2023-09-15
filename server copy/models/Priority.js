const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({
  name: String
  
});

const Priority = mongoose.model('Priority', prioritySchema);

module.exports = Priority;
