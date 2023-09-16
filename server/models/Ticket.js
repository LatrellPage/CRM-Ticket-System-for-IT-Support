const mongoose = require('mongoose');
const Category = require('./Category');
// const Priority = require('./Priority');
const User = require('./User');

const ticketSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: Date,
  // priority: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: Priority, // References the priority of the ticket
  // },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category, // References the category of the ticket
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User, // References the owner/user who created the ticket
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User, // References the admin that is assigned to the ticket
  },
  status: {
    type: String,
    enum: ['active', 'complete'],
    default: 'active', // Tickets are initially set as active
  },
});

ticketSchema.virtual('assigned').get(function () {
  return this.user != null;
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
