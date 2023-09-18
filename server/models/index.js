const User = require('./User');
const Ticket = require('./Ticket');
const Category = require('./Category');

module.exports = { User, Ticket, Category };

// Imports all models into one object, making it easer to use in other places of the application
// You can import model and access each model using module.{model name}