const mongoose = require('mongoose');
const Ticket = require('./Ticket'); // Import the Ticket model
const Category = require('./Category');

const userSchema = new mongoose.Schema({
  name: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  email: String,
  password: String, // Hashed and salted password
  // Reference to tickets that are assigned to the admin
  assignedTickets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Ticket, // Reference to the Ticket model
  }],
  // Reference to categories this admin has skill/categories that he or she can be assigned to
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Category, // Reference to the Category model
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
