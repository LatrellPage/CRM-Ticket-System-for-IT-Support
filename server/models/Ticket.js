const { Schema, model } = require('mongoose');
const Category = require('./Category');
// const Priority = require('./Priority');

const ticketSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  // priority: {
  //   type: Schema.Types.ObjectId,
  //   ref: Priority, // References the priority of the ticket
  // },
  category: {
    type: Schema.Types.ObjectId,
    ref: Category,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // References the owner/user who created the ticket
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User', // References the admin that is assigned to the ticket
  },
  status: {
    type: String,
    enum: ['active', 'complete'],
    default: 'active', // Tickets are initially set as active
  },
},
{
  toJSON: {
    virtuals: true,
  },
}
);

ticketSchema.virtual('assigned').get(function () {
  return this.user != null;
});

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;
