const User = require('./User');
const Ticket = require('./Ticket');
const Category = require('./Category');
const Admin = require('./Admin');
const Priority = require('./Priority');

module.exports = { User, Ticket, Category, Admin, Priority};

// Imports all models into one object, making it easer to use in other places of the application
// You can import model and access each model using module.{model name}