const mongoose = require('mongoose');
const Ticket = require('./Ticket'); // Import the Ticket model
const Category = require('./Category');

const adminSchema = new mongoose.Schema({
  name: String,
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

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
