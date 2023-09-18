const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Ticket = require('./Ticket'); // Import the Ticket model
const Category = require('./Category');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  }, // Hashed and salted password
  // Reference to tickets that are assigned to the admin
  assignedTickets: [{
    type: Schema.Types.ObjectId,
    ref: 'Ticket'
  }],
  // // Reference to categories this admin has skill/categories that he or she can be assigned to
  skills: [{
    type: Schema.Types.ObjectId,
    ref: Category
  }],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
